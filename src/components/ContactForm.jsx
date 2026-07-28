import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ScrollAnimateText from "./ScrollAnimateText";

const ContactForm = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    year_level: "",
    subjects: [],
    study_method: "",
  });

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

  const subjects = [
    "Year 5 English",
    "Year 6 English",
    "Year 7 English",
    "Year 8 English",
    "Year 9 English",
    "Year 10 English",
    "Year 5 Maths",
    "Year 6 Maths",
    "Year 7 Maths",
    "Year 8 Maths",
    "Year 9 Maths",
    "Year 10 Maths",
  ];

  const year11Subjects = [
    "English Units 1/2 or 3/4",
    "Maths Methods Units 1/2 or 3/4",
    "Chemistry Units 1/2 or 3/4",
    "Physics Units 1/2 or 3/4",
    "Biology Units 1/2 or 3/4",
    "Specialist Maths Units 3 & 4",
    "General Maths Units 1/2 or 3/4",
  ];

  const year12Subjects = [
    "English 3/4",
    "Maths Methods 3/4",
    "Chemistry 3/4",
    "Physics 3/4",
    "Biology 3/4",
    "Specialist Maths 3/4",
    "General Maths 3/4",
  ];

  const SELECTIVE_ENTRY_PROGRAM = "Selective Entry Program";
  const selectiveEntryYearLevels = ["Year 5", "Year 6", "Year 7", "Year 8"];

  const VITE_EMAILJS_SERVICE_ID = "service_3as7qlv";
  const VITE_EMAILJS_TEMPLATE_ID_ADMIN = "template_e7d04dg";
  const VITE_EMAILJS_PUBLIC_KEY = "7-LqSOcZKhS3c7raS";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getFilteredSubjects = (yearLevel) => {
    if (!yearLevel) return [];

    if (yearLevel === "Year 11") return year11Subjects;
    if (yearLevel === "Year 12") return year12Subjects;

    // Trailing space keeps a single-digit year from matching "Year 10" subjects
    const yearSubjects = subjects.filter((subj) =>
      subj.startsWith(`${yearLevel} `),
    );

    if (selectiveEntryYearLevels.includes(yearLevel)) {
      return [...yearSubjects, SELECTIVE_ENTRY_PROGRAM];
    }

    return yearSubjects;
  };

  const filteredSubjects = getFilteredSubjects(formData.year_level);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "year_level") {
      setFormData((prev) => ({
        ...prev,
        year_level: value,
        subjects: [],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    if (error) setError("");
  };

  const handleSubjectToggle = (subject) => {
    setFormData((prev) => {
      const isSelected = prev.subjects.includes(subject);
      const newSubjects = isSelected
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject];
      return {
        ...prev,
        subjects: newSubjects,
      };
    });
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
      setError("Please select at least one subject");
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

      // Redirect to thank-you page so Google Ads can measure the conversion on page load
      navigate("/enroll/thank-you");
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(
        "Sorry, there was an error sending your message. Please try again or contact us directly via email.",
      );
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-white text-gray-700 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-400";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-3";
  const selectClasses = `${inputClasses} appearance-none cursor-pointer pr-10`;

  const SelectArrow = () => (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <svg
        className="h-5 w-5 text-gray-400"
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
        className="bg-white rounded-2xl shadow-lg px-8 py-8 md:py-16"
        aria-labelledby="contact-form-heading"
      >
        <ScrollAnimateText
          as="h2"
          id="contact-form-heading"
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center"
        >
          Ready to Get Started?
        </ScrollAnimateText>
        <ScrollAnimateText
          as="p"
          className="text-lg text-gray-600 mb-8 text-center"
        >
          Fill out the form below and we&apos;ll get back to you within a few
          hours
        </ScrollAnimateText>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
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
                    In Person (Mount Waverly Branch)
                  </option>
                </select>
                <SelectArrow />
              </div>
            </div>
          </div>

          {/* Subjects Grid */}
          <div>
            <label id="subjects-label" className={labelClasses}>
              Subjects Interested In <span className="text-red-500">*</span>
            </label>
            {/* Hidden input for emailjs */}
            <input
              type="hidden"
              name="subject"
              value={formData.subjects.join(", ")}
            />
            {!formData.year_level ? (
              <p className="text-sm text-gray-400 italic py-2">
                Please select a year level first to see available subjects.
              </p>
            ) : (
              <div
                className="gap-3"
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gridAutoFlow: isMobile ? "row" : "column",
                  gridTemplateRows: isMobile
                    ? "auto"
                    : `repeat(${Math.ceil(filteredSubjects.length / 2)}, auto)`,
                }}
              >
                {filteredSubjects.map((subj) => {
                  const isSelected = formData.subjects.includes(subj);
                  return (
                    <label
                      key={subj}
                      className="flex items-start gap-3 py-2 cursor-pointer transition-all duration-200"
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleSubjectToggle(subj)}
                        className="sr-only"
                        aria-label={subj}
                      />
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                          isSelected
                            ? "bg-primary border-primary scale-110"
                            : "border-gray-400 hover:border-gray-500"
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
                      <span className="text-sm text-gray-700 leading-tight flex-1">
                        {subj}
                      </span>
                    </label>
                  );
                })}
              </div>
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
            className="w-full bg-primary text-white px-8 py-4 rounded-2xl -medium text-lg hover:bg-[#3482FF] hover:scale-[1.02] transition-all ease-in-out duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
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
