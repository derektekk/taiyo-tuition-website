import { useLocation } from "react-router-dom";

const PageFade = ({ ready = true, children }) => {
    const { pathname } = useLocation();

    return (
        <div
            key={pathname}
            className={`page-fade${ready ? " is-ready" : ""}`}
            aria-hidden={ready ? undefined : true}
            inert={ready ? undefined : true}
        >
            {children}
        </div>
    );
};

export default PageFade;
