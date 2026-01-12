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
        message: "",
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
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        setError("");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
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
                message: "",
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
        "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200";
    const labelClasses = "block text-sm font-medium text-gray-700 mb-2";

    return (
        <>
            <section
                className="bg-blue-50 rounded-2xl shadow-lg p-8"
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
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="Enter your phone number"
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
                            placeholder="Enter the student's name (if different)"
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
                                Year Level
                            </label>
                            <select
                                id="year_level"
                                name="year_level"
                                value={formData.year_level}
                                onChange={handleChange}
                                className={`${inputClasses} appearance-none bg-white cursor-pointer`}
                            >
                                <option value="">Select year level</option>
                                {yearLevels.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className={labelClasses}>
                                Subject Interested In
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className={`${inputClasses} appearance-none bg-white cursor-pointer`}
                            >
                                <option value="">Select a subject</option>
                                {subjects.map((subj) => (
                                    <option key={subj} value={subj}>
                                        {subj}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className={labelClasses}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`${inputClasses} resize-none`}
                            placeholder="Tell us about your tutoring needs, questions, or anything else you'd like us to know"
                        />
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
