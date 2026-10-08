import { Link } from "react-router-dom";
import PageDoc from "../components/PageDoc";
import TextLink from "../components/TextLink";

const NotFoundPage = () => {
    return (
        <main
            className="min-h-screen bg-biege-primary mt-[80px] px-5 py-16 md:px-8 md:py-24"
            role="main"
            aria-label="Page not found"
        >
            <PageDoc
                title="Page not found | Taiyo Tuition"
                description="This page doesn't exist on the Taiyo Tuition site."
                noindex
            />
            <section className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl bg-white px-8 py-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:py-16">
                <p className="eyebrow text-primary">404</p>
                <h1 className="h2 font-heading font-bold text-black">
                    That page isn't here.
                </h1>
                <p className="body max-w-[34rem] text-black-primary">
                    The link may be old or mistyped. Every class is listed on
                    the subjects page, or you can book a free trial straight
                    away.
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-5">
                    <Link
                        to="/subjects"
                        className="body inline-block rounded-full bg-primary px-8 py-3 font-heading font-semibold text-white transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        See all subjects
                    </Link>
                    <TextLink
                        to="/enroll"
                        className="body-sm font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                        Book a free trial
                    </TextLink>
                </div>
            </section>
        </main>
    );
};

export default NotFoundPage;
