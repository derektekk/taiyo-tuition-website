/**
 * Subject content for /subjects and /subjects/:slug.
 *
 * Deliberately free of JSX and asset imports so that scripts/create-spa-routes.mjs
 * can import it under plain Node to generate a static entrypoint per subject.
 * Images are bound to slugs separately in ./subjectImages.js.
 *
 * Rich copy is stored as "runs": a paragraph is an array of plain strings and
 * emphasis objects, rendered by SubjectCopy.
 *
 * VCE subjects are one page per family covering Units 1–4. Year 5-10 English
 * and Maths are split by band (5-6, 7-8, 9-10). Entries that share a `family`
 * are siblings and cross-link to each other.
 *
 * Program fields for the class-page template (offer, resources, fee, faqIds,
 * reviewIds, weekBeats, curriculum) are composed per band in
 * ./subjectProgram.js and merged onto each entry below. Curriculum rows live in
 * ./subjectCurriculum.js. `body` is kept as the source for future rows; the
 * class page no longer renders it.
 */

import { buildProgram } from "./subjectProgram.js";

const strong = (text) => ({ text, emphasis: "strong" });
const key = (text) => ({ text, emphasis: "key" });
const underline = (text) => ({ text, emphasis: "underline" });

const baseSubjects = [
    {
        slug: "english",
        family: "english",
        group: "vce",
        shortName: "English",
        units: "1–4",
        name: "English Units 1–4",
        category: "humanities",
        shortDescription: [
            "Reading, writing, and argument from Units 1 & 2 through the Units 3 & 4 exam.",
        ],
        body: [
            [
                "Based on the ",
                key("VCAA English Study Design"),
                ", ",
                strong("Units 1 & 2"),
                " cover ",
                strong("Reading and Exploring Texts"),
                ", ",
                strong("Crafting Texts"),
                ", and ",
                strong("Exploring Argument"),
                ". ",
                strong("Units 3 & 4"),
                " move to ",
                strong("Reading and Responding"),
                " and ",
                strong("Creating Texts"),
                ", including the VCAA Text List and comparative writing.",
            ],
            [
                "Lessons work on text structure, language, and argument. Students practise ",
                key("command terms"),
                ' such as "analyse", "explain", and "compare" against VCAA criteria.',
            ],
            [
                "In our ",
                underline("capped classes (max 10 students)"),
                ", each student completes ",
                strong("SAC-style responses"),
                " and gets marking they can act on before the next paper.",
            ],
        ],
    },
    {
        slug: "methods",
        family: "maths-methods",
        group: "vce",
        shortName: "Maths Methods",
        units: "1–4",
        name: "Maths Methods Units 1–4",
        category: "stem",
        shortDescription: [
            "Functions, calculus, probability, and statistics from Units 1 & 2 through the exam.",
        ],
        body: [
            [
                "Aligned with the ",
                key("VCAA Mathematics Study Design"),
                ", Methods ",
                strong("Units 1 & 2"),
                " cover functions, sequences, algebra, and introductory calculus. ",
                strong("Units 3 & 4"),
                " extend into advanced calculus, probability distributions, and statistics.",
            ],
            [
                "Classes drill ",
                key("mathematical fluency and exam technique"),
                ". Students sit VCAA-style questions, train on CAS, and work multi-step problems in time.",
            ],
            [
                key("Small classes"),
                " let tutors watch the working method. ",
                strong("SAC simulation"),
                " and marked papers sit in the week, not only at the end of term.",
            ],
        ],
    },
    {
        slug: "chemistry",
        family: "chemistry",
        group: "vce",
        shortName: "Chemistry",
        units: "1–4",
        name: "Chemistry Units 1–4",
        category: "stem",
        shortDescription: [
            "Periodicity and bonding through equilibrium, redox, and organic chemistry, with data practice every week.",
        ],
        body: [
            [
                "Following the ",
                key("VCAA Chemistry Study Design"),
                ", ",
                strong("Units 1 & 2"),
                " cover periodicity, bonding, and reaction types. ",
                strong("Units 3 & 4"),
                " take equilibrium, thermochemistry, acids and bases, redox, and organic chemistry.",
            ],
            [
                "Lessons train ",
                key("scientific literacy"),
                ": precise formulae, data, and explanations in the same form as ",
                strong("SACs and the exam"),
                ".",
            ],
            [
                key("Classes capped at 10"),
                ". Students sit ",
                strong("sample VCAA questions"),
                " and go through the marks they dropped before the next paper.",
            ],
        ],
    },
    {
        slug: "physics",
        family: "physics",
        group: "vce",
        shortName: "Physics",
        units: "1–4",
        name: "Physics Units 1–4",
        category: "stem",
        shortDescription: [
            "Motion and energy through fields, relativity, and waves, with investigation and modelling practice.",
        ],
        body: [
            [
                strong("Units 1 & 2"),
                " cover motion, energy, electricity, and heat. ",
                strong("Units 3 & 4"),
                " take fields, relativity, and wave-particle duality. The ",
                key("VCAA Physics Study Design"),
                " asks for investigation and mathematical modelling in both pairs.",
            ],
            [
                "Visual models and inquiry tasks sit beside practice on ",
                key("VCAA command terms"),
                ' such as "predict", "justify", and "evaluate".',
            ],
            [
                "In ",
                key("small groups"),
                ", tutors watch the working method and the graph. ",
                strong("SAC-style simulation"),
                " and marked papers run through the year.",
            ],
        ],
    },
    {
        slug: "biology",
        family: "biology",
        group: "vce",
        shortName: "Biology",
        units: "1–4",
        name: "Biology Units 1–4",
        category: "stem",
        shortDescription: [
            "Cells and genetics through molecular biology, immunity, and evolution, with diagram and data practice.",
        ],
        body: [
            [
                strong("Units 1 & 2"),
                " cover cells, genetics, physiology, and ecology. ",
                strong("Units 3 & 4"),
                " take molecular biology, DNA technology, immunity, and evolution. The ",
                key("VCAA Biology Study Design"),
                " asks for inquiry, data, and annotated diagrams.",
            ],
            [
                "Students write from evidence, read experimental data, and use the terms the mark scheme wants. Teaching follows ",
                strong("SAC criteria"),
                " and ",
                key("command terms"),
                ' such as "compare", "explain", and "design investigation."',
            ],
            [
                "With ",
                key("capped classes"),
                ", marking lands on the sentence that lost marks. Revision sheets and glossary tools stay on the portal.",
            ],
        ],
    },
    {
        slug: "specialist",
        family: "specialist-maths",
        group: "vce",
        shortName: "Specialist Maths",
        units: "1–4",
        name: "Specialist Maths Units 1–4",
        category: "stem",
        shortDescription: [
            "Proof, vectors, and complex numbers from Units 1 & 2 through differential equations in Units 3 & 4.",
        ],
        body: [
            [
                "As outlined in the ",
                key("VCAA Study Design"),
                ", ",
                strong("Units 1 & 2"),
                " cover logic and proof, sequences, combinatorics, graph theory, vectors, trigonometry, and introductory complex numbers. ",
                strong("Units 3 & 4"),
                " take proof techniques, vectors in space, complex numbers, discrete maths, and differential equations.",
            ],
            [
                "Classes build ",
                strong("proof-writing"),
                " and a method for unfamiliar questions. In ",
                key("capped classes"),
                ", the tutor can stop a step before it becomes a habit.",
            ],
            [
                "Students sit ",
                strong("SAC-style problems"),
                " and ",
                strong("sample VCAA questions"),
                ". Feedback is on structure and correctness, not only the final line.",
            ],
        ],
    },
    {
        slug: "general",
        family: "general-maths",
        group: "vce",
        shortName: "General Maths",
        units: "1–4",
        name: "General Maths Units 1–4",
        category: "stem",
        shortDescription: [
            "Data, finance, and geometry through statistics, networks, and matrices, with CAS and exam technique.",
        ],
        body: [
            [
                "Following the ",
                key("VCAA Mathematics Study Design"),
                ", ",
                strong("Units 1 & 2"),
                " cover data analysis, recursion, financial modelling, and geometry. ",
                strong("Units 3 & 4"),
                " take statistical inference, networks, decision maths, and matrices.",
            ],
            [
                "Classes train ",
                key("mathematical reasoning"),
                " on real displays and CAS. Lessons include ",
                strong("VCAA-style questions"),
                ".",
            ],
            [
                "In ",
                key("small classes"),
                ", tutors keep the working method tidy. ",
                strong("SAC preparation"),
                " sits in the week, not only before the date.",
            ],
        ],
    },
    {
        slug: "year-5-6-english",
        family: "year-english",
        group: "years",
        shortName: "English",
        units: null,
        yearBand: "5–6",
        name: "Years 5–6 English",
        category: "humanities",
        shortDescription: [
            "Build reading, vocabulary, and writing habits that hold up in class and in NAPLAN-style tasks.",
        ],
        body: [
            [
                "Aligned with the ",
                key("Victorian Curriculum"),
                ", ",
                strong("Years 5–6 English"),
                " covers reading comprehension, vocabulary, narrative writing, and persuasive writing. Students learn how a paragraph is built and how to say what they mean on the page.",
            ],
            [
                key("Classes capped at 10"),
                " mean each student gets marked work back with notes they can use. Tasks include creative writing, comprehension, and short structured responses.",
            ],
            [
                "The aim is school assessments, ",
                strong("NAPLAN-style tasks"),
                ", and a cleaner start to high school English.",
            ],
        ],
    },
    {
        slug: "year-5-6-maths",
        family: "year-maths",
        group: "years",
        shortName: "Maths",
        units: null,
        yearBand: "5–6",
        name: "Years 5–6 Maths",
        category: "stem",
        shortDescription: [
            "Secure number sense, measurement, and working-out habits before high school algebra arrives.",
        ],
        body: [
            [
                "Our ",
                key("Years 5–6 Maths classes"),
                " follow the Victorian Curriculum through number operations, measurement, introductory geometry, and early reasoning. Lessons insist on clear working on the page.",
            ],
            [
                "In ",
                key("groups of up to 10"),
                ", tutors catch gaps early and set work at the right pitch. Tasks move from routine exercises to questions that ask students to explain the method.",
            ],
            [
                "Regular check-ins and feedback on method keep progress visible week to week.",
            ],
        ],
    },
    {
        slug: "year-7-8-english",
        family: "year-english",
        group: "years",
        shortName: "English",
        units: null,
        yearBand: "7–8",
        name: "Years 7–8 English",
        category: "humanities",
        shortDescription: [
            "Move from primary writing into text analysis, structure, and clearer argument.",
        ],
        body: [
            [
                "Aligned with the ",
                key("Victorian Curriculum"),
                ", ",
                strong("Years 7–8 English"),
                " takes students from primary literacy into high school reading and writing. Lessons cover text analysis, paragraph structure, and how to hold a line of argument.",
            ],
            [
                key("Classes capped at 10"),
                " so marking is personal. Students write narratives, persuasive pieces, and literature responses, then revise from the comments.",
            ],
            [
                "The work is for school assessments now, and for the writing load that Years 9 and 10 will ask for.",
            ],
        ],
    },
    {
        slug: "year-7-8-maths",
        family: "year-maths",
        group: "years",
        shortName: "Maths",
        units: null,
        yearBand: "7–8",
        name: "Years 7–8 Maths",
        category: "stem",
        shortDescription: [
            "Build algebra, geometry, and problem-solving so high school maths has a base to stand on.",
        ],
        body: [
            [
                "Our ",
                key("Years 7–8 Maths classes"),
                " cover number, algebra, geometry, measurement, and introductory probability, aligned with the Victorian Curriculum. The focus is working methods students can reuse when the question is new.",
            ],
            [
                "In ",
                key("groups of up to 10"),
                ", tutors watch how students set out a solution and correct the habit that caused the slip.",
            ],
            [
                "Practice includes routine fluency and higher-order questions, with feedback on method each week.",
            ],
        ],
    },
    {
        slug: "year-9-10-english",
        family: "year-english",
        group: "years",
        shortName: "English",
        units: null,
        yearBand: "9–10",
        name: "Years 9–10 English",
        category: "humanities",
        shortDescription: [
            "Sharpen analysis, comparative writing, and exam-ready structure before VCE English.",
        ],
        body: [
            [
                "Aligned with the ",
                key("Victorian Curriculum"),
                ", ",
                strong("Years 9–10 English"),
                " pushes into analytical writing, text comparison, and clearer argument. Students practise the structures VCE English will assume they already have.",
            ],
            [
                key("Classes capped at 10"),
                " keep feedback close. Work includes essays, language analysis, and literature responses with comments they can act on.",
            ],
            [
                "The goal is school assessment now, and a less steep step into ",
                key("VCE English"),
                ".",
            ],
        ],
    },
    {
        slug: "year-9-10-maths",
        family: "year-maths",
        group: "years",
        shortName: "Maths",
        units: null,
        yearBand: "9–10",
        name: "Years 9–10 Maths",
        category: "stem",
        shortDescription: [
            "Tighten algebra, graphs, and reasoning so Methods or General Maths in VCE is a step they can take.",
        ],
        body: [
            [
                "Our ",
                key("Years 9–10 Maths classes"),
                " cover algebra, linear and quadratic graphs, geometry, measurement, probability, and statistics. Lessons stay aligned with the Victorian Curriculum and with the habits VCE maths will need.",
            ],
            [
                "In ",
                key("groups of up to 10"),
                ", tutors pick up shaky working early and set problems that ask for reasoning they can write down.",
            ],
            [
                "Regular practice and method feedback prepare students for school exams and for ",
                key("VCE Maths Methods or General Maths"),
                ".",
            ],
        ],
    },
    {
        slug: "selective",
        family: "selective",
        group: "selective",
        shortName: "Selective",
        units: null,
        name: "Selective program",
        category: "preparation",
        shortDescription: [
            "Targeted preparation for competitive entry across ",
            key("two pathways"),
            ": the ",
            key("ACER Cooperative Scholarship Test"),
            " for entry into Melbourne's leading private schools, and the ",
            key("Victorian Selective Entry High School exam"),
            " for entry into the four government selective schools and SEAL programs.",
        ],
        body: [
            [
                "Our ",
                key("ACER Scholarship Program"),
                " prepares ",
                key("Year 4 to Year 6"),
                " students for scholarships at schools including ",
                key(
                    "Scotch College, Wesley College, Haileybury, Caulfield Grammar, Camberwell Grammar, MLC, Trinity Grammar"
                ),
                " and many more. Our ",
                key("SEHS Program"),
                " prepares ",
                key("Year 7 to Year 8"),
                " students for entry into ",
                key(
                    "Melbourne High School, Mac.Robertson Girls' High School, Nossal High School, Suzanne Cory High School"
                ),
                ", and SEAL programs.",
            ],
            [
                "Lessons cover every area assessed in each exam: ",
                key(
                    "creative and persuasive writing, reading comprehension, mathematics, and verbal and quantitative reasoning"
                ),
                ". Students learn the specific question patterns of each test, along with ",
                key("timing and exam strategy"),
                " for working accurately under pressure.",
            ],
            [
                "Our classes cap at ",
                key("6-8 students per tutor"),
                ". Students sit regular timed practice exams with individual feedback on written responses and problem-solving methods, building the confidence and pacing needed on exam day. Students in ",
                key("Intensive phase"),
                " sit ",
                key("full-length mocks under exam conditions"),
                " in the weeks leading up to their test.",
            ],
            [
                "Enrolment is open on a ",
                key("rolling basis, with capped places"),
                ". Contact us for a ",
                key("free 15-minute chat and diagnostic assessment"),
                ".",
            ],
        ],
    },
];

