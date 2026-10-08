import { useEffect } from "react";
import { Clock, MapPin, UsersRound } from "lucide-react";
import ContactForm from "../components/ContactForm";
import BlueFuzz from "../components/BlueFuzz";
import HeroWave from "../components/home/HeroWave";
import Reveal from "../components/Reveal";
import ScrollAnimateText from "../components/ScrollAnimateText";

const facts = [
    { Icon: UsersRound, label: "Classes capped at 10" },
    { Icon: Clock, label: "Two hours a week" },
    { Icon: MapPin, label: "Mount Waverley or online" },
];

const EnrollNowPage = () => {
    useEffect(() => {
        document.title = "Book a free trial | Taiyo Tuition";
    }, []);

    return (
        <main
            className="relative min-h-screen overflow-hidden bg-tertiary pt-[80px]"
            role="main"
            aria-label="Book a free trial"
        >
            <HeroWave />
            <BlueFuzz />

            <div className="padding-global relative z-10 padding-section-medium">
                <div className="container-small flex flex-col items-center gap-5 text-center">
                    <ScrollAnimateText
                        as="h1"
                        className="h1 font-heading font-bold text-black"
                    >
                        Book a free trial
                    </ScrollAnimateText>
                    <ScrollAnimateText
                        as="p"
                        className="body-lg max-w-[34rem] text-black-primary"
                    >
                        Tell us the year level and subject, we&apos;ll get back
                        to you within a few hours with a free trial lesson for
                        your child.
                    </ScrollAnimateText>
                    <ul className="flex flex-wrap items-center justify-center gap-2">
                        {facts.map(({ Icon, label }) => (
                            <li
                                key={label}
                                className="body-sm inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1.5 font-medium text-primary backdrop-blur-sm"
                            >
                                <Icon
                                    className="size-4 shrink-0"
                                    strokeWidth={2}
                                    aria-hidden="true"
                                />
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>

                <Reveal className="container-small mt-10 md:mt-12">
                    <div className="rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                        <ContactForm hideIntro />
                    </div>
                </Reveal>
            </div>
        </main>
    );
};

export default EnrollNowPage;
