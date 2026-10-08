import { atarResults } from "../data/atarResults";
import ResultList from "../components/ResultList";
import HomeClose from "../components/home/HomeClose";
import HomeSection from "../components/home/HomeSection";

const ResultsPage = () => {
    return (
        <main role="main">
            <title>Past ATAR Results | Taiyo Tuition</title>
            <meta
                name="description"
                content="Named ATAR results from Taiyo Tuition students across Melbourne schools, including 99+ scores from Scotch, Mac.Rob, MHS, Haileybury and more."
            />
            <link rel="canonical" href="https://taiyotuition.com/results" />

            <HomeSection
                as="header"
                label="All named ATAR results"
                className="bg-primary-deep mt-[80px]"
                innerClassName="flex flex-col gap-8"
            >
                <div className="flex max-w-[40rem] flex-col gap-2">
                    <p className="eyebrow inline-flex w-fit rounded-full bg-primary px-3 py-1 text-tertiary">
                        Named ATARs
                    </p>
                    <h1 className="h2 font-heading font-bold text-tertiary">
                        Past ATAR results
                    </h1>
                    <p className="body text-gradient-primary">
                        Every named ATAR published by our students. Scores and
                        names match the list we share. Nothing added.
                    </p>
                </div>

                <ResultList results={atarResults} />
            </HomeSection>

            <HomeClose />
        </main>
    );
};

export default ResultsPage;
