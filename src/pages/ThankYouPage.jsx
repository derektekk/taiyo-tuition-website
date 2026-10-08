import { Link } from "react-router-dom";
import PageDoc from "../components/PageDoc";
import Reveal from "../components/Reveal";
import ScrollAnimateText from "../components/ScrollAnimateText";

const ThankYouPage = () => {
    return (
        <main
            className="min-h-screen bg-biege-primary mt-[80px] px-5 py-16 md:px-8 md:py-24"
            role="main"
            aria-label="Trial booking received"
        >
            <PageDoc
                title="We've got it | Taiyo Tuition"
                description="Your free trial request reached Taiyo Tuition. We'll reply within a few hours with a class time."
                noindex
            />
            <Reveal
                as="section"
                className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl bg-white px-8 py-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:py-16"
            >
                <span
                    aria-hidden="true"
                    className="flex size-16 items-center justify-center rounded-full bg-primary text-white"
                >
                    <svg
                        className="size-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </span>
                <ScrollAnimateText
                    as="h1"
                    className="h2 font-heading font-bold text-black"
                >
                    We've got it.
                </ScrollAnimateText>
                <ScrollAnimateText
                    as="p"
                    className="body max-w-[34rem] text-black-primary"
                >
                    We'll reply within a few hours with a class time. The trial
                    is one full lesson, in Mount Waverley or on the same live
                    class, and it is free. After that you decide whether to
                    keep the seat.
                </ScrollAnimateText>
                <Link
                    to="/"
                    className="body mt-2 inline-block rounded-full bg-primary px-8 py-3 font-heading font-semibold text-white transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                    Back to home
                </Link>
            </Reveal>
        </main>
    );
};

export default ThankYouPage;
