const cards = [
    {
        title: "Ten students per class",
        body: "Small enough for the tutor to know every student by name and spot who is falling behind before the term slips.",
    },
    {
        title: "Notes and practice sets written here",
        body: "The tutors write the homework, the SAC practice, and the revision sheets. The material matches the class, week by week.",
    },
    {
        title: "The tutor adjusts the plan each week",
        body: "If half the room is stuck on integration by parts, that is the lesson. The plan follows the students.",
    },
    {
        title: "Habits that carry into the exam",
        body: "Students learn how to set out working, manage time on a paper, and check their own answers. The mark comes from the method.",
    },
];

const HomeAim = () => {
    return (
        <section
            aria-label="Our aim"
            className="flex flex-col gap-8 bg-biege-primary px-5 py-16 md:px-20 md:py-20"
        >
            <div className="flex max-w-[640px] flex-col gap-3">
                <h2 className="h2 font-heading font-bold tracking-[-0.02em] text-black">
                    Help every student go further than they expected.
                </h2>
                <p className="body text-black-primary">
                    From Year 5 to 12. Group classes capped at ten, tutors who
                    average a 98+ ATAR and stay all year, and materials written for
                    this room.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {cards.map((card) => (
                    <article
                        key={card.title}
                        className="flex flex-col gap-3 rounded-xl bg-tertiary p-8"
                    >
                        <h3 className="h4 font-heading font-semibold tracking-[-0.008em] text-black">
                            {card.title}
                        </h3>
                        <p className="body text-black-primary">{card.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default HomeAim;