export const subjects = baseSubjects.map((subject) => ({
    ...subject,
    ...buildProgram(subject),
}));

/** Flatten a runs array to plain text, for meta descriptions and alt text. */
export const runsToText = (runs) =>
    runs.map((run) => (typeof run === "string" ? run : run.text)).join("");

export const subjectSlugs = subjects.map((subject) => subject.slug);

export const subjectGroupOrder = [
    { id: "vce", label: "VCE" },
    { id: "years", label: "Years 5–10" },
    { id: "selective", label: "Selective" },
];

export const subjectGroups = subjectGroupOrder.map((group) => ({
    ...group,
    subjects: subjects.filter((subject) => subject.group === group.id),
}));

/** One tile per offering. Unit pairs and year bands collapse into the family. */
export const subjectOfferings = (() => {
    const seen = new Set();
    const offerings = [];

    for (const subject of subjects) {
        if (seen.has(subject.family)) continue;
        seen.add(subject.family);

        const familyItems = subjects.filter(
            (item) => item.family === subject.family
        );
        offerings.push(
            familyItems.find((item) => item.units === "3 & 4") ?? familyItems[0]
        );
    }

    return offerings;
})();

export const offeringGroups = subjectGroupOrder.map((group) => ({
    ...group,
    subjects: subjectOfferings.filter((subject) => subject.group === group.id),
}));

