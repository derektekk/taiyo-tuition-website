/**
 * Program fields for the class-page template: what you get, resources, fee,
 * week beats, FAQ ids, and review ids.
 *
 * Most of these are decided by the band (VCE / Years 5–10 / Selective), not the
 * slug, so they are composed here rather than copied onto 21 entries. Per-slug
 * data (name, units, curriculum) stays in subjects.js and subjectCurriculum.js.
 *
 * JSX-free and import-free so subjects.js stays loadable under plain Node.
 * `art` on a week beat is a string key; SubjectWeek maps it to an import.
 *
 * Fees come from the FAQ. Year-band English and Selective have no published
 * fee, so `fee` is null there and the block is hidden. Do not invent numbers.
 */

import { getCurriculum } from "./subjectCurriculum.js";
import { location } from "./location.js";
import { portal } from "./portal.js";

const PORTAL_LINK = { href: portal.url, hrefLabel: portal.label };

const tierOf = (subject) => subject.group; // "vce" | "years" | "selective"

const CLASS_CAP = {
    vce: "10",
    years: "10",
    selective: "6 to 8",
};

const OFFER = {
    vce: [
        {
            title: "Class of 10",
            body: "Capped. The tutor can see who is stuck.",
        },
        {
            title: "Weekly two-hour lesson",
            body: "New content every week, taught from our notes.",
        },
        {
            title: "Custom notes and homework",
            body: "Written for this class. Marked before the next one.",
        },
        {
            title: "SACs and practice exams",
            body: "Same format as school SACs and the VCAA paper.",
        },
        {
            title: "Unlimited 1:1 outside class",
            body: "Bring what is still stuck between lessons.",
        },
        {
            title: "Portal access",
            body: "Notes and solutions stay on the portal between lessons.",
        },
    ],
    years: [
        {
            title: "Class of 10",
            body: "Capped. The tutor can see who is stuck.",
        },
        {
            title: "Weekly two-hour lesson",
            body: "New content every week, taught from our notes.",
        },
        {
            title: "Custom notes and homework",
            body: "Written for this year band.",
        },
        {
            title: "Practice tests",
            body: "Timed papers so the format is familiar before school tests.",
        },
        {
            title: "Portal access",
            body: "Class notes and solutions stay on the portal.",
        },
        {
            title: "Mount Waverley or online",
            body: "Same tutor, same materials, same class of ten.",
        },
    ],
    selective: [
        {
            title: "Class of 6 to 8",
            body: "Smaller on purpose.",
        },
        {
            title: "Weekly two-hour lesson",
            body: "New content every week, taught from our notes.",
        },
        {
            title: "Two pathways: ACER and SEHS",
            body: "Written for ACER and SEHS.",
        },
        {
            title: "Timed practice exams",
            body: "Whole papers in exam time, marked with comments.",
        },
        {
            title: "Custom notes and homework",
            body: "Written for this class. Marked before the next one.",
        },
        {
            title: "Portal access",
            body: "Notes and papers stay on the portal between lessons.",
        },
    ],
};

