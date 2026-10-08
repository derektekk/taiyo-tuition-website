import englishImg from "../assets/subjectImages/english-units-3-4.webp";
import methodsImg from "../assets/subjectImages/maths-methods-units-3-4.webp";
import specialistImg from "../assets/subjectImages/specialist-maths-units-3-4.webp";
import generalImg from "../assets/subjectImages/general-maths-units-3-4.webp";
import chemistryImg from "../assets/subjectImages/chemistry-units-3-4.webp";
import physicsImg from "../assets/subjectImages/physics-units-3-4.webp";
import biologyImg from "../assets/subjectImages/biology-units-3-4.webp";
import yearEnglishImg from "../assets/subjectImages/year-5-10-english.webp";
import yearMathsImg from "../assets/subjectImages/year-5-10-maths.webp";
import selectiveImg from "../assets/subjectImages/selective-schools-program.webp";
import locationImg from "../assets/WebsiteMapGFX.webp";
import storyImg from "../assets/teaching-team.webp";
import resultsImg from "../assets/taiyoImages/classPhotos2026/2026-class-photo-1.webp";
import faqImg from "../assets/taiyoImages/taiyoClassroom.webp";
import { portal } from "./portal";

/**
 * Mega-menu rows carry their own `image` so hovering a row swaps the feature
 * panel on the right. `feature` is what shows before any row is hovered.
 */
export const navItems = [
    {
        id: "subjects",
        label: "Subjects",
        href: "/subjects",
        type: "mega",
        columns: [
            {
                heading: "VCE",
                links: [
                    {
                        title: "English",
                        description: "Units 1–4 · analytical writing",
                        href: "/subjects/english",
                        image: englishImg,
                    },
                    {
                        title: "Maths Methods",
                        description: "Units 1–4 · calculus and probability",
                        href: "/subjects/methods",
                        image: methodsImg,
                    },
                    {
                        title: "Specialist Maths",
                        description: "Units 1–4 · proof and vectors",
                        href: "/subjects/specialist",
                        image: specialistImg,
                    },
                    {
                        title: "General Maths",
                        description: "Units 1–4 · data and networks",
                        href: "/subjects/general",
                        image: generalImg,
                    },
                    {
                        title: "Chemistry",
                        description: "Units 1–4 · equilibrium and organic",
                        href: "/subjects/chemistry",
                        image: chemistryImg,
                    },
                    {
                        title: "Physics",
                        description: "Units 1–4 · fields and modelling",
                        href: "/subjects/physics",
                        image: physicsImg,
                    },
                    {
                        title: "Biology",
                        description: "Units 1–4 · molecular and immunity",
                        href: "/subjects/biology",
                        image: biologyImg,
                    },
                ],
            },
            {
                heading: "Years 5–10",
                links: [
                    {
                        title: "Years 5–6 English",
                        description: "Reading, vocabulary, writing",
                        href: "/subjects/year-5-6-english",
                        image: yearEnglishImg,
                    },
                    {
                        title: "Years 5–6 Maths",
                        description: "Number sense and measurement",
                        href: "/subjects/year-5-6-maths",
                        image: yearMathsImg,
                    },
                    {
                        title: "Years 7–8 English",
                        description: "Text analysis and structure",
                        href: "/subjects/year-7-8-english",
                        image: yearEnglishImg,
                    },
                    {
                        title: "Years 7–8 Maths",
                        description: "Algebra, geometry, method",
                        href: "/subjects/year-7-8-maths",
                        image: yearMathsImg,
                    },
                    {
                        title: "Years 9–10 English",
                        description: "Analysis before VCE English",
                        href: "/subjects/year-9-10-english",
                        image: yearEnglishImg,
                    },
                    {
                        title: "Years 9–10 Maths",
                        description: "Graphs, algebra, VCE prep",
                        href: "/subjects/year-9-10-maths",
                        image: yearMathsImg,
                    },
                    {
                        title: "Selective program",
                        description: "ACER scholarships and SEHS entry",
                        href: "/subjects/selective",
                        image: selectiveImg,
                    },
                ],
            },
        ],
        feature: {
            title: "Selective pathway",
            description: "Capped classes for ACER and SEHS.",
            href: "/subjects/selective",
            image: selectiveImg,
            alt: "Selective program materials",
        },
    },
    {
        id: "tutors",
        label: "Tutors",
        href: "/tutors",
        type: "link",
    },
    {
        id: "reviews",
        label: "Reviews",
        href: "/reviews",
        type: "link",
    },
    {
        id: "about",
        label: "About",
        href: "/about",
        type: "mega",
        activeMatch: ["/results", "/location", "/faq"],
        columns: [
            {
                heading: "Who we are",
                links: [
                    {
                        title: "Our story",
                        description: "Why Taiyo exists",
                        href: "/about",
                        image: storyImg,
                    },
                    {
                        title: "Location",
                        description: "Our Mount Waverley campus",
                        href: "/location",
                        image: locationImg,
                    },
                ],
            },
            {
                heading: "Why us",
                links: [
                    {
                        title: "Results",
                        description: "Named ATAR scores",
                        href: "/results",
                        image: resultsImg,
                    },
                    {
                        title: "FAQ",
                        description: "Class size, subjects, fees",
                        href: "/faq",
                        image: faqImg,
                    },
                ],
            },
        ],
        feature: {
            title: "Find us",
            description: "9–11 Hamilton Place, Mount Waverley",
            href: "/location",
            image: locationImg,
            alt: "Map of Taiyo Tuition in Mount Waverley",
        },
    },
    {
        id: "portal",
        label: "Portal",
        href: portal.url,
        type: "link",
        external: true,
    },
];
