import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/taiyo-logo.png";
import instagram from "../assets/instagram.webp";
import linkedin from "../assets/linkedin-logo.webp";
import facebook from "../assets/facebook.webp";
import tiktok from "../assets/tiktok.svg";
import { navItems } from "../data/nav";
import AnimatedButton from "./AnimatedButton";
import MediaImage from "./MediaImage";

const EASE = [0.16, 1, 0.3, 1];

// Nav surface candidates from the revision brief, kept so the look can be
// flipped in one line. "muted" shipped: full width, cool grey (#e1e7f2)
// shared with the dropdown panels and the mobile menu. Dark enough that the
// pale blues in the torii logo stand off it, light enough that it reads as a
// surface on the hero without becoming a colour band.
// `scrolled` is passed so "scroll" can start transparent and gain a surface.
const NAV_SURFACES = {
    muted: () =>
        "border-b border-black/8 bg-[#e1e7f2]/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md",
    white: () =>
        "border-b border-white/40 bg-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-md",
    cream: () =>
        "border-b border-black/6 bg-[#f4f1ea]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-md",
    blue: () =>
        "border-b border-white/60 bg-blue-primary/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-md",
    scroll: (scrolled) =>
        scrolled
            ? "border-b border-black/6 bg-white/85 shadow-[0_10px_30px_-22px_rgba(20,16,12,0.35)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
    pill: () => "border-b border-transparent bg-transparent",
};

const NAV_STYLE = "muted";

const isActivePath = (pathname, href, matches = []) => {
    if (
        matches.some(
            (path) => pathname === path || pathname.startsWith(`${path}/`),
        )
    ) {
        return true;
    }
    if (!href || href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
};

const HashLink = ({ to, className, onClick, children, ...props }) => {
    const location = useLocation();

    // Absolute URLs (the portal) leave the app, so they get a plain anchor
    // in a new tab instead of a router transition.
    if (/^https?:\/\//.test(to)) {
        return (
            <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                onClick={onClick}
                {...props}
            >
                {children}
            </a>
        );
    }

    const handleClick = (event) => {
        onClick?.(event);
        const hashIndex = to.indexOf("#");
        if (hashIndex === -1) return;

        const path = to.slice(0, hashIndex) || "/";
        const id = to.slice(hashIndex + 1);
        if (location.pathname !== path) return;

        event.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Link to={to} className={className} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
};

// The feature panel shows the hovered row's image, falling back to the
// menu's default feature. Image and caption crossfade independently so a
// fast sweep across rows never flashes an empty panel.
const MenuFeature = ({ feature, onNavigate }) => (
    <HashLink
        to={feature.href}
        onClick={onNavigate}
        className="group/feature relative block min-h-[180px] overflow-hidden rounded-2xl bg-[#f4f1ea]"
    >
        <AnimatePresence initial={false}>
            <motion.div
                key={feature.image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="absolute inset-0 motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover/feature:scale-[1.03]"
            >
                <MediaImage
                    src={feature.image}
                    alt={feature.alt ?? ""}
                    className="absolute inset-0"
                    imgClassName="object-cover"
                />
            </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-10">
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: EASE }}
                >
                    <p className="text-[15px] font-semibold text-white">
                        {feature.title}
                    </p>
                    <p className="mt-0.5 text-[13px] text-white/75">
                        {feature.description}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    </HashLink>
);

const MenuLinks = ({ links, onNavigate, onHover }) => (
    <ul className="flex flex-col gap-1">
        {links.map((link) => (
            <li key={link.href + link.title}>
                <HashLink
                    to={link.href}
                    onClick={onNavigate}
                    onMouseEnter={() => onHover?.(link)}
                    onFocus={() => onHover?.(link)}
                    className="group/row block rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-primary/10 focus-visible:bg-primary/10 focus-visible:outline-none"
                >
                    <span className="block text-[15px] font-semibold text-[#1c1c1c] transition-colors duration-200 group-hover/row:text-primary-deep">
                        {link.title}
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-black-primary">
                        {link.description}
                    </span>
                </HashLink>
            </li>
        ))}
    </ul>
);

const DropdownPanel = ({ item, onNavigate }) => {
    const isMega = item.type === "mega";
    const [hovered, setHovered] = useState(null);
    const feature = hovered?.image
        ? {
              title: hovered.title,
              description: hovered.description,
              href: hovered.href,
              image: hovered.image,
              alt: "",
          }
        : item.feature;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.985 }}
            transition={{ duration: 0.22, ease: EASE }}
            className={`overflow-hidden rounded-[28px] border border-black/8 bg-[#e1e7f2] shadow-[0_24px_60px_-20px_rgba(20,16,12,0.3),inset_0_1px_0_rgba(255,255,255,0.9)] ${
                isMega
                    ? "w-[min(52rem,calc(100vw-3rem))]"
                    : "w-[min(36rem,calc(100vw-3rem))]"
            }`}
        >
            <div
                className={`grid gap-6 p-5 md:p-6 ${
                    isMega
                        ? "md:grid-cols-[1fr_1fr_0.9fr]"
                        : "md:grid-cols-[1fr_0.95fr]"
                }`}
                onMouseLeave={() => setHovered(null)}
            >
                {isMega ? (
                    item.columns.map((column) => (
                        <div key={column.heading}>
                            <p className="mb-3 px-3 text-2xl font-semibold tracking-tight text-black">
                                {column.heading}
                            </p>
                            <MenuLinks
                                links={column.links}
                                onNavigate={onNavigate}
                                onHover={setHovered}
                            />
                        </div>
                    ))
                ) : (
                    <MenuLinks
                        links={item.links}
                        onNavigate={onNavigate}
                        onHover={setHovered}
                    />
                )}
                <MenuFeature feature={feature} onNavigate={onNavigate} />
            </div>
        </motion.div>
    );
};