const RESOURCES = {
    vce: [
        {
            title: "Custom notes",
            tab: "Notes",
            art: "notes",
            body: [
                "Each week's notes are written for this class. They follow the current study design, in the order we teach it, with the worked examples from that lesson and a short summary you can revise from later.",
                "You leave with a paper copy. The same file goes on the portal that night, so last week's notes are still there when you need them before a SAC.",
            ],
        },
        {
            title: "Homework booklets",
            tab: "Homework",
            art: "homework",
            body: [
                "The booklet that goes home is this week's topic. Same questions the class just did, then harder ones on the same skill, ready for the next SAC.",
                "Hand it in and it comes back marked with comments before the next class, while the topic is still fresh. You can see what to fix this week.",
            ],
        },
        {
            title: "Practice SACs and exams",
            tab: "SACs",
            art: "exams",
            body: [
                "Practice SACs, past exams, and full papers in the same format as school assessments and the VCAA paper. Same question styles, same timing, same mark scheme, so the real sitting already looks familiar.",
                "You sit them under exam conditions. We mark them with comments, so you know which question type to drill next.",
            ],
        },
        {
            title: "Bound reference",
            tab: "Bound ref",
            art: "bound",
            body: [
                "A bound reference only helps if you have already used it. We build yours through the year from the notes and worked examples in class, so you already know the pages on exam day.",
                "It is the summaries and methods from this class, in an order you already know.",
            ],
        },
        {
            title: "Online Resource Portal",
            tab: "Portal",
            art: "portal",
            body: [
                "Notes, homework, and worked solutions go on the portal the same night as class. You can pull last week's booklet up midweek without waiting for another handout.",
                "Access is around the clock. The files stay up. Stuck questions still go to a 1:1.",
            ],
            ...PORTAL_LINK,
        },
    ],
    years: [
        {
            title: "Custom notes",
            tab: "Notes",
            art: "notes",
            body: [
                "Written for this year band. They follow what we taught that week, in the same order, with the examples the class actually worked and a short summary to revise from.",
                "You take a copy home. The same file sits on the portal, so you can go back to it before the next lesson or a school test.",
            ],
        },
        {
            title: "Homework booklets",
            tab: "Homework",
            art: "homework",
            body: [
                "One booklet per topic, set after class. The same questions you saw in the room, then a few harder ones so the stretch happens here first.",
                "Hand it in and it comes back marked before the next class. Comments say what to fix.",
            ],
        },
        {
            title: "Practice tests",
            tab: "Tests",
            art: "tests",
            body: [
                "Timed papers in the same shape as school tests, so the format is familiar before the one that counts. You sit them under the clock.",
                "We mark them with comments you can use. You see which question type is slow while there is still time to practise it.",
            ],
        },
        {
            title: "Up the same night",
            tab: "Portal",
            art: "portal",
            body: [
                "Class notes and solutions stay on the portal after each lesson. If the paper copy is in the bag at school, the file is still there.",
                "You can open them any time.",
            ],
            ...PORTAL_LINK,
        },
    ],
    selective: [
        {
            title: "Custom notes",
            tab: "Notes",
            art: "notes",
            body: [
                "Written for ACER and SEHS. The notes follow that week's section: writing, reading, maths, or reasoning.",
                "You leave with a copy. The same file goes on the portal that night, ready to revise from before the next timed paper.",
            ],
        },
        {
            title: "Timed practice sheets",
            tab: "Timed",
            art: "timed",
            body: [
                "Section drills under the clock, week by week. Short papers that use the timing those exams actually use.",
                "We mark them with comments so you can see which section is slow before you sit a full mock.",
            ],
        },
        {
            title: "Full-length mocks",
            tab: "Mocks",
            art: "mocks",
            body: [
                "Whole papers in exam time, marked with comments. Same length and pressure as the real ACER or SEHS sitting, so a full paper happens in class first.",
                "You get the paper back with what to drill next.",
            ],
        },
        {
            title: "Up the same night",
            tab: "Portal",
            art: "portal",
            body: [
                "Notes and papers stay on the portal between lessons. Timed sheets and mocks from earlier weeks stay up, so you can sit them again closer to the exam.",
                "Access is around the clock. The files stay up.",
            ],
            ...PORTAL_LINK,
        },
    ],
};

// Selective skips class-size: that FAQ says 10, Selective runs 6 to 8.
const FAQ_IDS = {
    vce: ["class-size", "online", "materials", "enrol"],
    years: ["class-size", "online", "materials", "enrol"],
    selective: ["online", "materials", "enrol"],
};

/** Real quotes only. Families without a named review get generic Google quotes. */
const REVIEW_IDS = {
    "maths-methods": [3, 4, 11],
    english: [2, 8, 12],
    "general-maths": [6, 1, 13],
};
const GENERIC_REVIEW_IDS = [1, 10, 13];

/** Middle week beat: what the practice looks like for this family. */
const PRACTICE_LINE = {
    english: "That week's text goes home as a written piece or analysis.",
    "maths-methods":
        "That week's functions or calculus goes home as a booklet.",
    "specialist-maths":
        "That week's proof, vectors, or complex numbers goes home as a booklet.",
    "general-maths":
        "That week's data, finance, or networks goes home as a booklet.",
    chemistry: "That week's reactions and data go home as a booklet.",
    physics: "That week's motion, fields, or waves go home as a booklet.",
    biology: "That week's systems and diagrams go home as a booklet.",
    "year-english":
        "That week's lesson goes home as a writing or comprehension sheet.",
    "year-maths": "That week's topic goes home as a homework sheet.",
    selective:
        "That week's writing, reading, maths, or reasoning goes home as timed practice.",
};

