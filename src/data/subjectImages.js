/**
 * Slug-to-art bindings, kept apart from subjects.js so that the subject data
 * stays importable by plain Node in scripts/create-spa-routes.mjs.
 *
 * unDraw illustrations recoloured to the site blue, the same set the resources
 * tabs use. Year-band pages share the Year 5–10 English and Maths art.
 */

import english from "../assets/subjectArt/english.svg";
import mathsMethods from "../assets/subjectArt/maths-methods.svg";
import chemistry from "../assets/subjectArt/chemistry.svg";
import physics from "../assets/subjectArt/physics.svg";
import biology from "../assets/subjectArt/biology.svg";
import specialistMaths from "../assets/subjectArt/specialist-maths.svg";
import generalMaths from "../assets/subjectArt/general-maths.svg";
import yearEnglish from "../assets/subjectArt/year-5-10-english.svg";
import yearMaths from "../assets/subjectArt/year-5-10-maths.svg";
import selectiveSchools from "../assets/subjectArt/selective-schools.svg";

const imagesBySlug = {
    english,
    methods: mathsMethods,
    chemistry,
    physics,
    biology,
    specialist: specialistMaths,
    general: generalMaths,
    "year-5-6-english": yearEnglish,
    "year-7-8-english": yearEnglish,
    "year-9-10-english": yearEnglish,
    "year-5-6-maths": yearMaths,
    "year-7-8-maths": yearMaths,
    "year-9-10-maths": yearMaths,
    selective: selectiveSchools,
};

export const getSubjectImage = (subject) => imagesBySlug[subject.slug];
