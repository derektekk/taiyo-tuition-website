import { atarResults } from "../../data/atarResults";
import ResultList from "../ResultList";
import TextLink from "../TextLink";
import HomeSection from "./HomeSection";

const PREVIEW_COUNT = 9;
const MOBILE_PREVIEW_COUNT = 12;

const HomeResults = () => {
    const preview = atarResults.slice(0, PREVIEW_COUNT);
    const mobilePreview = atarResults.slice(0, MOBILE_PREVIEW_COUNT);

    return (
        <HomeSection
            label="Named ATAR results"
            className="bg-primary-deep"
            innerClassName="flex flex-col gap-8"
        >
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex max-w-[40rem] flex-col gap-2">
                    <p className="eyebrow inline-flex w-fit rounded-full bg-primary px-3 py-1 text-tertiary">
                        Named ATARs
                    </p>
                    <h2 className="h2 font-heading font-bold text-tertiary">
                        Outstanding ATAR results
                    </h2>
                    <p className="body text-gradient-primary">
                        Exceptional ATAR achievements from our dedicated
                        students.
                    </p>
                </div>
                <TextLink
                    to="/results"
                    className="body-sm shrink-0 font-heading font-semibold text-tertiary transition-colors hover:text-tertiary/80"
                >
                    See all results
                </TextLink>
            </div>

            <ResultList results={preview} mobileResults={mobilePreview} />
        </HomeSection>
    );
};

export default HomeResults;
