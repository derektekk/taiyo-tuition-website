import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ScrollAnimateText from "./ScrollAnimateText";
import SuccessModal from "./SuccessModal";

const ContactForm = () => {
    const formRef = useRef(null);
    const subjectDropdownRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");
    const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        phone: "",
        student_name: "",
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
        "English Units 3 & 4",
        "Maths Methods Units 1/2 or 3/4",
        "Chemistry Units 1/2 or 3/4",
        "Physics Units 1/2 or 3/4",
        "Biology Units 1/2 or 3/4",
        "Specialist Maths Units 3 & 4",
        "General Maths Units 1/2 or 3/4",
        "Year 5-10 English",
        "Year 5-10 Maths",
    ];

    const VITE_EMAILJS_SERVICE_ID = "service_3as7qlv";
    const VITE_EMAILJS_TEMPLATE_ID_ADMIN = "template_e7d04dg";
    const VITE_EMAILJS_PUBLIC_KEY = "7-LqSOcZKhS3c7raS";

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                subjectDropdownRef.current &&
                !subjectDropdownRef.current.contains(event.target)
            ) {
                setIsSubjectDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
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

    const handleRemoveSubject = (subject) => {
        setFormData((prev) => ({
            ...prev,
            subjects: prev.subjects.filter((s) => s !== subject),
        }));
    };

    const handleSubjectDropdownToggle = () => {
        setIsSubjectDropdownOpen((prev) => !prev);
    };

    const handleSubjectDropdownKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSubjectDropdownToggle();
        } else if (e.key === "Escape") {
            setIsSubjectDropdownOpen(false);
        }
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
                VITE_EMAILJS_PUBLIC_KEY
            );

            setShowSuccess(true);
            setFormData({
                from_name: "",
                from_email: "",
                phone: "",
                student_name: "",
                year_level: "",
                subjects: [],
                study_method: "",
            });
        } catch (err) {
            console.error("EmailJS Error:", err);
            setError(
                "Sorry, there was an error sending your message. Please try again or contact us directly via email."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseModal = () => {
        setShowSuccess(false);
    };

    const inputClasses =
        "w-full bg-white text-gray-700 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 placeholder:text-gray-400";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-2";
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
                className="bg-white rounded-2xl shadow-lg px-8 py-16"
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
                    Fill out the form below and we&apos;ll get back to you
                    within 24-48 hours
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
                                error && !formData.from_name
                                    ? "form-error"
                                    : undefined
                            }
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="from_email" className={labelClasses}>
                            Email Address{" "}
                            <span className="text-red-500">*</span>
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
                                error && !formData.from_email
                                    ? "form-error"
                                    : undefined
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

                    {/* Student Name */}
                    <div>
                        <label htmlFor="student_name" className={labelClasses}>
                            Student Name
                        </label>
                        <input
                            type="text"
                            id="student_name"
                            name="student_name"
                            value={formData.student_name}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="Enter the student's name"
                        />
                    </div>

                    {/* Year Level & Preferred Study Method - Side by Side on larger screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Year Level */}
                        <div>
                            <label
                                htmlFor="year_level"
                                className={labelClasses}
                            >
                                Year Level{" "}
                                <span className="text-red-500">*</span>
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
                            <label
                                htmlFor="study_method"
                                className={labelClasses}
                            >
                                Preferred Study Method{" "}
                                <span className="text-red-500">*</span>
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
                                    <option value="">
                                        Select study method
                                    </option>
                                    <option value="Online">Online</option>
                                    <option value="In Person">
                                        In Person (Mount Waverly Branch)
                                    </option>
                                </select>
                                <SelectArrow />
                            </div>
                        </div>
                    </div>

                    {/* Subject Multi-Select */}
                    <div className="relative" ref={subjectDropdownRef}>
                        <label id="subjects-label" className={labelClasses}>
                            Subjects Interested In{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        {/* Hidden input for emailjs */}
                        <input
                            type="hidden"
                            name="subject"
                            value={formData.subjects.join(", ")}
                        />
                        <div
                            role="combobox"
                            aria-expanded={isSubjectDropdownOpen}
                            aria-haspopup="listbox"
                            aria-labelledby="subjects-label"
                            aria-controls="subjects-listbox"
                            tabIndex={0}
                            onClick={handleSubjectDropdownToggle}
                            onKeyDown={handleSubjectDropdownKeyDown}
                            className={`${inputClasses} cursor-pointer min-h-[48px] flex items-center justify-between gap-2 pr-10`}
                        >
                            <span
                                className={
                                    formData.subjects.length === 0
                                        ? "text-gray-400"
                                        : "text-gray-700"
                                }
                            >
                                {formData.subjects.length === 0
                                    ? "Select subjects"
                                    : `${formData.subjects.length} subject${
                                          formData.subjects.length > 1
                                              ? "s"
                                              : ""
                                      } selected`}
                            </span>
                            <div className="pointer-events-none absolute  right-0 flex items-center pr-3">
                                <svg
                                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                                        isSubjectDropdownOpen
                                            ? "rotate-180"
                                            : ""
                                    }`}
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
                        </div>

                        {/* Dropdown Options */}
                        {isSubjectDropdownOpen && (
                            <ul
                                id="subjects-listbox"
                                role="listbox"
                                aria-multiselectable="true"
                                aria-labelledby="subjects-label"
                                className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
                            >
                                {subjects.map((subj) => {
                                    const isSelected =
                                        formData.subjects.includes(subj);
                                    return (
                                        <li
                                            key={subj}
                                            role="option"
                                            aria-selected={isSelected}
                                            onClick={() =>
                                                handleSubjectToggle(subj)
                                            }
                                            onKeyDown={(e) => {
                                                if (
                                                    e.key === "Enter" ||
                                                    e.key === " "
                                                ) {
                                                    e.preventDefault();
                                                    handleSubjectToggle(subj);
                                                }
                                            }}
                                            tabIndex={0}
                                            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors duration-150 ${
                                                isSelected
                                                    ? "bg-primary/10 text-primary"
                                                    : "hover:bg-gray-100 text-gray-700"
                                            }`}
                                        >
                                            <div
                                                className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${
                                                    isSelected
                                                        ? "bg-primary border-primary"
                                                        : "border-gray-300"
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
                                            <span className="text-sm">
                                                {subj}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>

                    {/* Selected Subjects Tags */}
                    {formData.subjects.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {formData.subjects.map((subj) => (
                                <span
                                    key={subj}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                >
                                    {subj}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleRemoveSubject(subj)
                                        }
                                        className="ml-1 hover:bg-primary/20 rounded-full p-0.5 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                                        aria-label={`Remove ${subj}`}
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            ))}
                        </div>
                    )}

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
                        className="w-full bg-primary text-white px-8 py-4 rounded-2xl -medium text-lg hover:bg-[#3482FF] hover:scale-[1.02] transition-all ease-in-out duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
                            "Send Message"
                        )}
                    </button>
                </form>
            </section>

            <SuccessModal isOpen={showSuccess} onClose={handleCloseModal} />
        </>
    );
};

export default ContactForm;
