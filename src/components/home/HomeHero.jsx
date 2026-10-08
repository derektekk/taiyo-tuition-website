import { UsersRound } from "lucide-react";
import heroStill from "../../assets/taiyoImages/hero.webp";
import BlueFuzz from "../BlueFuzz";
import MediaImage from "../MediaImage";
import TextLink from "../TextLink";
import HeroRotatingLine from "./HeroRotatingLine";
import HeroWave from "./HeroWave";
import AnimatedButton from "../AnimatedButton";
import HomeSection from "./HomeSection";

const pillarLines = [
    "each student gets more.",
    "the results speak for themselves.",
    "tutors show up for you.",
];

const HomeHero = () => {
    return (
        <HomeSection
            label="Hero"
            pad="hero"
            reveal={false}
            className="relative overflow-hidden bg-tertiary"
            backdrop={
                <>
                    <BlueFuzz />
                    <HeroWave />
                </>
            }
        >
            <div className="relative z-10 flex flex-col items-center">
                <div className="flex w-full max-w-[40rem] flex-col items-center gap-5 text-center">
                    <p className="eyebrow inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-3 py-1 pr-2.5 text-tertiary">
                        Private group tutoring
                        <UsersRound
                            className="size-3.5 shrink-0"
                            strokeWidth={2}
                            aria-hidden="true"
                        />
                    </p>
                    <h1 className="display font-heading font-bold text-black">
                        A class where
                        <span className="block text-primary leading-[1.2]">
                            <HeroRotatingLine lines={pillarLines} />
                        </span>
                    </h1>
                    <p className="body-lg text-black-primary">
                        10-person classes from Year 5 through VCE and Selective,
                        in Mount Waverley or online.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                        <AnimatedButton />
                        <TextLink
                            to="/contact"
                            className="body-lg font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                            Talk to us
                        </TextLink>
                    </div>
                </div>

                <div className="relative mt-10 h-[240px] w-full max-w-[52rem] overflow-hidden rounded-2xl bg-blue-primary sm:h-[280px] md:h-[380px]">
                    <MediaImage
                        src={heroStill}
                        alt="A Taiyo tutor and student smiling while working through papers at a desk"
                        className="absolute inset-0"
                        imgClassName="object-cover object-center"
                        loading="eager"
                        fetchPriority="high"
                    />
                </div>
            </div>
        </HomeSection>
    );
};

export default HomeHero;
