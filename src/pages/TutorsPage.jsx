import { Link } from "react-router-dom";
import HomeClose from "../components/home/HomeClose";
import PageDoc from "../components/PageDoc";
import Reveal from "../components/Reveal";
import TutorHeadshot from "../components/TutorHeadshot";
import ScrollAnimateText from "../components/ScrollAnimateText";
import { tutors } from "../data/tutors";

const initials = (name) =>
    name
        .split(" ")
        .map((part) => part[0])
        .join("");

const atarOf = (tutor) =>
    tutor.qualifications
        .find((item) => item.startsWith("ATAR "))
        ?.slice(5) ?? "";

const rawOf = (tutor) => {
    const line = tutor.qualifications.find((item) => !item.startsWith("ATAR "));
    const match = line?.match(/(\d+)$/);
    return match ? Number(match[1]) : null;
};

const SUBJECT_PILL = {
    Biology: "bg-[#d8f3e3] text-[#146c43]",
    English: "bg-[#fde2d8] text-[#9a3412]",
    "General Maths": "bg-[#fdecc8] text-[#92400e]",
    "Maths Methods": "bg-[#d5f4f1] text-[#0f766e]",
    "Specialist Maths": "bg-[#ece4fb] text-[#6d28d9]",
    Physics: "bg-[#fce7f3] text-[#9d174d]",
};

const pillClassFor = (subject) =>
    SUBJECT_PILL[subject] ?? "bg-[#eeeae6] text-[#4a403a]";

const TutorCard = ({ tutor, index }) => {
    const raw = rawOf(tutor);

    return (
    <Reveal
        as="article"
        delay={index * 0.1}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
    >
        {tutor.image ? (
            <TutorHeadshot tutor={tutor} />
        ) : (
            <div className="flex aspect-square w-full flex-shrink-0 flex-col items-center justify-center gap-2 bg-mist-100">
                <span className="font-heading text-3xl font-semibold text-primary">
                    {initials(tutor.name)}
                </span>
                <span className="caption text-dust">Photo coming</span>
            </div>
        )}

        <div className="px-5 py-4 text-center">
            <h2 className="h4 text-primary">{tutor.name}</h2>
            <p className="body-sm mt-1 font-semibold text-gray-900">
                {tutor.subjects.join(", ")}
            </p>
            <p className="body-sm mt-2 flex items-center justify-center gap-2 text-black-primary">
                <span>ATAR {atarOf(tutor)}</span>
                <span aria-hidden="true">|</span>
                <span
                    className={`caption rounded-full px-2.5 py-0.5 font-semibold ${pillClassFor(tutor.subjects[0])}`}
                >
                    {raw} RAW
                </span>
            </p>
        </div>
    </Reveal>
    );
};

const TutorsPage = () => {
    return (
        <main
            className="min-h-screen bg-biege-primary mt-[80px]"
            role="main"
        >
            <PageDoc path="/tutors" />

            <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <ScrollAnimateText
                        as="h1"
                        className="display text-gray-900 mb-6"
                    >
                        Our Tutors
                    </ScrollAnimateText>
                    <ScrollAnimateText
                        as="p"
                        className="body-lg text-gray-600 max-w-3xl mx-auto"
                    >
                        The scores they got, and the subject they teach.
                    </ScrollAnimateText>
                </header>

                {tutors.length > 0 ? (
                    <section aria-label="Our expert tutors available for tutoring">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tutors.map((tutor, index) => (
                                <TutorCard
                                    key={tutor.slug}
                                    tutor={tutor}
                                    index={index}
                                />
                            ))}
                        </div>
                    </section>
                ) : (
                    <Reveal
                        as="section"
                        aria-label="Tutor profiles"
                        className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-2xl mx-auto"
                    >
                        <h2 className="h3 text-gray-900 mb-3">
                            Tutor profiles are on their way
                        </h2>
                        <p className="body text-gray-600 mb-8">
                            We are putting together full profiles for our
                            teaching team. In the meantime, get in touch and we
                            will match your student with the right tutor.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-[#3482FF] hover:scale-105 transition-all ease-in-out duration-300 inline-block"
                        >
                            Talk to us
                        </Link>
                    </Reveal>
                )}

            </div>

            <HomeClose />
        </main>
    );
};

export default TutorsPage;
