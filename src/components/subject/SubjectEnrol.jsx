import AnimatedButton from "../AnimatedButton";
import HomeSection from "../home/HomeSection";
import SubjectSectionHeader from "./SubjectSectionHeader";
import TextLink from "../TextLink";

const pad = (n) => `(${String(n).padStart(2, "0")})`;

const parasOf = (body) => (Array.isArray(body) ? body : [body]);

const Step = ({ step, index }) => (
    <li className="flex flex-col gap-4 md:gap-5">
        <p className="caption font-heading font-semibold tabular-nums tracking-[0.08em] text-primary">
            {pad(index + 1)}
        </p>
        <div className="flex flex-col gap-3 border-t border-black/10 pt-4 md:pt-5">
            <h3 className="h3 font-heading font-bold text-black text-balance">
                {step.title}
            </h3>
            {parasOf(step.body).map((para) => (
                <p key={para} className="body text-black-primary">
                    {para}
                </p>
            ))}
        </div>
    </li>
);

/**
 * How to enrol, in place of the weekly fee card. EdAtlas numbering, three
 * steps. The fee lives inside step three so the number stays on the page
 * without leading the section. Steps come from subjectProgram.js.
 */
const SubjectEnrol = ({ subject, enrollTo }) => (
    <HomeSection
        id="enrol"
        label="How to enrol"
        className="bg-blue-primary/30"
        innerClassName="flex flex-col gap-10 md:gap-12"
    >
        <SubjectSectionHeader
            title="How to enrol"
            body={`Three steps from this page to a seat in ${subject.shortName ?? subject.name}. The first one is free.`}
            linkTo="/faq"
            linkLabel="Fees and payment"
        />

        <ol className="grid gap-10 md:grid-cols-3 md:gap-10 lg:gap-14">
            {subject.enrolSteps.map((step, index) => (
                <Step key={step.title} step={step} index={index} />
            ))}
        </ol>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 rounded-2xl bg-tertiary p-5 ring-1 ring-black/6 md:p-6">
            <AnimatedButton to={enrollTo} />
            <p className="body-sm text-black-primary">
                Questions first? Call, email, or read the FAQ.
            </p>
            <TextLink
                to="/contact"
                className="body-sm ml-auto font-heading font-semibold text-primary transition-colors hover:text-primary/80"
            >
                Talk to us
            </TextLink>
        </div>
    </HomeSection>
);

export default SubjectEnrol;
