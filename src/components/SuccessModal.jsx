import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const SuccessModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        // Focus the close button when modal opens
        closeButtonRef.current?.focus();

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        // Prevent body scroll when modal is open
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackdropClick}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="success-modal-title"
                >
                    <motion.div
                        ref={modalRef}
                        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        {/* Success Checkmark */}
                        <motion.div
                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", damping: 15 }}
                        >
                            <motion.svg
                                className="w-10 h-10 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                />
                            </motion.svg>
                        </motion.div>

                        {/* Title */}
                        <h2
                            id="success-modal-title"
                            className="text-2xl font-bold text-gray-900 mb-3"
                        >
                            Message Sent!
                        </h2>

                        {/* Message */}
                        <p className="text-gray-600 mb-8">
                            Thank you for reaching out. We&apos;ll get back to you
                            within 24-48 hours to discuss your tutoring needs.
                        </p>

                        {/* Close Button */}
                        <button
                            ref={closeButtonRef}
                            onClick={onClose}
                            className="bg-primary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#3482FF] hover:scale-105 transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            aria-label="Close success message"
                        >
                            Got it!
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
