import { useEffect, useState } from "react";

/**
 * Segmented progress marks. Only the current mark fills; the fill is the
 * remaining time on that slide. Previous marks stay empty.
 */
const ProgressMarks = ({
    items,
    index,
    onSelect,
    onCycle,
    labelFor,
    tone = "light",
    duration = "5s",
    columns,
}) => {
    const [tabHidden, setTabHidden] = useState(false);
    const dark = tone === "dark";
    const count = columns ?? items.length;

    useEffect(() => {
        const sync = () => setTabHidden(document.hidden);
        sync();
        document.addEventListener("visibilitychange", sync);
        return () => document.removeEventListener("visibilitychange", sync);
    }, []);

    return (
        <div
            className="grid gap-2"
            style={{
                gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
            }}
            role="group"
            aria-label="Slides"
        >
            {items.map((item, i) => {
                const isActive = i === index;
                return (
                    <button
                        key={item.title ?? item.name ?? i}
                        type="button"
                        onClick={() => onSelect(i)}
                        aria-label={labelFor(item, i)}
                        aria-pressed={isActive}
                        className={`h-4 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                            dark
                                ? "focus-visible:outline-tertiary"
                                : "focus-visible:outline-primary"
                        }`}
                    >
                        <span
                            className={`relative block h-0.5 w-full overflow-hidden ${
                                dark ? "bg-tertiary/20" : "bg-primary/20"
                            }`}
                        >
                            <span
                                key={isActive ? `active-${index}` : `idle-${i}`}
                                className={`absolute inset-0 origin-left ${
                                    dark ? "bg-tertiary" : "bg-primary"
                                } ${
                                    isActive
                                        ? `motion-safe:animate-social-progress motion-reduce:scale-x-100 group-hover/marks:motion-safe:paused ${
                                              tabHidden ? "paused" : ""
                                          }`
                                        : "scale-x-0"
                                }`}
                                style={
                                    isActive
                                        ? { animationDuration: duration }
                                        : undefined
                                }
                                onAnimationEnd={(event) => {
                                    if (
                                        isActive &&
                                        event.animationName ===
                                            "social-progress"
                                    ) {
                                        onCycle();
                                    }
                                }}
                            />
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default ProgressMarks;