/**
 * Fee sentence for the enrol steps. Published numbers only; families with no
 * listed fee get the weekly-billing fact and a prompt to ask.
 */
const feeLineFor = (fee) => {
    if (!fee) {
        return "Fees are weekly, per subject. Ask us for this class's fee when you book.";
    }
    if (fee.bands) {
        const parts = fee.bands.map(
            (band) => `$${band.amount} a week for ${band.label}`,
        );
        return `${parts.join(", ")}. Billed weekly, per subject.`;
    }
    return `$${fee.amount} a ${fee.period}, billed weekly, per subject.`;
};

/**
 * How to enrol. Three steps, EdAtlas-style numbering, Taiyo facts: the trial
 * is free, the reply comes within hours, the fee is weekly with no lock-in.
 * Every claim here is already on the FAQ or the enrol page.
 */
const enrolStepsFor = (subject, fee) => {
    const cap = CLASS_CAP[tierOf(subject)];

    return [
        {
            title: "Book a free trial",
            body: [
                `Pick ${subject.shortName ?? subject.name} and the year level on the form, or call ${location.phone}.`,
                "We reply within a few hours with a class time.",
            ],
        },
        {
            title: "Sit the trial class",
            body: [
                `Your child joins the class of ${cap} for a full two-hour lesson, in Mount Waverley or on the same live call. They leave with that week's notes.`,
                "The trial is free. Come see the room, then decide.",
            ],
        },
        {
            title: "Keep the seat",
            body: [
                "If it fits, tell us and the seat is theirs. Same tutor, same class, term to term.",
                feeLineFor(fee),
            ],
        },
    ];
};

const feeFor = (subject) => {
    if (subject.units === "1–4" || subject.group === "vce") {
        return {
            amount: 85,
            period: "week",
            bands: [
                { label: "Units 1 & 2", amount: 80 },
                { label: "Units 3 & 4", amount: 85 },
            ],
        };
    }
    if (subject.units === "3 & 4") return { amount: 85, period: "week" };
    if (subject.units === "1 & 2") return { amount: 80, period: "week" };
    if (subject.family === "year-maths") {
        return { amount: subject.yearBand === "5–6" ? 70 : 75, period: "week" };
    }
    return null; // year-band English and Selective: open with the client
};

/**
 * One week, as four things the student does. Verb-led titles, one action per
 * card, and a `when` tag so the stack reads as a timeline. Every line here is
 * already promised in OFFER; do not add a step that is not.
 */
const weekBeatsFor = (subject) => {
    const tier = tierOf(subject);
    const cap = CLASS_CAP[tier];
    const label = subject.shortName ?? subject.name;
    const practice =
        PRACTICE_LINE[subject.family] ?? PRACTICE_LINE["year-maths"];
    const unstuck =
        tier === "vce"
            ? "Stuck midweek? Book a 1:1 with your tutor. There is no cap on how many."
            : "Still stuck? Bring it to the next class and the tutor will go through it with you.";

    return [
        {
            title: "Learn it in class.",
            body: [
                `Two hours in a class of ${cap}. New ${label} every week, taught from notes written for this class.`,
                "The tutor can see who is stuck before you leave.",
            ],
            when: "In class",
            art: "classroom",
        },
        {
            title: "Take it home.",
            body: [practice, "Same questions the class did, then harder ones."],
            when: "After class",
            art: "notes",
        },
        {
            title: "Get it back, marked.",
            body: [
                "Hand it in and it comes back with comments before the next class, while the topic is still fresh.",
                "Notes and worked solutions go on the portal the same night.",
            ],
            when: "Before next class",
            art: "portal",
        },
        {
            title: "Don't stay stuck.",
            body: unstuck,
            contact: true,
            when: tier === "vce" ? "Any day" : "Next class",
            art: "help",
        },
    ];
};

/** Program fields merged onto a subject in subjects.js. */
export const buildProgram = (subject) => {
    const tier = tierOf(subject);
    const fee = feeFor(subject);
    return {
        offer: OFFER[tier],
        resources: RESOURCES[tier],
        fee,
        enrolSteps: enrolStepsFor(subject, fee),
        faqIds: FAQ_IDS[tier],
        reviewIds: REVIEW_IDS[subject.family] ?? GENERIC_REVIEW_IDS,
        weekBeats: weekBeatsFor(subject),
        curriculum: getCurriculum(subject),
    };
};
