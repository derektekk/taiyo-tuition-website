import TextLink from "../TextLink";

/**
 * Heading row shared by the class-page blocks: title, one line, optional
 * link out to the canonical page. Same shape as HomeFaq / HomeResults.
 */
const SubjectSectionHeader = ({
    title,
    body,
    linkTo,
    linkLabel,
    tone = "light",
}) => {
    const dark = tone === "dark";

    return (
        <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex max-w-[40rem] flex-col gap-2">
                <h2
                    className={`h2 font-heading font-bold ${
                        dark ? "text-tertiary" : "text-black"
                    }`}
                >
                    {title}
                </h2>
                {body && (
                    <p
                        className={`body ${
                            dark ? "text-gradient-primary" : "text-black-primary"
                        }`}
                    >
                        {body}
                    </p>
                )}
            </div>
            {linkTo && (
                <TextLink
                    to={linkTo}
                    className={`body-sm shrink-0 font-heading font-semibold transition-colors ${
                        dark
                            ? "text-tertiary hover:text-tertiary/80"
                            : "text-primary hover:text-primary/80"
                    }`}
                >
                    {linkLabel}
                </TextLink>
            )}
        </div>
    );
};

export default SubjectSectionHeader;
