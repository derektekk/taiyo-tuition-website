import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/taiyo-logo.png";
import instagramLogo from "../assets/instagram.webp";
import linkedinLogo from "../assets/linkedin-logo.webp";
import facebookLogo from "../assets/facebook.webp";
import tiktokLogo from "../assets/tiktok.svg";
import { navItems } from "../data/nav";
import { location } from "../data/location";
import OpeningHours from "./OpeningHours";

const socials = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/taiyo_tuition/",
        icon: instagramLogo,
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@taiyo_tuition",
        icon: tiktokLogo,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/taiyo-tuition/",
        icon: linkedinLogo,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61569894218115",
        icon: facebookLogo,
    },
];

const aboutMenu = navItems.find((item) => item.id === "about");

const columns = [
    {
        heading: "Explore",
        links: [
            { title: "Home", href: "/" },
            ...navItems.map((item) => ({
                title: item.label,
                href: item.href,
                external: item.external,
            })),
            { title: "Book a free trial", href: "/enroll" },
            { title: "Contact", href: "/contact" },
        ],
    },
    {
        heading: "About",
        links: aboutMenu.columns.flatMap((column) => column.links),
    },
];

const linkClass =
    "body-sm text-white/65 transition-colors duration-300 hover:text-white";

const FooterColumn = ({ heading, links }) => (
    <div className="flex flex-col gap-3">
        <h3 className="eyebrow text-white/40">{heading}</h3>
        <ul className="flex flex-col gap-2">
            {links.map((link) => (
                <li key={link.href + link.title}>
                    {link.external ? (
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass}
                        >
                            {link.title}
                        </a>
                    ) : (
                        <Link to={link.href} className={linkClass}>
                            {link.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    const panelRef = useRef(null);
    const [height, setHeight] = useState(560);
    const [viewportHeight, setViewportHeight] = useState(() =>
        typeof window === "undefined" ? Infinity : window.innerHeight,
    );

    // The footer is fixed to the viewport bottom and revealed by a clipped
    // spacer as the page scrolls out. The spacer has to match the real
    // footer height. When the footer is taller than the viewport (phones)
    // the reveal would hide its top rows, so it falls back to normal flow.
    useEffect(() => {
        const panel = panelRef.current;
        if (!panel) return undefined;
        const observer = new ResizeObserver(([entry]) => {
            setHeight(entry.contentRect.height);
        });
        observer.observe(panel);

        const onResize = () => setViewportHeight(window.innerHeight);
        window.addEventListener("resize", onResize);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", onResize);
        };
    }, []);

    const pinned = height < viewportHeight;

    return (
        <div
            className="relative"
            style={
                pinned
                    ? {
                          height,
                          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
                      }
                    : undefined
            }
        >
            <footer
                ref={panelRef}
                className={`left-0 w-full overflow-hidden bg-[#1c1c1c] text-white ${
                    pinned ? "fixed bottom-0" : "relative"
                }`}
            >
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                >
                    <div className="absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-3xl" />
                    <div className="absolute -bottom-48 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-gradient-secondary/15 blur-3xl" />
                    <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
                </div>

                <div className="padding-global relative z-10">
                    <div className="container-large flex flex-col gap-12 py-12 md:gap-14 md:py-16">
                        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-8">
                            <div className="flex flex-col gap-5">
                                <Link
                                    to="/"
                                    className="flex w-fit items-center gap-3"
                                >
                                    <img
                                        src={logo}
                                        alt=""
                                        width={208}
                                        height={150}
                                        className="h-10 w-auto"
                                    />
                                    <span className="h4 font-heading uppercase">
                                        Taiyo Tuition
                                    </span>
                                </Link>
                                <p className="body-sm max-w-[22rem] text-white/65">
                                    Small-group tutoring for Year 5 to VCE and
                                    Selective. Classes capped at ten.
                                </p>
                                <ul className="flex items-center gap-3">
                                    {socials.map((social) => (
                                        <li key={social.label}>
                                            <a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                className="flex size-10 items-center justify-center rounded-full bg-white/8 transition-colors duration-300 hover:bg-white/16"
                                            >
                                                <img
                                                    src={social.icon}
                                                    alt=""
                                                    className="size-5 brightness-0 invert"
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {columns.map((column) => (
                                <FooterColumn key={column.heading} {...column} />
                            ))}

                            <div className="flex flex-col gap-3">
                                <h3 className="eyebrow text-white/40">
                                    Contact
                                </h3>
                                <address className="flex flex-col gap-2 not-italic">
                                    <a
                                        href={`mailto:${location.email}`}
                                        className={linkClass}
                                    >
                                        {location.email}
                                    </a>
                                    <a
                                        href={location.phoneHref}
                                        className={linkClass}
                                    >
                                        {location.phone}
                                    </a>
                                    <a
                                        href={location.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={linkClass}
                                    >
                                        {location.address}
                                    </a>
                                </address>
                                <OpeningHours className="body-sm mt-1 text-white/65" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="caption text-white/45">
                                © 2026 Taiyo Tuition. All rights reserved.
                            </p>
                            <ul className="flex items-center gap-5">
                                <li>
                                    <Link
                                        to="/privacy"
                                        className="caption text-white/45 transition-colors duration-300 hover:text-white"
                                    >
                                        Privacy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/legal"
                                        className="caption text-white/45 transition-colors duration-300 hover:text-white"
                                    >
                                        Legal
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
