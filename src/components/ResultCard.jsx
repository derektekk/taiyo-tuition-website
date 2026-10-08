const ResultCard = ({ result, layout = "row" }) => {
    if (layout === "poster") {
        return (
            <article className="flex aspect-[4/3] h-full flex-col justify-between rounded-xl bg-biege-primary p-5">
                <div className="flex min-w-0 flex-col gap-1">
                    <p className="body-lg text-black">{result.name}</p>
                    <p className="eyebrow text-dust">{result.school}</p>
                </div>
                <p className="h2 font-heading font-bold text-primary">
                    {result.score}
                </p>
            </article>
        );
    }

    return (
        <article className="flex items-center justify-between gap-6 rounded-xl bg-biege-primary px-5 py-4">
            <div className="flex min-w-0 flex-col gap-1">
                <p className="body-lg truncate text-black">{result.name}</p>
                <p className="eyebrow text-dust">{result.school}</p>
            </div>
            <p className="h3 shrink-0 font-heading font-bold text-primary">
                {result.score}
            </p>
        </article>
    );
};

export default ResultCard;
