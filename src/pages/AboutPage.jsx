import certificate from "../assets/illustrations/certificate.svg";
import grading from "../assets/illustrations/grading.svg";
import workingTogether from "../assets/illustrations/working-together.svg";
import classStill from "../assets/taiyoImages/taiyoClassroom.webp";
import { storyPrinciples } from "../data/story";
import HomeClose from "../components/home/HomeClose";
import HomeCta from "../components/home/HomeCta";
import HomeSection from "../components/home/HomeSection";
import MediaImage from "../components/MediaImage";
import PageDoc from "../components/PageDoc";
import StoryVideo from "../components/StoryVideo";
import TextLink from "../components/TextLink";

const PRINCIPLE_ART = {
    certificate,
    grading,
    workingTogether,
};

const nextPages = [
    { to: "/reviews", label: "Reviews" },
    { to: "/results", label: "Named results" },
    { to: "/location", label: "Find us in Mount Waverley" },
];

const AboutPage = () => {
    return (
        <main role="main">
            <PageDoc path="/about" />

            <HomeSection
                as="header"
                label="About Taiyo"
                pad="medium"
                className="bg-biege-primary mt-[80px]"
                innerClassName="flex flex-col gap-10 md:gap-12"
            >
                <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-12">
                    <div className="flex max-w-[36rem] flex-col gap-3">
                        <h1 className="h2 font-heading font-bold text-black">
                            We sat VCE too. Then we came back to teach it.
                        </h1>
                        <p className="body text-black-primary">
                            The tutors here average a 98+ ATAR and still
                            remember what it felt like. You get someone close
                            enough in age to ask the question you&apos;d skip at
                            school, and the same tutor from your first class of
                            the year to your last. The name Taiyo (太陽) means
                            sun.
                        </p>
                    </div>
                    <StoryVideo
                        aspect="auto"
                        className="aspect-[4/5] w-full md:aspect-auto md:h-full md:min-h-[32rem]"
                    />
                </div>

                <div className="grid gap-8 border-t border-black/8 pt-8 md:grid-cols-3 md:gap-10 md:pt-10">
                    {storyPrinciples.map((principle) => (
                        <article
                            key={principle.title}
                            className="flex flex-col gap-3"
                        >
                            <div className="flex h-20 items-end">
                                <img
                                    src={PRINCIPLE_ART[principle.art]}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-[72px] w-auto max-w-full object-contain"
                                />
                            </div>
                            <h2 className="h5 font-heading font-semibold text-black">
                                {principle.title}
                            </h2>
                            <p className="body-sm text-black-primary">
                                {principle.body}
                            </p>
                        </article>
                    ))}
                </div>
            </HomeSection>

            <HomeSection
                label="Our aim"
                className="bg-tertiary"
                innerClassName="grid items-center gap-10 md:grid-cols-2 md:gap-14"
            >
                <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-gradient-secondary md:min-h-[420px]">
                    <MediaImage
                        src={classStill}
                        alt="Students working in a Taiyo classroom"
                        className="absolute inset-0"
                        imgClassName="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex max-w-[36rem] flex-col gap-3">
                        <h2 className="h2 font-heading font-bold text-black">
                            Help every student go further than they expected.
                        </h2>
                        <p className="body text-black-primary">
                            From Year 5 to 12. Group classes capped at ten, tutors who
                            average a 98+ ATAR and stay all year, and notes
                            they write for the class.
                        </p>
                    </div>
                    <HomeCta className="self-start" />
                    <div className="flex flex-col gap-3">
                        {nextPages.map((page) => (
                            <TextLink
                                key={page.to}
                                to={page.to}
                                className="body-sm font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                            >
                                {page.label}
                            </TextLink>
                        ))}
                    </div>
                </div>
            </HomeSection>

            <HomeClose />
        </main>
    );
};

export default AboutPage;
