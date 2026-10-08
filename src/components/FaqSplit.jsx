import FaqAccordion from "./FaqAccordion";
import HomeCta from "./home/HomeCta";
import HomeSection from "./home/HomeSection";
import TextLink from "./TextLink";

/**
 * Heading and contact CTA on the left, accordion on the right.
 * Home, class pages, and /faq share this chrome.
 */
const FaqSplit = ({
    as = "section",
    headingAs: Heading = "h2",
    id = "faq",
    label = "Frequently asked questions",
    title,
    body,
    items,
    showAllLink = false,
    className = "bg-tertiary",
}) => {
    return (
        <HomeSection
            as={as}
            id={id}
            label={label}
            className={className}
            innerClassName="grid items-start gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16"
        >
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <Heading className="h2 font-heading font-bold text-black text-balance">
                        {title}
                    </Heading>
                    <p className="body text-black-primary">{body}</p>
                </div>
                <HomeCta to="/contact" text="Talk to us" />
            </div>

            <div className="flex flex-col gap-3">
                {showAllLink && (
                    <div className="flex justify-end">
                        <TextLink
                            to="/faq"
                            className="body-sm font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                            See all questions
                        </TextLink>
                    </div>
                )}
                <FaqAccordion items={items} />
            </div>
        </HomeSection>
    );
};

export default FaqSplit;
