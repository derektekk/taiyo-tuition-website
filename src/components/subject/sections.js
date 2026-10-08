/**
 * Block ids and dock labels for the class-page scroll, in page order.
 * The dock reads this list; each section component sets the matching id.
 */
export const CLOSE_ID = "close";

export const dockSections = [
    { id: "offer", label: "Offer" },
    { id: "results", label: "Results" },
    { id: "week", label: "Week" },
    { id: "cover", label: "Cover" },
    { id: "pack", label: "Learning resources" },
    { id: "reviews", label: "Reviews" },
    { id: "enrol", label: "Enrol" },
    { id: "faq", label: "FAQ" },
];

export const dockSectionsFor = () => dockSections;
