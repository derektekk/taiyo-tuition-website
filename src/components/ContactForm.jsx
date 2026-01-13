import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ScrollAnimateText from "./ScrollAnimateText";
import SuccessModal from "./SuccessModal";

const ContactForm = () => {
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        phone: "",
        student_name: "",
        year_level: "",
        subject: "",
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
        "Maths Methods Units 1/2 & 3/4",
        "Chemistry Units 1/2 & 3/4",
        "Physics Units 1/2 & 3/4",
        "Biology Units 1/2 & 3/4",
        "Specialist Maths Units 3 & 4",
        "General Maths Units 1/2 & 3/4",
        "Year 5-10 English",
        "Year 5-10 Maths",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
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
        if (!formData.subject) {
            setError("Please select a subject");
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
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setShowSuccess(true);
            setFormData({
                from_name: "",
                from_email: "",
                phone: "",
                student_name: "",
                year_level: "",
                subject: "",
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
                className="bg-white rounded-2xl shadow-lg p-8"
                aria-labelledby="contact-form-heading"
            >
                <ScrollAnimateText
                    as="h2"
                    id="contact-form-heading"
                    className="text-3xl font-bold text-gray-900 mb-4 text-center"
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
                            placeholder="Enter the student's name (if parent/guardian)"
                        />
                    </div>

                    {/* Year Level & Subject - Side by Side on larger screens */}
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

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className={labelClasses}>
                                Subject Interested In{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={selectClasses}
                                    aria-required="true"
                                >
                                    <option value="">Select a subject</option>
                                    {subjects.map((subj) => (
                                        <option key={subj} value={subj}>
                                            {subj}
                                        </option>
                                    ))}
                                </select>
                                <SelectArrow />
                            </div>
                        </div>
                    </div>

                    {/* Preferred Study Method */}
                    <div>
                        <label htmlFor="study_method" className={labelClasses}>
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
                                <option value="">Select study method</option>
                                <option value="Online">Online</option>
                                <option value="In Person">In Person</option>
                            </select>
                            <SelectArrow />
                        </div>
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
                        className="w-full bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#3482FF] hover:scale-[1.02] transition-all ease-in-out duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
