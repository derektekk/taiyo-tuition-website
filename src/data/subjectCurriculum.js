/**
 * Curriculum for the class-page study timeline, keyed by slug.
 *
 * JSX-free and import-free so subjects.js stays loadable under plain Node.
 *
 * VCE rows use the current VCAA study design area-of-study titles
 * (Mathematics 2023–2027, English Units 1–2 from 2023 and 3–4 from 2024,
 * Chemistry and Physics Units 1–2 from 2023 and 3–4 from 2024, Biology from 2022).
 * Topic names under an area are the topic titles VCAA publishes for that unit.
 * Year 5–10 rows use Victorian Curriculum F–10 Version 2.0
 * (Mathematics strands, English Language / Literature / Literacy).
 * Selective uses the ACER Selective Entry exam (Year 9 entry).
 *
 * Shape: { bands: [{ label, kicker, body, groups }] }
 *   groups  Accordion rows: { title, topics, placeholder? }
 */

const group = (title, topics, extra = {}) => ({ title, topics, ...extra });

const band = (label, kicker, body, groups) => ({
    label,
    kicker,
    body: Array.isArray(body) ? body : [body],
    groups,
});

const METHODS_AREAS = [
    "Functions, relations and graphs",
    "Algebra, number and structure",
    "Calculus",
    "Data analysis, probability and statistics",
];

