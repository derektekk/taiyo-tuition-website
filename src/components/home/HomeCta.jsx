import { Link } from "react-router-dom";

const HomeCta = ({
    text = "Book a free trial",
    to = "/enroll",
    className = "",
}) => {
    return (
        <Link
            to={to}
            className={`body-lg inline-flex items-center justify-center rounded-xl bg-primary px-[22px] py-3 font-heading font-semibold text-tertiary transition-colors duration-200 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
        >
            {text}
        </Link>
    );
};

export default HomeCta;