const DesktopItem = ({ item, isOpen, onOpen, onNavigate, pathname }) => {
    const hasMenu = item.type !== "link";
    const active = isActivePath(pathname, item.href, item.activeMatch);

    return (
        <HashLink
            to={item.href}
            onClick={onNavigate}
            onMouseEnter={() => onOpen(hasMenu ? item.id : null)}
            onFocus={() => onOpen(hasMenu ? item.id : null)}
            aria-expanded={hasMenu ? isOpen : undefined}
            aria-haspopup={hasMenu ? "true" : undefined}
            className={`inline-flex items-center rounded-full px-4 py-2 text-[15px] font-medium transition-[background-color,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen || active
                    ? "bg-primary text-white"
                    : "text-[#2a2a2a] hover:bg-primary hover:text-white"
            }`}
        >
            {item.label}
        </HashLink>
    );
};

const MobileAccordion = ({ item, onNavigate }) => {
    const panelId = useId();
    const [open, setOpen] = useState(false);
    const links =
        item.type === "mega"
            ? item.columns.flatMap((column) => column.links)
            : item.links;

    if (item.type === "link") {
        return (
            <HashLink
                to={item.href}
                onClick={onNavigate}
                className="block border-b border-black/8 px-6 py-5 text-left text-lg font-medium"
            >
                {item.label}
            </HashLink>
        );
    }

    return (
        <div className="border-b border-black/8">
            <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((current) => !current)}
                className="flex w-full items-center justify-between px-6 py-5 text-lg font-medium"
            >
                {item.label}
                <span
                    aria-hidden="true"
                    className={`text-2xl leading-none transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        open ? "rotate-45" : ""
                    }`}
                >
                    +
                </span>
            </button>
            <div
                id={panelId}
                className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 px-6 pb-5">
                        <HashLink
                            to={item.href}
                            onClick={onNavigate}
                            className="rounded-xl px-3 py-2 text-left font-semibold text-[#1c1c1c]"
                        >
                            View all
                        </HashLink>
                        {links.map((link) => (
                            <HashLink
                                key={link.href + link.title}
                                to={link.href}
                                onClick={onNavigate}
                                className="rounded-xl px-3 py-2 text-left"
                            >
                                <span className="block font-medium">
                                    {link.title}
                                </span>
                                <span className="block text-sm text-black-primary">
                                    {link.description}
                                </span>
                            </HashLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openId, setOpenId] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const closeTimer = useRef(null);
    const location = useLocation();
    const openItem = navItems.find(
        (item) => item.id === openId && item.type !== "link",
    );

    const openMenu = (id) => {
        window.clearTimeout(closeTimer.current);
        setOpenId(id);
    };

    const scheduleClose = () => {
        window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(() => setOpenId(null), 140);
    };

    const closeDesktop = () => {
        window.clearTimeout(closeTimer.current);
        setOpenId(null);
    };

    const closeMobile = () => setIsMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        closeMobile();
        closeDesktop();
    }, [location]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                closeDesktop();
                closeMobile();
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isPill = NAV_STYLE === "pill";
    const surfaceClass = NAV_SURFACES[NAV_STYLE](scrolled);

    return (
        <>
            <nav
                className={`fixed top-0 right-0 left-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${surfaceClass}`}
            >
                <div
                    className={
                        isPill ? "padding-global pt-3" : "padding-global"
                    }
                >
                    <div
                        className={`container-large flex items-center justify-between gap-3 xl:grid xl:grid-cols-[1fr_auto_1fr] ${
                            isPill
                                ? "h-[4.25rem] rounded-full border border-black/6 bg-white/85 px-3 shadow-[0_12px_30px_-20px_rgba(20,16,12,0.4),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md sm:px-6"
                                : "h-20"
                        }`}
                    >
                        <Link
                            to="/"
                            className="flex min-w-0 items-center gap-3 justify-self-start max-[359px]:gap-2"
                        >
                            <img
                                src={logo}
                                alt=""
                                width={208}
                                height={150}
                                className="h-10 w-auto shrink-0 max-[359px]:h-7"
                            />
                            <span className="h3 whitespace-nowrap text-[#1b1b1b] uppercase min-[360px]:max-sm:[font-size:var(--h5-size)] max-[359px]:[font-size:var(--body-size)]">
                                Taiyo Tuition
                            </span>
                        </Link>

                        <div
                            className="relative hidden h-full items-center lg:flex"
                            onMouseLeave={scheduleClose}
                        >
                            <ul className="flex items-center gap-1">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <DesktopItem
                                            item={item}
                                            isOpen={openId === item.id}
                                            onOpen={openMenu}
                                            onNavigate={closeDesktop}
                                            pathname={location.pathname}
                                        />
                                    </li>
                                ))}
                            </ul>
                            <AnimatePresence>
                                {openItem && (
                                    <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-5">
                                        <DropdownPanel
                                            item={openItem}
                                            onNavigate={closeDesktop}
                                        />
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex shrink-0 items-stretch justify-self-end gap-2 max-[359px]:gap-1.5 sm:gap-3">
                            <AnimatedButton
                                text="Book a free trial"
                                className="whitespace-nowrap min-[360px]:max-sm:px-3 max-sm:py-2 max-sm:[font-size:var(--body-sm-size)] max-[359px]:px-2.5"
                            >
                                <span className="sm:hidden">Free trial</span>
                                <span className="max-sm:hidden">
                                    Book a free trial
                                </span>
                            </AnimatedButton>

                            <button
                                type="button"
                                className="relative z-50 flex w-9 shrink-0 items-center justify-center rounded-xl sm:w-[2.825rem] bg-white/80 ring-1 ring-black/8 transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
                                onClick={() => setIsMenuOpen((open) => !open)}
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <span
                                    aria-hidden="true"
                                    className="relative block h-3.5 w-5"
                                >
                                    <span
                                        className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-[#1c1c1c] transition-[translate,rotate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                            isMenuOpen
                                                ? "translate-y-1.5 rotate-45"
                                                : ""
                                        }`}
                                    />
                                    <span
                                        className={`absolute inset-x-0 top-1.5 h-0.5 rounded-full bg-[#1c1c1c] transition-opacity duration-200 ${
                                            isMenuOpen ? "opacity-0" : ""
                                        }`}
                                    />
                                    <span
                                        className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#1c1c1c] transition-[translate,rotate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                            isMenuOpen
                                                ? "-translate-y-1.5 -rotate-45"
                                                : ""
                                        }`}
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                id="mobile-menu"
                aria-hidden={!isMenuOpen}
                inert={!isMenuOpen || undefined}
                className={`fixed inset-0 z-40 overflow-y-auto bg-[#e1e7f2]/96 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
                    isMenuOpen
                        ? "translate-y-0"
                        : "pointer-events-none -translate-y-full"
                }`}
            >
                <div className="flex min-h-full flex-col pt-20">
                    {navItems.map((item) => (
                        <MobileAccordion
                            key={item.id}
                            item={item}
                            onNavigate={closeMobile}
                        />
                    ))}
                    <div className="flex items-center justify-center gap-3 p-6">
                        <a
                            href="https://www.instagram.com/taiyo_tuition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={instagram}
                                alt="Instagram"
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/@taiyo_tuition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={tiktok}
                                alt="TikTok"
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/taiyo-tuition/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={linkedin}
                                alt="LinkedIn"
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61569894218115"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={facebook}
                                alt="Facebook"
                                className="h-6 w-6"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