export const curriculumBySlug = {
    methods: {
        bands: [
            band(
                "Units 1 & 2",
                "Get algebra and functions solid before Units 3 & 4 build on them.",
                [
                    "Units 1 and 2 are where the habits form. Students who reach Units 3 and 4 with shaky algebra spend the exam year catching up on it.",
                    "In a class of ten the tutor reads your working on the page and fixes the step before it becomes a habit. Homework comes back marked before the next lesson.",
                ],
                [
                    group("Unit 1", METHODS_AREAS),
                    group("Unit 2", METHODS_AREAS),
                ],
            ),
            band(
                "Units 3 & 4",
                "Turn functions, calculus and probability into marks on the VCAA paper.",
                [
                    "Every topic now has an exam shape. Exam 1 is written with no CAS. Exam 2 is CAS-active and still marks the written method, so the calculator alone does not get you there.",
                    "You sit SAC-style tasks and past exam questions in class through the year, marked with comments. By November the paper already looks familiar.",
                ],
                [
                    group("Unit 3", METHODS_AREAS),
                    group("Unit 4", METHODS_AREAS),
                ],
            ),
        ],
    },
    english: {
        bands: [
            band(
                "Units 1 & 2",
                "Learn how a text response and an argument analysis are actually marked.",
                [
                    "Units 1 and 2 cover reading and exploring texts, writing your own pieces, and pulling apart how an argument persuades. This is the year to fix the essay habits that cost marks in Year 12.",
                    "Every piece comes back with the sentence that lost the marks pointed out. The next draft fixes that sentence and keeps the rest.",
                ],
                [
                    group("Unit 1", [
                        "Reading and exploring texts",
                        "Crafting texts",
                    ]),
                    group("Unit 2", [
                        "Reading and exploring texts",
                        "Exploring argument",
                    ]),
                ],
            ),
            band(
                "Units 3 & 4",
                "Practise all three sections of the English exam before the one that counts.",
                [
                    "Units 3 and 4 are the text response, the created piece with its commentary, and analysing argument on an unseen article. The exam is those same three sections in three hours.",
                    "You write each section in class under time through the year. Drafts come back with comments on where the marks went, so you know what to fix before the SAC.",
                ],
                [
                    group("Unit 3", [
                        "Reading and responding to texts",
                        "Creating texts",
                    ]),
                    group("Unit 4", [
                        "Reading and responding to texts",
                        "Analysing argument",
                    ]),
                ],
            ),
        ],
    },
    chemistry: {
        bands: [
            band(
                "Units 1 & 2",
                "Build the bonding, moles and reaction basics that Units 3 & 4 assume.",
                [
                    "Units 1 and 2 cover the structure of materials, measuring them, and how chemicals react in water. Moles and stoichiometry from here turn up in every later topic.",
                    "You practise writing explanations in the wording the VCAA mark scheme uses. Dropped marks get walked through before the next paper.",
                ],
                [
                    group("Unit 1: How can the diversity of materials be explained?", [
                        "How do the chemical structures of materials explain their properties and reactions?",
                        "How are materials quantified and classified?",
                        "How can chemical principles be applied to create a more sustainable future?",
                    ]),
                    group("Unit 2: How do chemical reactions shape the natural world?", [
                        "How do chemicals interact with water?",
                        "How are chemicals measured and analysed?",
                        "How do quantitative scientific investigations develop our understanding of chemical reactions?",
                    ]),
                ],
            ),
            band(
                "Units 3 & 4",
                "Energy, rates and organic chemistry, written the way the examiner marks it.",
                [
                    "Units 3 and 4 cover fuels and cells, rate and yield, and how organic compounds are made and analysed. Most questions want a calculation and a written explanation, and both have to land.",
                    "Data and extended-response practice sits in the ordinary week, in the same format as your school SACs and the VCAA paper. You see the marking before the real one.",
                ],
                [
                    group(
                        "Unit 3: How can design and innovation help to optimise chemical processes?",
                        [
                            "What are the current and future options for supplying energy?",
                            "How can the rate and yield of chemical reactions be optimised?",
                        ],
                    ),
                    group("Unit 4: How are carbon-based compounds designed for purpose?", [
                        "How are organic compounds categorised and synthesised?",
                        "How are organic compounds analysed and used?",
                        "How is scientific inquiry used to investigate the sustainable production of energy and/or materials?",
                    ]),
                ],
            ),
        ],
    },
    physics: {
        bands: [
            band(
                "Units 1 & 2",
                "Get the working and the graphs tidy before fields and motion get harder.",
                [
                    "Units 1 and 2 cover light and heat, nuclear energy, electricity, and motion. The graph and the calculation have to agree, and the tutor checks both.",
                    "Homework comes back marked before the next lesson, so a wrong unit or a missing step gets fixed the week it happens.",
                ],
                [
                    group("Unit 1: How is energy useful to society?", [
                        "How are light and heat explained?",
                        "How is energy from the nucleus utilised?",
                        "How can electricity be used to transfer energy?",
                    ]),
                    group("Unit 2: How does physics help us to understand the world?", [
                        "How is motion understood?",
                        "How does physics inform contemporary issues and applications in society?",
                        "How do physicists investigate questions?",
                    ]),
                ],
            ),
            band(
                "Units 3 & 4",
                "Answer fields, motion and light questions the way the command term asks.",
                [
                    "Units 3 and 4 cover motion in two dimensions, gravitational, electric and magnetic fields, generating electricity, and how ideas about light and matter changed.",
                    "When a question says predict, justify or evaluate, the answer has to do that thing to get the marks. You sit SAC-style papers under time through the year, so the exam is not the first time the clock is on.",
                ],
                [
                    group("Unit 3: How do fields explain motion and electricity?", [
                        "How do physicists explain motion in two dimensions?",
                        "How do things move without contact?",
                        "How are fields used to generate electricity?",
                    ]),
                    group(
                        "Unit 4: How have creative ideas and investigation revolutionised thinking in physics?",
                        [
                            "How has understanding about the physical world changed?",
                            "How is scientific inquiry used to investigate fields, motion or light?",
                        ],
                    ),
                ],
            ),
        ],
    },
    biology: {
        bands: [
            band(
                "Units 1 & 2",
                "Cells, systems and inheritance, and how to write the answer that scores.",
                [
                    "Units 1 and 2 cover how cells and plant and animal systems work, how inheritance is explained, and what adaptation does to diversity. Diagrams get labelled the way the mark scheme wants them.",
                    "In a class of ten the comment lands on your sentence, so you can see why an answer got two marks out of three and what the third one needed.",
                ],
                [
                    group("Unit 1: How do organisms regulate their functions?", [
                        "How do cells function?",
                        "How do plant and animal systems function?",
                        "How do scientific investigations develop understanding of how organisms regulate their functions?",
                    ]),
                    group("Unit 2: How does inheritance impact on diversity?", [
                        "How is inheritance explained?",
                        "How do inherited adaptations impact on diversity?",
                        "How do humans use science to explore and communicate contemporary bioethical issues?",
                    ]),
                ],
            ),
            band(
                "Units 3 & 4",
                "DNA, pathways, immunity and evolution, answered from the data in front of you.",
                [
                    "Units 3 and 4 cover DNA and proteins, photosynthesis and respiration, how the body fights pathogens, and how species change over time. Exam questions hand you a figure or a data set and ask you to use it.",
                    "You practise writing from the data every week. Marked SAC-style responses come back with comments, and the revision sheets stay on the portal between lessons.",
                ],
                [
                    group("Unit 3: How do cells maintain life?", [
                        "What is the role of nucleic acids and proteins in maintaining life?",
                        "How are biochemical pathways regulated?",
                    ]),
                    group("Unit 4: How does life change and respond to challenges?", [
                        "How do organisms respond to pathogens?",
                        "How are species related over time?",
                        "How is scientific inquiry used to investigate cellular processes and/or biological change?",
                    ]),
                ],
            ),
        ],
    },
    specialist: {
        bands: [
            band(
                "Units 1 & 2",
                "Learn to write a proof another person can follow.",
                [
                    "Units 1 and 2 cover proof, logic, graph theory, sequences, combinatorics, matrices, trigonometry, vectors, complex numbers and sampling. The topics listed are the VCAA sample course.",
                    "The write-up matters as much as the last line. The tutor reads your working in a class of ten and stops a bad habit a step before it sets.",
                ],
                [
                    group("Unit 1", [
                        "Algebra, number and structure: Proof and number",
                        "Algebra, number and structure: Logic and algorithms",
                        "Algebra, number and structure: Graph theory",
                        "Discrete mathematics: Sequences and series",
                        "Discrete mathematics: Combinatorics",
                        "Discrete mathematics: Matrices",
                    ]),
                    group("Unit 2", [
                        "Space and measurement: Trigonometry",
                        "Space and measurement: Transformations",
                        "Space and measurement: Vectors in the plane",
                        "Data analysis, probability and statistics: Simulation, sampling and sampling distributions",
                        "Algebra, number and structure: Complex numbers",
                        "Functions, relations and graphs",
                    ]),
                ],
            ),
            band(
                "Units 3 & 4",
                "Proof, complex numbers, vectors and differential equations, under exam conditions.",
                [
                    "Units 3 and 4 assume Methods Units 3 and 4 alongside or already finished. They stretch Methods calculus into vector calculus, differential equations and kinematics.",
                    "You sit SAC-style problems through the year. Feedback is on the structure of the proof and on whether the last line is right.",
                ],
                [
                    group("Discrete mathematics", ["Logic and proof"]),
                    group("Algebra, number and structure", [
                        "Complex numbers and algebra",
                    ]),
                    group("Functions, relations and graphs", [
                        "Functions, relations and graphs",
                    ]),
                    group("Calculus", [
                        "Differential calculus and integral calculus",
                        "Differential equations and kinematics",
                    ]),
                    group("Space and measurement", [
                        "Vectors",
                        "Vectors and Cartesian equations",
                        "Vector calculus",
                    ]),
                    group("Data analysis, probability and statistics", [
                        "Data analysis, probability and statistics",
                    ]),
                ],
            ),
        ],
    },
    general: {
        bands: [
            band(
                "Units 1 & 2",
                "Data, finance, linear models and matrices, with the written answer that earns the marks.",
                [
                    "Units 1 and 2 cover comparing data, sequences and financial maths, linear graphs, matrices, networks and trigonometry. The topics listed are the VCAA sample course.",
                    "CAS does the heavy calculation. The marks sit in the sentence you write under it, and that sentence gets marked every week.",
                ],
                [
                    group("Unit 1", [
                        "Data analysis, probability and statistics: Investigating and comparing data distributions",
                        "Algebra, number and structure: Arithmetic and geometric sequences, recurrence relations and financial mathematics",
                        "Functions, relations and graphs: Linear functions, graphs, equations and models",
                        "Discrete mathematics: Matrices",
                    ]),
                    group("Unit 2", [
                        "Data analysis, probability and statistics: Investigating relationships between two numerical variables",
                        "Discrete mathematics: Graphs and networks",
                        "Functions, relations and graphs: Variation",
                        "Space and measurement: Space, measurement and applications of trigonometry",
                    ]),
                ],
            ),
            band(
                "Units 3 & 4",
                "Data analysis, recursion, matrices and networks, in the shape of the VCAA exam.",
                [
                    "Units 3 and 4 are fully prescribed: data analysis, recursion and financial modelling, matrices, and networks. Exam 1 is multiple choice. Exam 2 is written and wants the interpretation as well as the number.",
                    "SAC-style questions run in the ordinary week, marked with comments, with time to act on them before the school SAC.",
                ],
                [
                    group("Unit 3", [
                        "Data analysis, probability and statistics: Data analysis",
                        "Discrete mathematics: Recursion and financial modelling",
                    ]),
                    group("Unit 4", [
                        "Discrete mathematics: Matrices",
                        "Discrete mathematics: Networks and decision mathematics",
                    ]),
                ],
            ),
        ],
    },
    "year-5-6-english": {
        bands: [
            band(
                "Year 5",
                "Read how a text is built, then write one that holds.",
                [
                    "Year 5. Language, literature and literacy for the Year 5 class.",
                    "In a class of ten the tutor marks the writing and hands it back before the next lesson, with the line that needs another go.",
                ],
                [
                    group("Language", [
                        "Language chosen for social roles and relationships",
                        "Moving past a bare assertion, using other views and sources",
                        "How a text type is organised into stages and phases",
                        "Cohesion from the start of a sentence or paragraph",
                        "Complex sentences, and the effect of that structure",
                        "Expanded noun groups",
                        "How a sequence of images and sound affects meaning",
                        "Precise vocabulary, including specialist terms",
                        "Commas with phrases, and apostrophes for multiple possession",
                    ]),
                    group("Literature", [
                        "Historical, cultural and social detail in literary texts, including work by Aboriginal and Torres Strait Islander authors",
                        "An opinion on a text, using the language of devices and structure",
                        "How point of view shapes a reading of plot, character and events",
                        "Imagery, including simile, metaphor and personification, and sound devices",
                        "A new text that experiments with story, character, setting and figurative language",
                    ]),
                    group("Literacy", [
                        "Paraphrasing and questioning to clarify, connect and justify",
                        "A structured spoken or multimodal text for a purpose",
                        "Words that share a letter pattern but sound different",
                        "Spelling from base words, prefixes, suffixes and word origins",
                        "Less common plurals, and how a suffix changes a word",
                        "Fluent reading of more complex texts",
                        "How a text reflects the time and place it was made",
                        "Features that meet purpose and audience",
                        "Comprehension strategies for literal and inferred meaning",
                        "Different text types for a topic, purpose and audience",
                        "Editing their own writing and someone else's against agreed criteria",
                        "Legible, fluent handwriting",
                    ]),
                ],
            ),
            band(
                "Year 6",
                "Name the bias, then write the paragraph that answers it.",
                [
                    "Year 6. Formality, objective and subjective language, and a text the student can edit.",
                    "The tutor stays with the same class. Comments land on the sentence, not only on the mark.",
                ],
                [
                    group("Language", [
                        "How language changes with formality and social distance",
                        "Objective and subjective language, and bias",
                        "Stages and phases of a text, and when an author adapts them",
                        "Cohesion from repeated structures, features and vocabulary",
                        "Embedded clauses that elaborate, extend and explain",
                        "Verb choice, tense and adverb groups that sharpen an idea",
                        "Still images, moving images and sound used for point of view",
                        "Vivid vocabulary and figurative language",
                        "Commas that separate a dependent clause from an independent clause",
                    ]),
                    group("Literature", [
                        "Responses to characters and events in texts from historical, cultural and social contexts, including work by Aboriginal and Torres Strait Islander authors",
                        "Comparing language choices, modality, repetition, metaphor and theme",
                        "What makes an author's style",
                        "Sound and imagery in prose and poetry",
                        "A text that adapts plot, character, setting or ideas, and tries literary devices",
                    ]),
                    group("Literacy", [
                        "Formality when questioning, arguing and evaluating",
                        "A structured spoken or multimodal text for a known audience",
                        "Reading more complex words from sound, word parts and vocabulary",
                        "Spelling technical words from prefixes, suffixes and Latin and Greek roots",
                        "Choosing texts and reading them fluently",
                        "How a text, including a media text, reflects the context it was made in",
                        "How structure and language features meet a purpose and influence an audience",
                        "Comprehension strategies that connect ideas from more than one source",
                        "Different text types with organised ideas for a purpose and audience",
                        "Editing against agreed criteria, and looking at the choices",
                        "Handwriting that stays legible over a longer piece",
                    ]),
                ],
            ),
        ],
    },
    "year-5-6-maths": {
        bands: [
            band(
                "Year 5",
                "Get the four operations, fractions and measurement steady.",
                [
                    "Year 5. Decimals, fractions, percentages, perimeter, area and the first formal chance work.",
                    "In a class of ten the tutor reads the working on the page. Homework comes back marked before the next lesson.",
                ],
                [
                    group("Number", [
                        "Decimals beyond two places",
                        "Factors, multiples and divisibility",
                        "Unit fractions and mixed numerals",
                        "Percentages, and their fraction and decimal equivalents",
                        "Addition and subtraction of fractions with related denominators",
                        "Multiplication by one- and two-digit numbers",
                        "Division, and what to do with a remainder",
                        "Estimation, including money",
                        "Modelling addition and multiplication problems, including simple finance",
                        "Algorithms for factors, multiples and divisibility",
                    ]),
                    group("Algebra", [
                        "Multiplication and division as inverse operations",
                        "Unknown values in multiplication and division equations",
                    ]),
                    group("Measurement", [
                        "Metric units for length, mass and capacity",
                        "Perimeter and area of regular and irregular shapes",
                        "12- and 24-hour time",
                        "Estimating, constructing and measuring angles",
                    ]),
                    group("Space", [
                        "Objects and their nets",
                        "Grid coordinates and direction",
                        "Translations, reflections, rotations and symmetry",
                    ]),
                    group("Statistics", [
                        "Categorical and discrete data: mode and shape",
                        "Line graphs of change over time",
                        "A statistical investigation: question, display, findings",
                    ]),
                    group("Probability", [
                        "Outcomes that are equally likely, and outcomes with different likelihoods",
                        "Repeated chance experiments and estimated likelihood",
                    ]),
                ],
            ),
            band(
                "Year 6",
                "Integers, percentages, and the formula for a rectangle.",
                [
                    "Year 6. Prime and square numbers, the four quadrants, and probability written as a number.",
                    "The same room of ten. The tutor catches the step that slipped and sets the next problem from that.",
                ],
                [
                    group("Number", [
                        "Integers on a number line and on the Cartesian plane",
                        "Prime, composite, square and triangular numbers",
                        "Equivalent fractions on a number line",
                        "Adding and subtracting decimals",
                        "Adding and subtracting fractions with equivalent fractions",
                        "Multiplying and dividing decimals by powers of 10",
                        "A fraction, decimal or percentage of a quantity, including discounts",
                        "Estimating with rational numbers and percentages",
                        "Modelling practical problems with rational numbers and percentages",
                    ]),
                    group("Algebra", [
                        "Rules for growing patterns and number patterns",
                        "Unknown values in equations with brackets and mixed operations",
                        "Algorithms that generate sets of numbers from a rule",
                    ]),
                    group("Measurement", [
                        "Converting metric units of length, mass and capacity",
                        "The formula for the area of a rectangle",
                        "Elapsed time, timetables and itineraries",
                        "Angles on a straight line, at a point, and vertically opposite angles",
                    ]),
                    group("Space", [
                        "Cross-sections of objects and right prisms",
                        "Points in the four quadrants",
                        "Combinations of transformations, including tessellations",
                    ]),
                    group("Statistics", [
                        "Comparing data sets by mode, range and shape",
                        "Statistical claims in traditional and digital media",
                        "An investigation from a refined question to the findings",
                    ]),
                    group("Probability", [
                        "Probabilities as fractions, decimals and percentages",
                        "Simulations, and what happens as the number of trials grows",
                    ]),
                ],
            ),
        ],
    },
    "year-7-8-english": {
        bands: [
            band(
                "Year 7",
                "Move from a response into a reason.",
                [
                    "Year 7. Identity in language, a justified opinion, and texts written for a named audience.",
                    "In a class of ten the comments name the sentence to change. The student revises from that, before the next class.",
                ],
                [
                    group("Language", [
                        "How language expresses and creates personal and social identities",
                        "The language of evaluation and substantiation",
                        "How texts are structured for a purpose, and how features vary",
                        "Cohesion from overviews, examples, beginnings and endings",
                        "Complex and compound-complex sentences",
                        "Consistent tense",
                        "Still images, moving images and sound used for perspective",
                        "Specialist and technical vocabulary",
                        "Colons and brackets",
                    ]),
                    group("Literature", [
                        "Ideas, points of view, characters and issues in texts from different contexts, including work by Aboriginal and Torres Strait Islander authors",
                        "An opinion on character, setting and events, with the disagreement named",
                        "How devices, dialogue and images build character and sway a reader",
                        "How character, setting and events combine to make meaning",
                        "Literary devices that add layers of meaning, including in poetry",
                        "A text that experiments with literary language from texts already read",
                    ]),
                    group("Literacy", [
                        "Discussion that evaluates the features of a text",
                        "A structured spoken text in formal language, with voice and multimodal elements",
                        "Spelling from rules, word parts and Greek and Latin roots",
                        "How current technology changes reading, creating and responding, including media texts",
                        "How language features shape meaning for an audience and purpose",
                        "How ideas are structured: taxonomies, cause and effect, extended metaphor, chronology",
                        "Comprehension strategies used to analyse and summarise",
                        "Creating texts for a specific audience",
                        "Editing for repetition, order, word choice and coherence",
                    ]),
                ],
            ),
            band(
                "Year 8",
                "Name the choice the writer made, and the effect.",
                [
                    "Year 8. Metaphor in evaluation, intertextual references, and editing for coherence.",
                    "The tutor stays with the class. A draft comes back with the line that is doing the work marked, so the next draft has somewhere to start.",
                ],
                [
                    group("Language", [
                        "How language shapes relationships and roles",
                        "Simile and metaphor in evaluation and substantiation",
                        "Text structure, including hybrid texts",
                        "Cohesion from evidence, quotations and substantiated claims",
                        "Clause structures, including embedded clauses",
                        "Nominalisation",
                        "Images and sound that use intertextual references",
                        "Academic vocabulary",
                        "Semicolons and dashes",
                    ]),
                    group("Literature", [
                        "How ideas and points of view in texts from diverse contexts may represent the values of people and groups, including work by Aboriginal and Torres Strait Islander authors",
                        "Opinions on the language, devices and structures that make a style",
                        "How language and images shape a social or ethical position",
                        "Intertextual references, and the new understanding they open",
                        "Sentence patterns, tone, voice and imagery",
                        "A text that experiments with literary language for a purpose and an effect",
                    ]),
                    group("Literacy", [
                        "Discussion that supports or challenges what a text states or implies",
                        "Spoken texts for formal and informal contexts",
                        "Spelling technical and academic words accurately",
                        "How representations of people, places and events reflect the context of the text",
                        "How language features and quotations represent a perspective",
                        "How authors organise ideas to shape meaning",
                        "Comprehension strategies used to interpret and evaluate",
                        "Texts that raise an issue, report an event or advance an opinion",
                        "Editing to refine and clarify",
                    ]),
                ],
            ),
        ],
    },
    "year-7-8-maths": {
        bands: [
            band(
                "Year 7",
                "Turn number facts into algebra you can reuse.",
                [
                    "Year 7. Integers, ratios, linear equations, and the angle sum of a triangle.",
                    "In a class of ten the tutor watches how the solution is set out and corrects the habit that caused the slip.",
                ],
                [
                    group("Number", [
                        "Perfect squares and square roots",
                        "Expanded notation and prime factors with exponents",
                        "Equivalent forms of rational numbers, including negatives",
                        "Rounding and estimating",
                        "Multiplying and dividing fractions and decimals",
                        "The four operations with positive rational numbers",
                        "Percentages of quantities",
                        "Adding and subtracting integers",
                        "Ratios",
                        "Modelling with rational numbers and percentages, including best buys",
                    ]),
                    group("Algebra", [
                        "Formulas, substitution and an unknown",
                        "The associative, commutative and distributive laws, and algebraic expressions",
                        "One-variable linear equations with natural-number solutions",
                        "Relationships in graphs from real data",
                        "Tables of values, rules and the Cartesian plane",
                        "Formulas with several variables",
                    ]),
                    group("Measurement", [
                        "Area formulas for rectangles, triangles and parallelograms",
                        "Volume of right prisms",
                        "Pi, circumference, radius and diameter",
                        "Corresponding, alternate and co-interior angles",
                        "The interior angle sum of a triangle, and of other shapes",
                        "Modelling with ratios of lengths, areas and volumes",
                    ]),
                    group("Space", [
                        "Two-dimensional representations of three-dimensional objects",
                        "Classifying polygons by sides and angles",
                        "Transformations on the Cartesian plane",
                        "Algorithms that sort and classify shapes",
                    ]),
                    group("Statistics", [
                        "Range, median, mean and mode",
                        "Dot plots and stem-and-leaf plots, including outliers",
                        "An investigation with numerical data from primary and secondary sources",
                    ]),
                    group("Probability", [
                        "Sample spaces for single-stage experiments",
                        "Simulations, and the effect of sample size",
                    ]),
                ],
            ),
            band(
                "Year 8",
                "Linear graphs, Pythagoras, and a circle you can measure.",
                [
                    "Year 8. Index laws, percentage change, congruence and similarity, and probability of two events.",
                    "Practice includes routine fluency and questions that ask for a reason written down. Feedback is on the method each week.",
                ],
                [
                    group("Number", [
                        "Irrational numbers, including pi and non-square roots",
                        "Index laws with positive integer exponents and the zero exponent",
                        "Fractions and terminating or recurring decimals",
                        "The four operations with integers and rational numbers",
                        "Percentage increase, decrease and error",
                        "Modelling with rational numbers and percentages, including profit and loss",
                    ]),
                    group("Algebra", [
                        "Expanding, factorising and simplifying linear expressions",
                        "Graphing linear relations, and solving linear equations and inequalities",
                        "Modelling applied problems with linear relations",
                        "Algorithms that find and correct errors",
                        "Conjectures about linear functions",
                    ]),
                    group("Measurement", [
                        "Area and perimeter of irregular and composite shapes",
                        "Volume and capacity of right prisms",
                        "Circumference and area of a circle",
                        "Time and duration across time zones",
                        "Rates",
                        "Pythagoras' theorem",
                        "Modelling with ratios and rates, including constant speed",
                    ]),
                    group("Space", [
                        "Congruence and similarity",
                        "Properties of quadrilaterals",
                        "Locating objects in three dimensions",
                        "Algorithms that test for congruence or similarity",
                    ]),
                    group("Statistics", [
                        "Population and sample, and how data is collected",
                        "Distributions from random and non-random samples",
                        "Variation across samples, and the effect of sample size",
                        "An investigation that makes an inference and names the uncertainty",
                    ]),
                    group("Probability", [
                        "Complementary events",
                        "Two-way tables, tree diagrams and Venn diagrams",
                        "Simulations for compound events",
                    ]),
                ],
            ),
        ],
    },
    "year-9-10-english": {
        bands: [
            band(
                "Year 9",
                "Write the analysis VCE English will assume.",
                [
                    "Year 9. Allusion and tone, a point of view on the page, and editing for paragraph control.",
                    "In a class of ten the tutor marks the argument in the writing. The next draft uses that comment.",
                ],
                [
                    group("Language", [
                        "How language strengthens relationships and roles",
                        "Evaluation and substantiation through allusion, evocative vocabulary and metaphor",
                        "Adapting text structures and language features for a purpose",
                        "Cohesive devices, including nominalisation",
                        "Sentence structures used for effect, including fragments and lone dependent clauses",
                        "Abstract nouns that summarise an idea",
                        "Symbols in images, and sound, and how they add meaning",
                        "Vocabulary that builds style, mood and tone",
                        "Punctuation for condensing information and for citation",
                    ]),
                    group("Literature", [
                        "Representations of people and places in texts from diverse contexts, including work by Aboriginal and Torres Strait Islander authors",
                        "A response that compares a first reading with a later one",
                        "How devices and images shape a preference about a social, moral or ethical position",
                        "Extended metaphor, metonymy, allegory, symbolism and intertextual references",
                        "How structure, features and devices create aesthetic qualities",
                        "A text, including a hybrid, that experiments with structure, language, devices and voice",
                    ]),
                    group("Literacy", [
                        "Discussion of how language features position an audience",
                        "Spoken texts that shift formality for the audience",
                        "Accurate spelling, and non-standard spelling used for an effect",
                        "How representations of people, places, events and concepts reflect context",
                        "How language features represent values, beliefs and attitudes",
                        "How paragraph and text organisation affects meaning",
                        "Comprehension strategies used to compare and contrast ideas across texts",
                        "Texts that present a point of view and advance an idea",
                        "Editing for clarity, coherence, paragraphing, sentences and vocabulary",
                    ]),
                ],
            ),
            band(
                "Year 10",
                "Compare, argue, and edit until the line holds.",
                [
                    "Year 10. Inclusive and exclusive language, a sustained voice, and a reading of how values sit in the wording.",
                    "The work is for school assessment now, and for the step into VCE English. Comments stay specific enough to use.",
                ],
                [
                    group("Language", [
                        "Inclusive and exclusive language, and how language can empower or disempower",
                        "How evaluative language reveals views and values",
                        "Whether a text's structure and features achieve its purpose",
                        "How structure is chosen, and varied, for sequence and cohesion",
                        "Which sentence structures carry an idea",
                        "How syntax contributes to meaning and style",
                        "Still and moving images, and sound, and the effect of those choices",
                        "An expanded vocabulary used with precision",
                        "Punctuation for meaning and effect",
                    ]),
                    group("Literature", [
                        "Representations of individuals, groups and places, and how they reflect context, including work by Aboriginal and Torres Strait Islander authors",
                        "A student's own interpretation, set beside other readings",
                        "How social, moral or ethical positions are represented",
                        "How structure, features, devices and intertextual connections shape an interpretation",
                        "Voice as a device, and the response it asks for",
                        "A text with a sustained voice, built for a purpose and an audience",
                    ]),
                    group("Literacy", [
                        "Discussion that analyses purpose and the effect of structure and language",
                        "Spoken texts that choose a level of formality on purpose",
                        "Standard and non-standard spelling used for an effect",
                        "How people, places, events and concepts are represented, and how that reflects context",
                        "How language features represent values, beliefs and attitudes, in what is said and what is implied",
                        "How authors organise ideas to achieve a purpose",
                        "Comprehension strategies for complex and abstract ideas",
                        "Texts on challenging issues, made for a range of purposes and audiences",
                        "Editing for control of content, organisation, sentences, vocabulary and visual features",
                    ]),
                ],
            ),
        ],
    },
    "year-9-10-maths": {
        bands: [
            band(
                "Year 9",
                "Linear and quadratic, with the working written out.",
                [
                    "Year 9. Index laws with variables, monic quadratics, similarity, and trigonometry in right-angled triangles.",
                    "In a class of ten the tutor picks up shaky algebra early. Problems ask for a reason the student can write down.",
                ],
                [
                    group("Number", [
                        "Real numbers: rational and irrational",
                    ]),
                    group("Algebra", [
                        "Index laws with integer exponents, extended to variables",
                        "Expanding binomial products and factorising monic quadratics",
                        "Sketching linear graphs and solving linear equations",
                        "Gradient, midpoint and distance",
                        "Quadratic functions, and the null factor law for monic quadratics with integer roots",
                        "Modelling change, including simple interest, with linear or quadratic functions",
                        "How changing a parameter changes a graph",
                    ]),
                    group("Measurement", [
                        "Volume and surface area of right prisms, cylinders and composite objects",
                        "Very small and very large measurements in scientific notation",
                        "Angle properties, scale, similarity, Pythagoras and trigonometry in right-angled triangles",
                        "Absolute, relative and percentage error",
                        "Modelling with direct proportion, rates, ratio and scale",
                    ]),
                    group("Space", [
                        "Sine, cosine and tangent as constant ratios for a given angle",
                        "Enlargement, similarity, ratio and scale",
                        "Algorithms based on geometric constructions and theorems",
                    ]),
                    group("Statistics", [
                        "Survey reports, and estimates of a population mean or median",
                        "How sampling and the choice of display can support a point of view",
                        "Comparing numerical distributions: skewed, symmetric, bi-modal, and the effect of outliers",
                        "Choosing a display for the type of data",
                        "An investigation, and how strong the evidence is",
                    ]),
                    group("Probability", [
                        "Two-step experiments, with and without replacement",
                        "Relative frequency, and events with and, or, and exclusive or",
                        "Simulations when a probability cannot be calculated exactly",
                    ]),
                ],
            ),
            band(
                "Year 10",
                "Quadratics, simultaneous equations, and the trigonometry VCE will assume.",
                [
                    "Year 10. Algebraic fractions, growth and decay, surface area of composite objects, and conditional probability.",
                    "Regular practice and method feedback are for school exams, and for the step into Maths Methods or General Maths.",
                ],
                [
                    group("Number", [
                        "The effect of approximating real numbers in repeated calculations",
                    ]),
                    group("Algebra", [
                        "Factorising by a common algebraic factor",
                        "Algebraic products and quotients with index laws",
                        "The four operations with simple algebraic fractions",
                        "Binomial products and monic quadratic factorisation",
                        "Substitution into formulas, and rearranging for a term",
                        "Algorithms in pseudocode or a general purpose language",
                        "Linear equations, including those from formulas",
                        "Linear inequalities on a number line",
                        "Simultaneous linear equations, algebraic and graphical",
                        "Gradients of parallel and perpendicular lines",
                        "Quadratic, reciprocal, circle and exponential relations, algebraic and graphical",
                        "Linear equations with simple algebraic fractions",
                        "Simple quadratic equations, including the null factor law",
                        "Simple exponential equations",
                        "Modelling inverse proportion, growth and decay, including compound interest",
                        "Solving equations graphically, and checking whether every solution was found",
                    ]),
                    group("Measurement", [
                        "Surface area and volume of composite objects",
                        "Logarithmic scales",
                        "Pythagoras and trigonometry, including elevation, depression and direction",
                        "Direct and inverse proportion, scale, and the effect of measurement error",
                    ]),
                    group("Space", [
                        "Deductive proofs and theorems for shapes in the plane",
                        "Networks and connectedness",
                    ]),
                    group("Statistics", [
                        "Quartiles, interquartile range and boxplots",
                        "Scatterplots and a line of good fit",
                        "Two-way tables for categorical variables",
                        "Claims in statistical reports, including bias",
                        "An investigation with bivariate data, including time",
                    ]),
                    group("Probability", [
                        "Conditional probability, and the language of given and knowing that",
                        "Two- and three-step experiments, and independence",
                    ]),
                ],
            ),
        ],
    },
    selective: {
        bands: [
            band(
                "Selective Entry exam",
                "Year 8 knowledge. Three papers. The clock is the hard part.",
                [
                    "ACER runs this exam for the Victorian Department of Education. Year 8 students sit it for a Year 9 place at a selective school.",
                    "Mathematics and quantitative reasoning take 60 minutes. Reading and verbal reasoning take 55. Writing is two tasks in 40 minutes. The knowledge asked for stays inside the Year 8 curriculum.",
                ],
                [
                    group("Mathematics", [
                        "Year 8 mathematics, used on a real problem",
                        "The method, written so the marker can follow it",
                    ]),
                    group("Quantitative reasoning", [
                        "Numbers, patterns, and shapes",
                        "Abstract questions, and questions set in a real situation",
                    ]),
                    group("Reading", [
                        "Finding what the text says",
                        "Joining ideas, interpreting them, and judging them",
                    ]),
                    group("Verbal reasoning", [
                        "Words, concepts, and logic",
                    ]),
                    group("Writing", [
                        "Two tasks in 40 minutes",
                        "Precise language",
                        "Ideas in an order a reader can follow",
                    ]),
                ],
            ),
        ],
    },
};

const placeholderGroup = (subject, pair) =>
    group(
        pair ? `Units ${pair}` : "Topics",
        pair
            ? [
                  `Area titles for Units ${pair} are being written from the current study design.`,
              ]
            : [
                  "Area titles for this class are being written from the current study design.",
              ],
        { placeholder: true },
    );

/** Year bands and Selective. VCE families above do not use this. */
export const placeholderCurriculum = (subject) => {
    if (subject.group === "vce") {
        return {
            bands: [
                band(
                    "Units 1 & 2",
                    `The first pair of ${subject.shortName}.`,
                    "Area titles for this pair are being written from the current study design.",
                    [placeholderGroup(subject, "1 & 2")],
                ),
                band(
                    "Units 3 & 4",
                    `The exam pair of ${subject.shortName}.`,
                    "Area titles for this pair are being written from the current study design.",
                    [placeholderGroup(subject, "3 & 4")],
                ),
            ],
        };
    }

    return {
        bands: [
            band(
                null,
                `What ${subject.name} covers this year.`,
                "Topic groups for this class are being written from the current study design.",
                [placeholderGroup(subject)],
            ),
        ],
    };
};

export const getCurriculum = (subject) =>
    curriculumBySlug[subject.slug] ?? placeholderCurriculum(subject);