/** Label for a collapsed offering tile. */
export const getOfferingLabel = (subject) => {
    if (subject.group === "vce") return "VCE";
    if (subject.yearBand) return "Years 5–10";
    return null;
};

/**
 * Retired slugs. Keep generating a file for each so the SPA can redirect on
 * static hosts; vercel.json carries the matching 301s for first load.
 * Includes the old combined Year 5–10 pages and the long "-units-" VCE slugs.
 */
export const legacySubjectRedirects = {
    "year-5-10-english": "year-5-6-english",
    "year-5-10-maths": "year-5-6-maths",
    "english-1-2": "english",
    "english-3-4": "english",
    "english-units-1-2": "english",
    "english-units-3-4": "english",
    "methods-1-2": "methods",
    "methods-3-4": "methods",
    "maths-methods-units-1-2": "methods",
    "maths-methods-units-3-4": "methods",
    "specialist-1-2": "specialist",
    "specialist-3-4": "specialist",
    "specialist-maths-units-1-2": "specialist",
    "specialist-maths-units-3-4": "specialist",
    "general-1-2": "general",
    "general-3-4": "general",
    "general-maths-units-1-2": "general",
    "general-maths-units-3-4": "general",
    "chemistry-1-2": "chemistry",
    "chemistry-3-4": "chemistry",
    "chemistry-units-1-2": "chemistry",
    "chemistry-units-3-4": "chemistry",
    "physics-1-2": "physics",
    "physics-3-4": "physics",
    "physics-units-1-2": "physics",
    "physics-units-3-4": "physics",
    "biology-1-2": "biology",
    "biology-3-4": "biology",
    "biology-units-1-2": "biology",
    "biology-units-3-4": "biology",
    "selective-schools-program": "selective",
};

export const getSubjectBySlug = (slug) =>
    subjects.find((subject) => subject.slug === slug);

export const getSubjectCardLabel = (subject) => {
    if (subject.units) return `Units ${subject.units}`;
    if (subject.yearBand) return `Years ${subject.yearBand}`;
    return null;
};

/** The other unit pair of the same VCE subject, when one is taught. */
export const getSiblingSubject = (subject) => {
    if (!subject.units) return undefined;
    return subjects.find(
        (item) =>
            item.family === subject.family &&
            item.slug !== subject.slug &&
            item.units
    );
};

/** Other VCE classes that share a unit pair. Combined 1–4 pages skip this. */
export const getSameUnitSubjects = (subject) => {
    if (!subject.units || subject.units === "1–4") return [];
    return subjects.filter(
        (item) => item.units === subject.units && item.slug !== subject.slug
    );
};

/** Other year bands that share the same English or Maths family. */
export const getRelatedSubjects = (subject) =>
    subjects.filter(
        (item) => item.family === subject.family && item.slug !== subject.slug
    );
