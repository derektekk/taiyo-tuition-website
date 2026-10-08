import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo({ top: 0, left: 0 });
            return undefined;
        }

        const id = hash.slice(1);
        const scrollToHash = () => {
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView();
                return true;
            }
            return false;
        };

        if (scrollToHash()) return undefined;

        const timeoutId = window.setTimeout(scrollToHash, 80);
        return () => window.clearTimeout(timeoutId);
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
