import { faqs, homeFaqIds } from "../../data/faq";
import BlueFuzz from "../BlueFuzz";
import ContactForm from "../ContactForm";
import FaqAccordion from "../FaqAccordion";
import TextLink from "../TextLink";
import HomeSection from "./HomeSection";

const homeFaqs = homeFaqIds
    .map((id) => faqs.find((faq) => faq.id === id))
    .filter(Boolean);

const HomeEnrol = () => {
    return (
        <HomeSection
            id="enrol"
            label="Enrol for a free trial"
            className="relative overflow-hidden bg-biege-primary"
            innerClassName="relative z-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
            backdrop={<BlueFuzz />}
        >
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2
                        id="enrol-heading"
                        className="h2 font-heading font-bold text-black"
                    >
                        Book a free trial
                    </h2>
                    <p className="body max-w-[36rem] text-black-primary">
                        Tell us the year level and subject, we&apos;ll get back
                        to you within a few hours with a free trial lesson for
                        your child.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-end justify-between gap-4">
                        <h3 className="h4 font-heading font-semibold text-black">
                            Before you book
                        </h3>
                        <TextLink
                            to="/faq"
                            className="body-sm font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                            See all questions
                        </TextLink>
                    </div>
                    <FaqAccordion
                        items={homeFaqs}
                        itemClassName="bg-tertiary ring-1 ring-black/6"
                    />
                </div>
            </div>

            <div className="w-full">
                <ContactForm hideIntro />
            </div>
        </HomeSection>
    );
};

export default HomeEnrol;
