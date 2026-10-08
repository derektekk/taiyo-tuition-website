export const faqs = [
    {
        id: "class-size",
        question: "What are your class sizes?",
        blocks: [
            {
                type: "p",
                text: "Classes are capped at 10 students. The tutor has time to see who is stuck, and the group is still big enough to work a problem together.",
                marks: ["10 students"],
            },
        ],
    },
    {
        id: "subjects",
        question: "What subjects do you offer tutoring for?",
        blocks: [
            {
                type: "p",
                text: "Year 5 through VCE, plus a Selective program. English and Maths for years 5 to 10. For VCE we run English, Methods, Specialist, General Maths, Chemistry, Physics, and Biology across Units 1 to 4.",
                marks: ["Year 5 through VCE"],
            },
            {
                type: "ul",
                items: [
                    "English Units 1–4",
                    "Maths Methods Units 1–4",
                    "Chemistry Units 1–4",
                    "Physics Units 1–4",
                    "Biology Units 1–4",
                    "Specialist Maths Units 1–4",
                    "General Maths Units 1–4",
                    "Years 5–6 English",
                    "Years 5–6 Maths",
                    "Years 7–8 English",
                    "Years 7–8 Maths",
                    "Years 9–10 English",
                    "Years 9–10 Maths",
                    "Selective program",
                ],
            },
        ],
    },
    {
        id: "online",
        question: "Do you offer online classes?",
        blocks: [
            {
                type: "p",
                text: "Yes. The same live class, the same tutor, the same notes, still capped at ten. Sit in the Mount Waverley rooms or join the call.",
                marks: ["same live class"],
            },
        ],
    },
    {
        id: "method",
        question: "What is your teaching methodology?",
        blocks: [
            {
                type: "p",
                text: "A weekly two-hour class. Concepts get broken into steps, then practised under exam conditions. With ten in the room, the tutor can correct a student without losing the group.",
                marks: ["weekly two-hour class", "ten"],
            },
        ],
    },
    {
        id: "enrol",
        question: "How do I enrol my child?",
        blocks: [
            {
                type: "p",
                text: "Book a free trial and tell us the year level and subject. We place your child in the right room of ten and get back to you within a few hours. The trial is free. Come see the class, then decide.",
                marks: ["Book a free trial"],
                hrefs: { "Book a free trial": "/enroll" },
            },
        ],
    },
    {
        id: "fees",
        question: "What are your fees and payment options?",
        blocks: [
            {
                type: "p",
                text: "You pay weekly per subject. Year-band English and Selective are not listed here. Ask us. For the published classes:",
                marks: ["weekly per subject"],
            },
            {
                type: "ul",
                items: [
                    "VCE Units 3/4: $85 per subject",
                    "VCE Units 1/2: $80 per subject",
                    "Year 7–10 Maths: $75 per subject",
                    "Year 5–6 Maths: $70 per subject",
                ],
            },
            {
                type: "p",
                text: "Each enrolment includes:",
                marks: ["Each enrolment includes:"],
            },
            {
                type: "ul",
                items: [
                    "Weekly 2-hour classes",
                    "Workshops or revision sessions where applicable",
                    "Learning materials: homework booklets, summary sheets, practice tests, SACs, past exams, and bound references for VCE",
                    "Unlimited 1-on-1 help outside class for VCE students",
                    "24/7 access to the online resource portal",
                ],
            },
        ],
    },
    {
        id: "materials",
        question: "Do you provide study materials?",
        blocks: [
            {
                type: "p",
                text: "Yes. Custom notes, homework booklets, summary sheets, practice tests, SACs, past exams, and bound references for VCE. They follow the current study design. VCE students also get the portal around the clock and 1-on-1 help outside class.",
                marks: [
                    "Custom notes, homework booklets, summary sheets, practice tests, SACs, past exams, and bound references for VCE",
                ],
            },
        ],
    },
];

export const homeFaqIds = [
    "class-size",
    "subjects",
    "fees",
    "enrol",
    "online",
    "materials",
    "method",
];

export const classIncludes = [
    "Weekly 2-hour classes",
    "Workshops or revision sessions where applicable",
    "Custom notes, homework booklets, summary sheets, practice tests, SACs, past exams, and bound references for VCE",
    "Unlimited 1-on-1 help outside class for VCE students",
    "24/7 access to the online resource portal",
];
