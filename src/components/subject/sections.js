import { getSubjectTutors } from "../../data/tutors";

/**
 * Block ids and dock labels for the class-page scroll, in page order.
 * The dock reads this list; each section component sets the matching id.
 * The `cta` entry renders as a pinned button at the end of the dock.
 */
export const CLOSE_ID = "close";

export const dockSections = [
    { id: "offer", label: "What's included" },
    { id: "results", label: "Results" },
    { id: "tutors", label: "Tutors" },
    { id: "week", label: "Your week" },
    { id: "cover", label: "Course outline" },
    { id: "pack", label: "Resources" },
    { id: "reviews", label: "Reviews" },
    { id: "enrol", label: "Book free trial", cta: true },
    { id: "faq", label: "FAQs" },
];

const withoutTutors = dockSections.filter((section) => section.id !== "tutors");

/**
 * SubjectTutors renders nothing without a matching tutor, so drop its label.
 * Returns a shared array: the dock's observer effect keys on its identity.
 */
export const dockSectionsFor = (subject) =>
    getSubjectTutors(subject).length ? dockSections : withoutTutors;
