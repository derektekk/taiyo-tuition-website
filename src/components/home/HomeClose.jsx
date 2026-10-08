import { location } from "../../data/location";
import AnimatedButton from "../AnimatedButton";
import TextLink from "../TextLink";
import HomeSection from "./HomeSection";

const contactLinkClass =
    "font-heading font-semibold text-tertiary transition-colors hover:text-tertiary/80";

/**
 * `enrollTo` lets a class page send its slug to the trial form
 * (`/enroll?subject=<slug>`). Every other mount keeps the plain `/enroll`.
 */
const HomeClose = ({ enrollTo = "/enroll", id }) => {
    return (
        <HomeSection
            id={id}
            label="Book a free trial"
            className="bg-primary-deep"
            innerClassName="flex flex-col items-center gap-8 text-center"
        >
            <div className="flex max-w-[42rem] flex-col items-center gap-3">
                <h2 className="h2 font-heading font-bold text-tertiary">
                    Year 5 to 12 only happens once. Give them a room of ten.
                </h2>
                <p className="body-lg text-tertiary">
                    Trial classes are free. Come see the class in Mount Waverley
                    or online, then decide.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                <AnimatedButton to={enrollTo} />
                <TextLink
                    to="/contact"
                    className="body-lg font-heading font-semibold text-tertiary transition-colors hover:text-tertiary/80"
                >
                    Talk to us
                </TextLink>
            </div>

            <address className="body-sm flex flex-wrap items-center justify-center gap-x-3 gap-y-1 not-italic text-tertiary">
                <a
                    href={`mailto:${location.email}`}
                    className={contactLinkClass}
                >
                    {location.email}
                </a>
                <span aria-hidden="true" className="text-tertiary/40">
                    |
                </span>
                <a href={location.phoneHref} className={contactLinkClass}>
                    {location.phone}
                </a>
            </address>
        </HomeSection>
    );
};

export default HomeClose;
