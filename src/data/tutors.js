import berniceMao from "../assets/tutors/bernice-mao.jpg";
import ericLiu from "../assets/tutors/eric-liu.jpg";
import justinJian from "../assets/tutors/justin-jian.jpg";
import kashvieGulati from "../assets/tutors/kashvie-gulati.jpg";
import nikhilDavid from "../assets/tutors/nikhil-david.jpg";
import suchiVithanage from "../assets/tutors/suchi-vithanage.jpg";
import timTroeung from "../assets/tutors/tim-troeung.jpg";
import crops from "./tutorCrops.json";

/**
 * Tutor profiles for /tutors.
 *
 * Scores are the ones the client confirmed on 6 Oct 2026. Bios stay on those
 * facts. Photos still missing for Samantha Gong and Emma Le.
 * Framing for each photo is in tutorCrops.json.
 * Do not add universities or VIT numbers until they are confirmed.
 *
 * Class pages do not read this file.
 *
 * @typedef {Object} Tutor
 * @property {string} slug
 * @property {string} name
 * @property {string} role
 * @property {string[]} subjects
 * @property {string[]} qualifications
 * @property {string} bio
 * @property {string} [image] Imported asset. Omitted until a headshot lands.
 * @property {{ x: number, y: number, scale: number }} crop
 */

const DEFAULT_CROP = { x: 50, y: 50, scale: 1 };

const cropFor = (slug) => {
    const saved = crops[slug];
    if (!saved) return DEFAULT_CROP;
    return {
        x: saved.x ?? DEFAULT_CROP.x,
        y: saved.y ?? DEFAULT_CROP.y,
        scale: saved.scale ?? DEFAULT_CROP.scale,
    };
};

/** @type {Omit<Tutor, "crop">[]} */
const roster = [
    {
        slug: "kashvie-gulati",
        name: "Kashvie Gulati",
        role: "General Maths tutor",
        subjects: ["General Maths"],
        qualifications: ["ATAR 98.70", "General Maths 47"],
        bio: "Scored a 98.70 ATAR and a 47 in General Maths.",
        image: kashvieGulati,
    },
    {
        slug: "suchi-vithanage",
        name: "Suchi Vithanage",
        role: "English tutor",
        subjects: ["English"],
        qualifications: ["ATAR 98.15", "English 48"],
        bio: "Scored a 98.15 ATAR and a 48 in English.",
        image: suchiVithanage,
    },
    {
        slug: "samantha-gong",
        name: "Samantha Gong",
        role: "English tutor",
        subjects: ["English"],
        qualifications: ["ATAR 94.95", "English 43"],
        bio: "Scored a 94.95 ATAR and a 43 in English.",
    },
    {
        slug: "emma-le",
        name: "Emma Le",
        role: "English tutor",
        subjects: ["English"],
        qualifications: ["ATAR 98.95", "English 46"],
        bio: "Scored a 98.95 ATAR and a 46 in English.",
    },
    {
        slug: "justin-jian",
        name: "Justin Jian",
        role: "Maths Methods tutor",
        subjects: ["Maths Methods"],
        qualifications: ["ATAR 96.15", "Maths Methods 48"],
        bio: "Scored a 96.15 ATAR and a 48 in Maths Methods.",
        image: justinJian,
    },
    {
        slug: "nikhil-david",
        name: "Nikhil David",
        role: "Physics tutor",
        subjects: ["Physics"],
        qualifications: ["ATAR 98.25", "Physics 45"],
        bio: "Scored a 98.25 ATAR and a 45 in Physics.",
        image: nikhilDavid,
    },
    {
        slug: "tim-troeung",
        name: "Tim Troeung",
        role: "Biology tutor",
        subjects: ["Biology"],
        qualifications: ["ATAR 98.00", "Biology 47"],
        bio: "Scored a 98.00 ATAR and a 47 in Biology.",
        image: timTroeung,
    },
    {
        slug: "bernice-mao",
        name: "Bernice Mao",
        role: "General Maths tutor",
        subjects: ["General Maths"],
        qualifications: ["ATAR 99.75", "General Maths 50"],
        bio: "Scored a 99.75 ATAR and a 50 in General Maths.",
        image: berniceMao,
    },
    {
        slug: "eric-liu",
        name: "Eric Liu",
        role: "Specialist Maths tutor",
        subjects: ["Specialist Maths"],
        qualifications: ["ATAR 99.20", "Specialist Maths 49"],
        bio: "Scored a 99.20 ATAR and a 49 in Specialist Maths.",
        image: ericLiu,
    },
];

/** @type {Tutor[]} */
export const tutors = roster.map((tutor) => ({
    ...tutor,
    crop: cropFor(tutor.slug),
}));
