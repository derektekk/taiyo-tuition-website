import React from "react";

const EMPHASIS_CLASSES = {
    strong: "font-semibold",
    key: "font-semibold underline decoration-primary",
    underline: "font-semibold underline",
};

const Runs = ({ runs }) =>
    runs.map((run, index) =>
        typeof run === "string" ? (
            <React.Fragment key={index}>{run}</React.Fragment>
        ) : (
            <span key={index} className={EMPHASIS_CLASSES[run.emphasis]}>
                {run.text}
            </span>
        )
    );

/** Renders a single runs array inline, without a wrapping paragraph. */
export const SubjectRuns = ({ runs }) => <Runs runs={runs} />;

/** Renders an array of paragraphs, each of which is a runs array. */
const SubjectCopy = ({ paragraphs, className = "" }) => (
    <div className={className}>
        {paragraphs.map((paragraph, index) => (
            <p
                key={index}
                className={index < paragraphs.length - 1 ? "mb-3" : ""}
            >
                <Runs runs={paragraph} />
            </p>
        ))}
    </div>
);

export default SubjectCopy;
