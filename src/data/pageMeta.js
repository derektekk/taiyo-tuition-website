/**
 * Title, description and canonical path for every route.
 *
 * Read by PageDoc at runtime and by scripts/create-spa-routes.mjs at build
 * time, which writes the same tags into each route's static HTML for crawlers
 * that don't run JavaScript. Keep it free of JSX and asset imports so it loads
 * under plain Node.
 */

import { runsToText } from "./subjects.js";

export const SITE_URL = "https://taiyotuition.com";

const META_DESCRIPTION_LIMIT = 155;

export const pageMeta = {
    "/": {
        title: "Taiyo Tuition - VCE tutoring in Melbourne",
        description:
            "Taiyo Tuition in Mount Waverley. Group classes capped at 10 students, Year 5 through VCE and Selective. Book a free trial.",
    },
    "/subjects": {
        title: "Our Subjects | VCE and Year 5-10 Tutoring Melbourne | Taiyo Tuition",
        description:
            "Explore every subject Taiyo Tuition offers, from VCE English, Maths Methods, Specialist Maths, Chemistry, Physics and Biology through to Year 5-10 tutoring and our Selective program.",
    },
    "/tutors": {
        title: "Our Tutors | Taiyo Tuition",
        description:
            "Meet the team of expert educators behind Taiyo Tuition's VCE and Year 5-10 tutoring in Mount Waverley, Melbourne.",
    },
    "/results": {
        title: "Past ATAR Results | Taiyo Tuition",
        description:
            "Named ATAR results from Taiyo Tuition students across Melbourne schools, including 99+ scores from Scotch, Mac.Rob, MHS, Haileybury and more.",
    },
    "/about": {
        title: "Our Story | Taiyo Tuition",
        description:
            "Taiyo means sun. Small classes in Mount Waverley for Years 5 to 12, with tutors ranked in the top 2%.",
    },
    "/reviews": {
        title: "Reviews | Taiyo Tuition",
        description:
            "Written Google reviews from Taiyo Tuition students and parents in Mount Waverley.",
    },
    "/location": {
        title: "Location | Taiyo Tuition",
        description:
            "Taiyo Tuition is at 9-11 Hamilton Place, Mount Waverley. In-person classes here, and the same live format online.",
    },
    "/faq": {
        title: "FAQ | Taiyo Tuition",
        description:
            "Class size, subjects, fees, and how to enrol at Taiyo Tuition in Mount Waverley.",
    },
    "/contact": {
        title: "Contact | Taiyo Tuition",
        description:
            "Contact Taiyo Tuition in Mount Waverley. Call +61 422 283 789 or email admin@taiyotuition.com. Classes run weekday evenings and weekends.",
    },
    "/enroll": {
        title: "Book a free trial | Taiyo Tuition",
        description:
            "Book a free trial class at Taiyo Tuition, Mount Waverley. Classes capped at 10, Year 5 through VCE and Selective. We reply within a few hours.",
    },
    "/enroll/thank-you": {
        title: "We've got it | Taiyo Tuition",
        description:
            "Your free trial request reached Taiyo Tuition. We'll reply within a few hours with a class time.",
        noindex: true,
    },
    "/privacy": {
        title: "Privacy Policy | Taiyo Tuition",
        description:
            "How Taiyo Tuition collects, uses, and protects personal information from students, parents, and website visitors.",
    },
    "/legal": {
        title: "Legal Terms | Taiyo Tuition",
        description:
            "Terms of service for Taiyo Tuition classes in Mount Waverley and online, covering payments, cancellations, materials, and conduct.",
    },
};

export const notFoundMeta = {
    title: "Page not found | Taiyo Tuition",
    description: "This page doesn't exist on the Taiyo Tuition site.",
    noindex: true,
};

const toTitleCase = (text) => text.replace(/\b\w/g, (char) => char.toUpperCase());

const toMetaDescription = (runs) => {
    const summary = runsToText(runs);
    if (summary.length <= META_DESCRIPTION_LIMIT) return summary;
    return `${summary.slice(0, META_DESCRIPTION_LIMIT - 1).trimEnd()}…`;
};

export const subjectMeta = (subject) => ({
    path: `/subjects/${subject.slug}`,
    title: `${toTitleCase(subject.name)} Tutoring Melbourne | Taiyo Tuition`,
    description: toMetaDescription(subject.shortDescription),
});
