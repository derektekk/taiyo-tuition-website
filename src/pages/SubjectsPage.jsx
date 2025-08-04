import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollAnimateText from "../components/ScrollAnimateText";

// Import subject images
import englishVCEImg from "../assets/subjectImages/englishVCEimg.jpg";
import mathMethodsImg from "../assets/subjectImages/mathMethodsImg.jpg";
import chemistryImg from "../assets/subjectImages/chemistryImg.jpg";
import physicsImg from "../assets/subjectImages/physicsImg.jpg";
import biologyImg from "../assets/subjectImages/biologyImg.jpg";
import mathSpecialistImg from "../assets/subjectImages/mathSpecialistImg.jpg";
import english510Img from "../assets/subjectImages/english5-10img.jpg";
import maths510Img from "../assets/subjectImages/maths5-10img.jpg";

const SubjectsPage = () => {
    const [expandedSubjects, setExpandedSubjects] = useState(new Set());

    const subjects = [
        {
            id: 1,
            name: "📘 English Units 3 & 4",
            category: "humanities",
            image: englishVCEImg,
            shortDescription:
                "Build analytical writing, argument analysis, and comparative skills aligned with VCAA exam expectations.",
            detailedDescription: (
                <div>
                    <p className="mb-3">
                        Based on the{" "}
                        <span className="font-semibold underline decoration-primary">
                            VCAA English Study Design
                        </span>
                        , <span className="font-semibold">Units 3 & 4</span>{" "}
                        focus on two main Areas of Study:{" "}
                        <span className="font-semibold">
                            Reading and Responding
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold">Creating Texts</span>.
                        Students analyse texts from the VCAA-approved Text List,
                        exploring themes via the Framework of Ideas, mentor
                        texts, and critical essay writing.
                    </p>
                    <p className="mb-3">
                        Our tailored lessons teach students to: interrogate text
                        structure and language features, craft{" "}
                        <span className="font-semibold">
                            analytical and comparative essays
                        </span>
                        , and develop informed argument responses. Students
                        receive scaffolded practice using{" "}
                        <span className="font-semibold underline decoration-primary">
                            command terms
                        </span>{" "}
                        such as "analyse", "evaluate", and "compare" in
                        alignment with VCAA assessment criteria.
                    </p>
                    <p>
                        In our{" "}
                        <span className="font-semibold underline">
                            capped classes (max 10 students)
                        </span>
                        , discussion is dynamic and individual feedback is
                        immediate. Each student completes{" "}
                        <span className="font-semibold">
                            SAC-style responses
                        </span>
                        , receives targeted marking, and refines writing
                        technique based on graded descriptors.
                    </p>
                </div>
            ),
        },
        {
            id: 2,
            name: "📐 Maths Methods Units 1/2 & 3/4",
            category: "stem",
            image: mathMethodsImg,
            shortDescription:
                "Achieve mastery in algebra, calculus, and functions through structured, exam-driven learning.",
            detailedDescription: (
                <div>
                    <p className="mb-3">
                        Aligned with the{" "}
                        <span className="font-semibold underline decoration-primary">
                            VCAA Mathematics Study Design
                        </span>
                        , Methods{" "}
                        <span className="font-semibold">Units 1/2</span> cover
                        foundational topics: functions, sequences, algebraic
                        techniques, and introductory differential calculus.{" "}
                        <span className="font-semibold">Units 3/4</span> extend
                        into advanced calculus, probability distributions, and
                        statistical applications.
                    </p>
                    <p className="mb-3">
                        Our program emphasises{" "}
                        <span className="font-semibold underline decoration-primary">
                            mathematical fluency and exam technique
                        </span>
                        . Students regularly practise VCAA-style questions,
                        receive CAS calculator training, and learn to handle
                        multi-step problems efficiently.
                    </p>
                    <p>
                        <span className="font-semibold underline decoration-primary">
                            Small classes
                        </span>{" "}
                        allow tutors to monitor working methods closely, correct
                        misconceptions early, and teach the underlying logic of
                        each step.{" "}
                        <span className="font-semibold">
                            Exam-focused revision
                        </span>
                        , <span className="font-semibold">SAC simulation</span>,
                        and frequent feedback ensure confidence by exam time.
                    </p>
                </div>
            ),
        },
        {
            id: 3,
            name: "🧪 Chemistry Units 1/2 & 3/4",
            category: "stem",
            image: chemistryImg,
            shortDescription:
                "Develop scientific reasoning and exam confidence through rigorous chemical theory and data practice.",
            detailedDescription: (
                <div>
                    <p className="mb-3">
                        Following the{" "}
                        <span className="font-semibold underline decoration-primary">
                            VCAA Chemistry Study Design
                        </span>
                        , <span className="font-semibold">Units 1/2</span> focus
                        on chemical fundamentals such as periodicity, bonding,
                        and reaction types.{" "}
                        <span className="font-semibold">Units 3/4</span> move
                        into depth with chemical equilibrium, thermochemistry,
                        acids & bases, redox, and organic chemistry.
                    </p>
                    <p className="mb-3">
                        Our lessons emphasise{" "}
                        <span className="font-semibold underline decoration-primary">
                            scientific literacy
                        </span>
                        , including precision in formula use, data
                        interpretation, and writing scientific explanations,
                        just as required in{" "}
                        <span className="font-semibold">
                            SACs and external exams
                        </span>
                        .
                    </p>
                    <p>
                        <span className="font-semibold underline decoration-primary">
                            Classes capped at 10
                        </span>{" "}
                        ensure active participation in practical-style questions
                        and inquiry tasks. Students solve{" "}
                        <span className="font-semibold">
                            sample VCAA questions
                        </span>
                        , with debriefs on common pitfalls—strengthening their
                        ability to write analytical, well-structured answers
                        under exam conditions.
                    </p>
                </div>
            ),
        },
        {
            id: 4,
            name: "⚛️ Physics Units 1/2 & 3/4",
            category: "stem",
            image: physicsImg,
            shortDescription:
                "Explore concepts from motion to modern physics with targeted practice on VCAA exam skills.",
            detailedDescription: (
                <div>
                    <p className="mb-3">
                        <span className="font-semibold">Units 1/2</span>{" "}
                        introduce fundamental physical phenomena—including
                        motion, energy, electricity, and heat—while{" "}
                        <span className="font-semibold">Units 3/4</span> delve
                        into fields, relativity, and wave-particle duality. The{" "}
                        <span className="font-semibold underline decoration-primary">
                            VCAA Physics Study Design
                        </span>{" "}
                        emphasises student investigation, mathematical
                        modelling, and connection of theory to practical
                        contexts.
                    </p>
                    <p className="mb-3">
                        We break down complex topics into digestible lessons,
                        using visual models and inquiry tasks. Students complete
                        structured practice into{" "}
                        <span className="font-semibold underline decoration-primary">
                            VCAA command terms
                        </span>{" "}
                        such as "predict", "justify", and "evaluate", aligned
                        with exam rubrics.
                    </p>
                    <p>
                        In{" "}
                        <span className="font-semibold underline decoration-primary">
                            small groups
                        </span>
                        , tutors closely monitor working methods, guide on graph
                        interpretation, and teach efficient problem set-ups. By
                        combining{" "}
                        <span className="font-semibold">
                            SAC-style simulation
                        </span>
                        , past exam questions, and detailed feedback, students
                        build accuracy and confidence.
                    </p>
                </div>
            ),
        },
        {
            id: 5,
            name: "🧬 Biology Units 1/2 & 3/4",
            category: "stem",
            image: biologyImg,
            shortDescription:
                "Understand living systems deeply—from cells and ecology to molecular biology and evolution.",
            detailedDescription: (
                <div>
                    <p className="mb-3">
                        <span className="font-semibold">Units 1/2</span> cover
                        foundational biological systems—cell structure,
                        genetics, physiology, and ecology.{" "}
                        <span className="font-semibold">Units 3/4</span> advance
                        to molecular biology, DNA technology, immune systems,
                        and evolution. The{" "}
                        <span className="font-semibold underline decoration-primary">
                            VCAA Biology Study Design
                        </span>
                        emphasises scientific inquiry, data analysis, and
                        annotated diagram skills.
                    </p>
                    <p className="mb-3">
                        Our lessons guide students in constructing
                        evidence-based responses, interpreting experimental
                        data, and using accurate scientific terminology. We
                        align teaching to{" "}
                        <span className="font-semibold">SAC criteria</span> and{" "}
                        <span className="font-semibold underline decoration-primary">
                            command term requirements
                        </span>{" "}
                        like "compare", "explain", and "design investigation."
                    </p>
                    <p>
                        With{" "}
                        <span className="font-semibold underline decoration-primary">
                            capped classes
                        </span>
                        , each student receives personalised annotation coaching
                        and feedback on practice responses. Supplemented with
                        revision sheets, glossary tools, and{" "}
                        <span className="font-semibold">exam strategies</span>,
                        students build both confidence and mastery.
                    </p>
                </div>
            ),
        },
        {
            id: 6,
            name: "➗ Specialist Maths Units 3 & 4",
            category: "stem",
            image: mathSpecialistImg,
            shortDescription:
                "Deepen advanced maths understanding with proof, vectors, complex numbers, and rigorous problem-solving.",
            detailedDescription: (
                <div>
                    <p className="mb-3">
                        <span className="font-semibold">
                            Specialist Mathematics Units 3 & 4
                        </span>
                        , as outlined in the{" "}
                        <span className="font-semibold underline decoration-primary">
                            VCAA Study Design
                        </span>
                        , include topics such as proof techniques, vectors in
                        space, complex numbers, discrete mathematics, and
                        differential equations. The course requires
                        logic-oriented thinking and precision beyond standard
                        VCE maths.
                    </p>
                    <p className="mb-3">
                        Our program supports students in developing{" "}
                        <span className="font-semibold">
                            proof-writing skills
                        </span>
                        , selecting appropriate strategies for unfamiliar
                        scenarios, and building strong conceptual reasoning. In{" "}
                        <span className="font-semibold underline decoration-primary">
                            capped classes
                        </span>
                        , tutors can provide one-on-one questioning and ensure
                        students articulate each step clearly.
                    </p>
                    <p>
                        Students work through{" "}
                        <span className="font-semibold">
                            sample external exam questions
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold">
                            SAC-style problems
                        </span>{" "}
                        rigorously, learn pseudocode for discrete maths, and
                        hone mechanical and abstract thinking. Feedback
                        emphasises structure, correctness, and efficiency.
                    </p>
                </div>
            ),
        },
        {
            id: 7,
            name: "📖 Year 5–10 English",
            category: "humanities",
            image: english510Img,
            shortDescription:
                "Strengthen literacy, comprehension, and writing skills with confidence and curriculum alignment.",
            detailedDescription: (
                <div>
                    <p className="mb-3">
                        Aligned with the{" "}
                        <span className="font-semibold underline decoration-primary">
                            Victorian Curriculum
                        </span>
                        , our{" "}
                        <span className="font-semibold">
                            Year 5–10 English program
                        </span>{" "}
                        develops foundational skills in reading comprehension,
                        vocabulary, narrative writing, persuasive writing, and
                        literature response. We teach students text analysis
                        methods, paragraph structuring, and clarity in
                        expression.
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold underline decoration-primary">
                            Small class sizes
                        </span>{" "}
                        ensure each child receives personalised correction and
                        encouragement. Assignments include creative writing
                        tasks, comprehension exercises, and structured essay
                        formats—each with constructive feedback.
                    </p>
                    <p>
                        Our goal is to prepare students for school assessments,{" "}
                        <span className="font-semibold">
                            NAPLAN-style tasks
                        </span>
                        , and{" "}
                        <span className="font-semibold underline decoration-primary">
                            high school English success
                        </span>{" "}
                        by fostering critical thinking, organising ideas
                        clearly, and expressing thoughts with confidence.
                    </p>
                </div>
            ),
        },
        {
            id: 8,
            name: "➕ Year 5–10 Maths",
            category: "stem",
            image: maths510Img,
            shortDescription:
                "Build numeracy and reasoning skills through engaging, curriculum-linked maths lessons.",
            detailedDescription: (
                <div>
                    <p className="mb-3">
                        Our{" "}
                        <span className="font-semibold underline decoration-primary">
                            curriculum-aligned Year 5–10 Maths classes
                        </span>{" "}
                        cover number operations, algebra, geometry, measurement,
                        probability, and statistics. Lessons emphasise clear
                        working methods, problem-solving strategies, and
                        reasoning using words and diagrams.
                    </p>
                    <p className="mb-3">
                        In{" "}
                        <span className="font-semibold underline decoration-primary">
                            groups of up to 10
                        </span>
                        , tutors identify learning gaps early and customise
                        tasks to support each student's level of understanding.
                        Activities range from routine exercises to higher-order
                        thinking questions.
                    </p>
                    <p>
                        Regular assessments, feedback on method, and practice
                        with applied problem contexts ensure{" "}
                        <span className="font-semibold underline decoration-primary">
                            steady progress and improved confidence
                        </span>{" "}
                        across all year levels.
                    </p>
                </div>
            ),
        },
    ];

    const toggleExpanded = (subjectId) => {
        const newExpanded = new Set(expandedSubjects);
        if (newExpanded.has(subjectId)) {
            newExpanded.delete(subjectId);
        } else {
            newExpanded.add(subjectId);
        }
        setExpandedSubjects(newExpanded);
    };

    return (
        <main className="min-h-screen bg-grey-50 py-20 mt-[80px]" role="main">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="text-center mb-16">
                    <ScrollAnimateText
                        as="h1"
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Our Subjects
                    </ScrollAnimateText>
                    <ScrollAnimateText
                        as="p"
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Discover our comprehensive range of subjects designed to
                        help you achieve your ATAR goals
                    </ScrollAnimateText>
                </header>

                {/* Subjects Grid */}
                <section aria-label="All subjects available for tutoring">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subjects.map((subject, index) => (
                            <motion.article
                                key={subject.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <img
                                    src={subject.image}
                                    alt={`${subject.name} subject illustration`}
                                    className="h-48 w-full object-cover rounded-t-2xl flex-shrink-0"
                                />
                                <div className="p-6 flex flex-col flex-grow">
                                    <header className="mb-3">
                                        <h2 className="text-lg font-bold text-gray-900 leading-tight">
                                            {subject.name}
                                        </h2>
                                    </header>

                                    <div className="text-gray-600 mb-4 flex-grow">
                                        <p className="mb-3">
                                            {subject.shortDescription}
                                        </p>

                                        <AnimatePresence>
                                            {expandedSubjects.has(
                                                subject.id
                                            ) && (
                                                <motion.div
                                                    initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: "easeInOut",
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="text-sm leading-relaxed">
                                                        {
                                                            subject.detailedDescription
                                                        }
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="space-y-3 mt-auto">
                                        <button
                                            onClick={() =>
                                                toggleExpanded(subject.id)
                                            }
                                            className="w-full text-primary font-medium text-sm hover:text-[#3482FF] transition-colors duration-200 text-center py-2"
                                            aria-expanded={expandedSubjects.has(
                                                subject.id
                                            )}
                                            aria-label={
                                                expandedSubjects.has(subject.id)
                                                    ? `Hide details for ${subject.name}`
                                                    : `Show details for ${subject.name}`
                                            }
                                        >
                                            {expandedSubjects.has(subject.id)
                                                ? "See Less"
                                                : "See More"}
                                        </button>

                                        <a
                                            href="https://pdu2aawxpdr.typeform.com/to/o6rQPFyz"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-[#3482FF] hover:scale-105 transition-all ease-in-out duration-300 text-center block"
                                            aria-label={`Learn more about ${subject.name} tutoring and enroll`}
                                        >
                                            Enrol Now
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section
                    className="text-center mt-16"
                    aria-labelledby="cta-heading"
                >
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <ScrollAnimateText
                            as="h2"
                            id="cta-heading"
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Ready to Start Your Journey?
                        </ScrollAnimateText>
                        <ScrollAnimateText
                            as="p"
                            className="text-xl text-gray-600 mb-8"
                            delay={0.2}
                        >
                            Contact us today to discuss your academic goals and
                            create a personalized study plan
                        </ScrollAnimateText>
                        <ScrollAnimateText delay={0.4}>
                            <a
                                href="https://pdu2aawxpdr.typeform.com/to/o6rQPFyz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#3482FF] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
                                aria-label="Get started with Taiyo Tuition - opens enrollment form in new window"
                            >
                                Get Started Today
                            </a>
                        </ScrollAnimateText>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SubjectsPage;
