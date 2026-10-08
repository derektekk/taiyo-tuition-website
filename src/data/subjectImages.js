/**
 * Slug-to-image bindings, kept apart from subjects.js so that the subject data
 * stays importable by plain Node in scripts/create-spa-routes.mjs.
 *
 * Keyed by slug so each subject page and card can have its own photo.
 * Year-band pages reuse the Year 5–10 English and Maths stills until
 * band-specific photos exist.
 */

import englishUnits34 from "../assets/subjectImages/english-units-3-4.webp";
import mathsMethods34 from "../assets/subjectImages/maths-methods-units-3-4.webp";
import chemistry34 from "../assets/subjectImages/chemistry-units-3-4.webp";
import physics34 from "../assets/subjectImages/physics-units-3-4.webp";
import biology34 from "../assets/subjectImages/biology-units-3-4.webp";
import specialistMaths34 from "../assets/subjectImages/specialist-maths-units-3-4.webp";
import generalMaths34 from "../assets/subjectImages/general-maths-units-3-4.webp";
import yearEnglish from "../assets/subjectImages/year-5-10-english.webp";
import yearMaths from "../assets/subjectImages/year-5-10-maths.webp";
import selectiveSchools from "../assets/subjectImages/selective-schools-program.webp";

const imagesBySlug = {
    english: englishUnits34,
    methods: mathsMethods34,
    chemistry: chemistry34,
    physics: physics34,
    biology: biology34,
    specialist: specialistMaths34,
    general: generalMaths34,
    "year-5-6-english": yearEnglish,
    "year-7-8-english": yearEnglish,
    "year-9-10-english": yearEnglish,
    "year-5-6-maths": yearMaths,
    "year-7-8-maths": yearMaths,
    "year-9-10-maths": yearMaths,
    selective: selectiveSchools,
};

export const getSubjectImage = (subject) => imagesBySlug[subject.slug];
