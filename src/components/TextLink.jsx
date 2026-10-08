import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TextLink = ({
    to,
    children,
    className = "",
    arrow = "right",
}) => {
    const Arrow = arrow === "left" ? ArrowLeft : ArrowRight;
    const hoverShift =
        arrow === "left"
            ? "group-hover:-translate-x-0.5"
            : "group-hover:translate-x-0.5";

    return (
        <Link
            to={to}
            className={`group inline-flex items-center gap-1.5 ${className}`}
        >
            {arrow === "left" && (
                <Arrow
                    className={`size-3.5 shrink-0 transition-transform duration-200 ${hoverShift}`}
                    strokeWidth={2}
                    aria-hidden="true"
                />
            )}
            {children}
            {arrow === "right" && (
                <Arrow
                    className={`size-3.5 shrink-0 transition-transform duration-200 ${hoverShift}`}
                    strokeWidth={2}
                    aria-hidden="true"
                />
            )}
        </Link>
    );
};

export default TextLink;
