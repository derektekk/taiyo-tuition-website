import { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ScrollAnimateText from "./ScrollAnimateText";
import { getSubjectBySlug, subjects } from "../data/subjects";

const yearLevels = [
  "Year 5",
  "Year 6",
  "Year 7",
  "Year 8",
  "Year 9",
  "Year 10",
  "Year 11",
  "Year 12",
];

/** Which year band a year level sits in, plus whether Selective applies. */
const YEAR_RULES = {
  "Year 5": { band: "5–6", selective: true },
  "Year 6": { band: "5–6", selective: true },
  "Year 7": { band: "7–8", selective: true },
  "Year 8": { band: "7–8", selective: true },
  "Year 9": { band: "9–10", selective: false },
  "Year 10": { band: "9–10", selective: false },
  "Year 11": { vce: true },
  "Year 12": { vce: true },
};

/** Unit pairs a VCE student can pick from, first one is the default. */
const VCE_UNITS = {
  "Year 11": ["1/2", "3/4"],
  "Year 12": ["3/4"],
};

/**
 * Checkbox options for a year level, in data order. VCE subjects split into
 * one option per unit pair; year-band classes are labelled with the chosen year.
 */
const classOptionsForYear = (yearLevel) => {
  const rule = YEAR_RULES[yearLevel];
  if (!rule) return [];
  if (rule.vce) {
    return subjects
      .filter((subject) => subject.group === "vce")
      .flatMap((subject) =>
        VCE_UNITS[yearLevel].map((units) => ({
          id: `${subject.slug}-${units.replace("/", "-")}`,
          slug: subject.slug,
          label: `VCE ${subject.shortName} ${units}`,
        })),
      );
  }
  return subjects
    .filter((subject) =>
      subject.group === "selective"
        ? rule.selective
        : subject.group === "years" && subject.yearBand === rule.band,
    )
    .map((subject) => ({
      id: subject.slug,
      slug: subject.slug,
      label:
        subject.group === "selective"
          ? subject.name
          : `${yearLevel} ${subject.shortName}`,
    }));
};

/** Option for a class that arrived from a class page before a year is chosen. */
const pinnedOptionFor = (subject) => ({
  id: subject.slug,
  slug: subject.slug,
  label:
    subject.group === "vce" ? `VCE ${subject.shortName}` : subject.name,
});

const emptyForm = {
  from_name: "",
  from_email: "",
  phone: "",
  year_level: "",
  subjects: [],
  study_method: "",
};

/** Seed the ticked class from ?subject=<slug>. Unknown slugs are ignored. */
const seedFromSlug = (slug) => {
  const subject = slug ? getSubjectBySlug(slug) : undefined;
  if (!subject) return { form: emptyForm, pinned: null };
  return {
    form: { ...emptyForm, subjects: [subject.slug] },
    pinned: subject.slug,
  };
};

const VITE_EMAILJS_SERVICE_ID = "service_3as7qlv";
const VITE_EMAILJS_TEMPLATE_ID_ADMIN = "template_e7d04dg";
const VITE_EMAILJS_PUBLIC_KEY = "7-LqSOcZKhS3c7raS";

const ContactForm = ({ hideIntro = false }) => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const subjectParam = searchParams.get("subject");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(() => seedFromSlug(subjectParam).form);
  // The class ticked from the URL stays visible whatever the year says, until
  // the visitor unticks it. Nothing else is pinned.
  const [pinnedSlug, setPinnedSlug] = useState(
    () => seedFromSlug(subjectParam).pinned,
  );
  const appliedParam = useRef(subjectParam);

  // Re-seed if the query changes while the form stays mounted (e.g. Enrol from
  // one class page, then another). Skips the initial mount.
  useEffect(() => {
    if (appliedParam.current === subjectParam) return;
    appliedParam.current = subjectParam;
    const seed = seedFromSlug(subjectParam);
    setFormData((prev) => ({
      ...prev,
      year_level: seed.form.year_level,
      subjects: seed.form.subjects,
    }));
    setPinnedSlug(seed.pinned);
  }, [subjectParam]);

  const yearOptions = classOptionsForYear(formData.year_level);
  const pinnedSubject =
    pinnedSlug &&
    formData.subjects.includes(pinnedSlug) &&
    !yearOptions.some((option) => option.id === pinnedSlug)
      ? getSubjectBySlug(pinnedSlug)
      : undefined;
  const visibleOptions = pinnedSubject
    ? [pinnedOptionFor(pinnedSubject), ...yearOptions]
    : yearOptions;

  const selectedNames = formData.subjects
    .map((id) => visibleOptions.find((option) => option.id === id)?.label)
    .filter(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "year_level") {
      // Keep anything still valid for the new year. The pinned class moves to
      // that year's option for it, or stays as-is if the year has none.
      const options = classOptionsForYear(value);
      const allowed = new Set(options.map((option) => option.id));
      setFormData((prev) => {
        const kept = prev.subjects.filter((id) => allowed.has(id));
        const pinnedTicked =
          pinnedSlug &&
          prev.subjects.some(
            (id) => id === pinnedSlug || id.startsWith(`${pinnedSlug}-`),
          );
        const pinnedCarried =
          options.find((option) => option.slug === pinnedSlug)?.id ??
          pinnedSlug;
        const pinnedKept = kept.some(
          (id) => options.find((option) => option.id === id)?.slug === pinnedSlug,
        );
        return {
          ...prev,
          year_level: value,
          subjects:
            pinnedTicked && !pinnedKept ? [pinnedCarried, ...kept] : kept,
        };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (error) setError("");
  };

  const handleSubjectToggle = (option) => {
    setFormData((prev) => {
      const isSelected = prev.subjects.includes(option.id);
      return {
        ...prev,
        subjects: isSelected
          ? prev.subjects.filter((item) => item !== option.id)
          : [...prev.subjects, option.id],
      };
    });
    if (option.slug === pinnedSlug) setPinnedSlug(null);
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.from_name.trim()) {
      setError("Please enter your name");
      return false;
    }
    if (!formData.from_email.trim()) {
      setError("Please enter your email address");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Please enter your phone number");
      return false;
    }
    if (!formData.year_level) {
      setError("Please select a year level");
      return false;
    }
    if (formData.subjects.length === 0) {
      setError("Please select at least one class");
      return false;
    }
    if (!formData.study_method) {
      setError("Please select a preferred study method");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Bots fill every field. Stop before sending, and before the thank-you
    // redirect, which would record an Ads conversion.
    if (formRef.current.elements.company_website?.value) return;

    setIsLoading(true);
    setError("");

    try {
      // Send notification email to admin
      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID_ADMIN,
        formRef.current,
        VITE_EMAILJS_PUBLIC_KEY,
      );

      // Click conversion: wait for gtag, then go to thank-you. Fallback if the tag is blocked.
      if (typeof window.gtag_report_conversion === "function") {
        window.gtag_report_conversion("/enroll/thank-you");
      } else {
        navigate("/enroll/thank-you");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(
        "Sorry, there was an error sending your message. Please try again or contact us directly via email.",
      );
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-tertiary text-black px-4 py-3 rounded-lg border border-primary/25 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-200 placeholder:text-black-primary/50";
  const labelClasses = "block body-sm font-medium text-black mb-3";
  const selectClasses = `${inputClasses} appearance-none cursor-pointer pr-10`;

  const SelectArrow = () => (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <svg
        className="h-5 w-5 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  return (
    <>
      <section
        className={`bg-white rounded-2xl p-6 md:p-10 ${hideIntro ? "" : "shadow-lg"}`}
        aria-labelledby="contact-form-heading"
      >
        {hideIntro ? (
          <h2 id="contact-form-heading" className="sr-only">
            Trial booking form
          </h2>
        ) : (
          <>
            <ScrollAnimateText
              as="h2"
              id="contact-form-heading"
              className="display text-black mb-4 text-center"
            >
              Book a free trial
            </ScrollAnimateText>
            <ScrollAnimateText
              as="p"
              className="body-lg text-black-primary section-heading text-center"
            >
              Fill out the form below and we&apos;ll get back to you within a few
              hours
            </ScrollAnimateText>
          </>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
          >
            <label htmlFor="company_website">Leave this field empty</label>
            <input
              type="text"
              id="company_website"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="from_name" className={labelClasses}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Enter your full name"
              aria-required="true"
              aria-describedby={
                error && !formData.from_name ? "form-error" : undefined
              }
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="from_email" className={labelClasses}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Enter your email address"
              aria-required="true"
              aria-describedby={
                error && !formData.from_email ? "form-error" : undefined
              }
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Enter your phone number"
              aria-required="true"
            />
          </div>

          {/* Year Level & Preferred Study Method - Side by Side on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Year Level */}
            <div>
              <label htmlFor="year_level" className={labelClasses}>
                Year Level <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="year_level"
                  name="year_level"
                  value={formData.year_level}
                  onChange={handleChange}
                  className={selectClasses}
                  aria-required="true"
                >
                  <option value="">Select year level</option>
                  {yearLevels.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <SelectArrow />
              </div>
            </div>

            {/* Preferred Study Method */}
            <div>
              <label htmlFor="study_method" className={labelClasses}>
                Preferred Study Method <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="study_method"
                  name="study_method"
                  value={formData.study_method}
                  onChange={handleChange}
                  className={selectClasses}
                  aria-required="true"
                >
                  <option value="">Select study method</option>
                  <option value="Online">Online</option>
                  <option value="In Person">
                    In Person (Mount Waverley Branch)
                  </option>
                </select>
                <SelectArrow />
              </div>
            </div>
          </div>

          {/* Classes */}
          <div>
            <label id="subjects-label" className={labelClasses}>
              Classes Interested In <span className="text-red-500">*</span>
            </label>
            {/* Hidden input for emailjs: class names, not slugs */}
            <input
              type="hidden"
              name="subject"
              value={selectedNames.join(", ")}
            />
            {visibleOptions.length === 0 ? (
              <p className="body-sm text-black-primary py-2">
                Please select a year level first to see available classes.
              </p>
            ) : (
              <div
                role="group"
                aria-labelledby="subjects-label"
                className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2"
              >
                {visibleOptions.map((option) => {
                  const isSelected = formData.subjects.includes(option.id);
                  return (
                    <label
                      key={option.id}
                      className="flex items-start gap-3 py-2 cursor-pointer transition-all duration-200"
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleSubjectToggle(option)}
                        className="sr-only"
                        aria-label={option.label}
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isSelected
                            ? "bg-primary border-primary scale-110"
                            : "border-primary/40 hover:border-primary"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="body-sm text-black leading-tight flex-1">
                        {option.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
            {!formData.year_level && visibleOptions.length > 0 && (
              <p className="body-sm text-black-primary py-2">
                Select a year level to see the other classes.
              </p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div
              id="form-error"
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="h5 w-full bg-primary text-white px-8 py-4 rounded-2xl hover:bg-[#3482FF] hover:scale-[1.02] transition-all ease-in-out duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
            aria-busy={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
