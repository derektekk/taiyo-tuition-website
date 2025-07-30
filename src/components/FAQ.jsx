import React from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollAnimateText from "./ScrollAnimateText";

const FAQ = () => {
    const [openItems, setOpenItems] = React.useState(new Set());

    const faqData = [
        {
            id: 1,
            question: "What subjects do you offer tutoring for?",
            answer: (
                <div>
                    <p className="mb-3">
                        We offer tutoring across{" "}
                        <span className="font-bold underline decoration-2">
                            Primary,
                        </span>{" "}
                        <span className="font-bold underline decoration-2">
                            Secondary,
                        </span>{" "}
                        and{" "}
                        <span className="font-bold underline decoration-2">
                            VCE
                        </span>{" "}
                        levels. Our VCE subjects include:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 font-semibold">
                        <li>English 3/4</li>
                        <li>Maths Methods 1/2 + 3/4</li>
                        <li>Chemistry 1/2 + 3/4</li>
                        <li>Physics 1/2 + 3/4</li>
                        <li>Biology 1/2 + 3/4</li>
                        <li>Specialist Maths 3/4</li>
                        <li>Year 5 - 10 English</li>
                        <li>Year 5 - 10 Maths</li>
                    </ul>
                </div>
            ),
        },
        {
            id: 2,
            question: "What are your class sizes?",
            answer: (
                <p>
                    Our classes are strictly capped at{" "}
                    <span className="font-bold underline decoration-2">
                        10 students
                    </span>{" "}
                    to ensure each student receives focused attention, support,
                    and interaction with their tutor.
                </p>
            ),
        },
        {
            id: 3,
            question: "Do you offer online classes?",
            answer: (
                <p>
                    Yes! We offer both{" "}
                    <span className="font-bold underline decoration-2">
                        in-person and online classes
                    </span>{" "}
                    to suit your schedule and learning preferences. Online
                    lessons follow the same high-quality format with live,
                    interactive sessions and digital resources.
                </p>
            ),
        },
        {
            id: 4,
            question: "What is your teaching methodology?",
            answer: (
                <p>
                    We believe our mentoring is built around{" "}
                    <span className="font-bold">
                        clarity, structure and personal connection
                    </span>
                    . With a maximum of{" "}
                    <span className="font-bold">10 students</span> per class,
                    tutors are able to provide individualised guidance while
                    maintaining an engaging group dynamic. Lessons are designed
                    to break down complex concepts step-by-step, designed to
                    break down complex concepts step-by-step, reinforce key
                    skills, and prepare students for real exam conditions. Our
                    approach blends curriculum alignment with strategy-focused
                    teaching — so students don't just learn content, they learn
                    how to apply it confidently.
                </p>
            ),
        },
        {
            id: 5,
            question: "How do I enroll my child?",
            answer: "Enrolling is easy! Just click the ‘Enrol Now’ button or contact us via phone, email, or our website form. We’ll help you arrange a free trial lesson or consultation to assess your child’s needs and recommend the most suitable class.",
        },
        {
            id: 6,
            question: "What are your fees and payment options?",
            answer: (
                <div>
                    <p className="mb-4">
                        While we offer a comprehensive range of resources and
                        support, our tutoring programs are designed to remain
                        accessible — without the hefty price tag.
                    </p>

                    <p className="mb-3 font-semibold underline decoration-2">
                        Here's a breakdown of our current weekly fees:
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                        <li>
                            <span className="font-bold">VCE Units 3/4:</span>{" "}
                            $80 per subject
                        </li>
                        <li>
                            <span className="font-bold">VCE Units 1/2:</span>{" "}
                            $75 per subject
                        </li>
                        <li>
                            <span className="font-bold">Year 7-10 Maths:</span>{" "}
                            $70 per subject
                        </li>
                        <li>
                            <span className="font-bold">Year 5–6 Maths:</span>{" "}
                            $65 per subject
                        </li>
                    </ul>

                    <p className="mb-3 font-semibold underline decoration-2">
                        Each enrolment includes:
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                        <li>
                            Weekly{" "}
                            <span className="font-bold">2-hour classes</span>
                        </li>
                        <li>
                            Extra{" "}
                            <span className="font-bold">
                                workshops or revision sessions
                            </span>{" "}
                            (where applicable)
                        </li>
                        <li>
                            Access to all learning materials, including:
                            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6 mt-2">
                                <li>Homework booklets</li>
                                <li>Summary sheets and cheat notes</li>
                                <li>Practice tests, SACs, and past exams</li>
                                <li>Bound reference resources (for VCE)</li>
                            </ul>
                        </li>
                        <li>
                            Unlimited{" "}
                            <span className="font-bold">
                                1-on-1 help outside of class
                            </span>{" "}
                            (for VCE students)
                        </li>
                        <li>
                            <span className="font-bold">24/7 access</span> to
                            our online resource portal
                        </li>
                    </ul>

                    <p className="text-gray-700 italic">
                        We focus on value and results — everything your child
                        needs to succeed is included from day one.
                    </p>
                </div>
            ),
        },
        {
            id: 7,
            question: "Do you provide study materials?",
            answer: (
                <p>
                    Yes — all students receive{" "}
                    <span className="font-bold">
                        custom notes, worksheets, and practice exams
                    </span>{" "}
                    tailored to their subject and year level. These are updated
                    regularly to reflect current syllabus requirements and exam
                    standards.
                </p>
            ),
        },
    ];

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const handleKeyDown = (event, id) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleItem(id);
        }
    };

    return (
        <section className="h-auto w-full bg-linear-0 to-gradient-secondary from-gradient-primary section-card">
            <div className="mx-auto flex flex-col flex-wrap items-center justify-center container-responsive">
                <ScrollAnimateText
                    as="h1"
                    className="text-4xl uppercase font-bold mb-12 text-center"
                >
                    Frequently Asked Questions
                </ScrollAnimateText>
                <div className="w-full max-w-4xl">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="mb-4"
                        >
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <button
                                    onClick={() => toggleItem(faq.id)}
                                    onKeyDown={(e) => handleKeyDown(e, faq.id)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                                    aria-expanded={openItems.has(faq.id)}
                                    aria-controls={`faq-answer-${faq.id}`}
                                    tabIndex="0"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{
                                            rotate: openItems.has(faq.id)
                                                ? 45
                                                : 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                        }}
                                        className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                                    >
                                        <svg
                                            className="w-5 h-5 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openItems.has(faq.id) && (
                                        <motion.div
                                            id={`faq-answer-${faq.id}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-4 pt-0">
                                                <div className="border-t border-gray-100 pt-4">
                                                    <div className="text-gray-700 leading-relaxed">
                                                        {typeof faq.answer ===
                                                        "string" ? (
                                                            <p>{faq.answer}</p>
                                                        ) : (
                                                            faq.answer
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
