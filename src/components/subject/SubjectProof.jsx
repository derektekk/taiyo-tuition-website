import { atarResults } from "../../data/atarResults";
import HomeSection from "../home/HomeSection";
import SubjectSectionHeader from "./SubjectSectionHeader";

const cardKey = (result) => `${result.name}-${result.school}-${result.score}`;

/** Tier by distinct score, so tied ATARs always share a colour. */
const distinctScores = [...new Set(atarResults.map((result) => result.score))]
    .sort((a, b) => Number(b) - Number(a));

const TIERS = [
    { tile: "bg-primary", score: "text-tertiary", meta: "text-tertiary/85" },
    { tile: "bg-blue-primary", score: "text-primary-deep", meta: "text-primary-deep/80" },
    { tile: "bg-mist-100", score: "text-black", meta: "text-black-primary" },
    { tile: "bg-biege-primary", score: "text-black", meta: "text-black-primary" },
];

const tierFor = (score) =>
    TIERS[Math.min(distinctScores.indexOf(score), TIERS.length - 1)];

const ScoreTile = ({ result }) => {
    const tier = tierFor(result.score);

    return (
        <li
            className={`flex flex-col justify-between gap-7 rounded-2xl p-5 ${tier.tile}`}
        >
            <p
                className={`h3 font-heading font-extrabold tracking-[-0.03em] ${tier.score}`}
            >
                {result.score}
            </p>
            <div className="flex min-w-0 flex-col">
                <p
                    className={`body-sm truncate font-heading font-semibold ${tier.score}`}
                >
                    {result.name}
                </p>
                <p className={`caption truncate ${tier.meta}`}>{result.school}</p>
            </div>
        </li>
    );
};

/** Every named ATAR at once, strongest tile for the highest score. */
const SubjectProof = () => (
    <HomeSection
        id="results"
        label="Named ATAR results"
        className="bg-tertiary"
        innerClassName="flex flex-col gap-8"
    >
        <div className="flex flex-col gap-3">
            <p className="eyebrow text-primary">Named ATARs</p>
            <SubjectSectionHeader
                title="Students who sat Taiyo classes, by name and school."
                body="Published results from our students. The full list is on the results page."
                linkTo="/results"
                linkLabel="See all results"
            />
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {atarResults.map((result) => (
                <ScoreTile key={cardKey(result)} result={result} />
            ))}
        </ul>
    </HomeSection>
);

export default SubjectProof;
