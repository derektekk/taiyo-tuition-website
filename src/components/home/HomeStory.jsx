import { ArrowRight, Award, BookOpen, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import { storyPrinciples } from "../../data/story";
import StoryVideo from "../StoryVideo";
import HomeSection from "./HomeSection";

const CLAIM_ICONS = {
    certificate: Award,
    grading: BookOpen,
    workingTogether: HeartHandshake,
};

const CLAIM_FILLS = ["bg-mist-100", "bg-mist-200", "bg-mist-300"];

const ClaimBox = ({ art, title, body, fill }) => {
    const Icon = CLAIM_ICONS[art];

    return (
        <article
            className={`flex h-full flex-col items-start gap-5 rounded-2xl p-6 md:p-7 ${fill}`}
        >
            {Icon && (
                <Icon
                    className="size-8 text-primary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                />
            )}
            <div className="flex min-w-0 flex-col gap-2">
                <h3 className="h4 font-heading font-semibold text-black">
                    {title}
                </h3>
                <p className="body-sm text-black">{body}</p>
            </div>
        </article>
    );
};

const StoryCta = () => (
    <Link
        to="/about"
        className="group flex h-full flex-col items-center justify-center gap-5 rounded-2xl bg-primary p-6 text-tertiary ring-2 ring-transparent transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-primary-deep hover:ring-black/10 hover:shadow-[0_12px_32px_-12px_rgba(20,40,90,0.45)] md:p-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
        <span className="h4 inline-flex items-center gap-2 font-heading font-semibold">
            <span className="relative">
                Read our story
                <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-current motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
            </span>
            <ArrowRight
                className="size-5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1"
                strokeWidth={1.75}
                aria-hidden="true"
            />
        </span>
    </Link>
);

const HomeStory = () => {
    return (
        <HomeSection
            id="story"
            label="About Taiyo"
            className="bg-tertiary"
            innerClassName="flex flex-col gap-8 md:gap-12"
        >
            <div className="mx-auto flex max-w-[40rem] flex-col items-center gap-3 text-center">
                <h2 className="h2 font-heading font-bold text-black">
                    We sat VCE too. Then we came back to teach it.
                </h2>
                <p className="body text-black-primary">
                    The tutors here average a 98+ ATAR and still remember what
                    it felt like. You get someone close enough in age to ask
                    the question you&apos;d skip at school, and the same tutor
                    from your first class of the year to your last.
                </p>
            </div>

            <div className="grid items-stretch gap-4 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:grid-rows-2">
                <StoryVideo
                    aspect="4/5"
                    className="w-full md:row-span-2 md:h-full md:min-h-[28rem] md:aspect-auto lg:min-h-[35rem]"
                />
                {storyPrinciples.map((claim, index) => (
                    <ClaimBox
                        key={claim.title}
                        art={claim.art}
                        title={claim.title}
                        body={claim.body}
                        fill={CLAIM_FILLS[index]}
                    />
                ))}
                <StoryCta />
            </div>
        </HomeSection>
    );
};

export default HomeStory;
