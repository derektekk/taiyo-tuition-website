import Reveal from "../Reveal";

const PAD = {
    none: "",
    small: "padding-section-small",
    medium: "padding-section-medium",
    large: "padding-section-large",
    hero: "padding-section-large is-hero",
};

const CONTAINER = {
    none: "",
    small: "container-small",
    medium: "container-medium",
    large: "container-large",
};

const HomeSection = ({
    as: Tag = "section",
    label,
    id,
    className = "",
    innerClassName = "",
    pad = "large",
    container = "large",
    reveal = true,
    backdrop = null,
    children,
}) => {
    const padClass = PAD[pad] ?? PAD.large;
    const containerClass = CONTAINER[container] ?? CONTAINER.large;
    // Reveal wraps the padding layer, not the section, so the background band
    // stays fixed and only the content lifts in.
    const Inner = reveal ? Reveal : "div";

    return (
        <Tag
            id={id}
            aria-label={label}
            className={`${id ? "scroll-mt-20" : ""} ${className}`.trim()}
        >
            {backdrop}
            <Inner className={`padding-global ${padClass}`.trim()}>
                <div className={`${containerClass} ${innerClassName}`.trim()}>
                    {children}
                </div>
            </Inner>
        </Tag>
    );
};

export default HomeSection;
