import { Clock, FolderOpen, KeyRound } from "lucide-react";
import portalStill from "../../assets/taiyoImages/portal-login.webp";
import { portal } from "../../data/portal";
import AnimatedButton from "../AnimatedButton";
import MediaImage from "../MediaImage";
import HomeSection from "./HomeSection";

/**
 * Only claims already made elsewhere on the site: same-night upload, files
 * stay up all year, access any time. Accounts come from Taiyo admin, so the
 * copy sends new families to the trial and existing ones to the login.
 */
const FACTS = [
    {
        icon: FolderOpen,
        title: "Up the same night",
        body: "Notes, homework, and worked solutions from class go on the portal that evening.",
    },
    {
        icon: Clock,
        title: "Open any time",
        body: "Last week's booklet is still there before a SAC. Files stay up for the whole year.",
    },
    {
        icon: KeyRound,
        title: "One login per student",
        body: "We set it up once your child enrols. Lost your password? Reset it from the login page.",
    },
];

const Fact = ({ icon: Icon, title, body }) => (
    <li className="flex items-start gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-tertiary text-primary ring-1 ring-black/6">
            <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div className="flex min-w-0 flex-col gap-1">
            <p className="body-lg font-heading font-semibold text-black">
                {title}
            </p>
            <p className="body-sm text-black-primary">{body}</p>
        </div>
    </li>
);

const HomePortal = () => (
    <HomeSection
        id="portal"
        label="Student portal"
        className="bg-mist-100"
        innerClassName="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-14"
    >
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <p className="eyebrow inline-flex w-fit rounded-full bg-primary px-3 py-1 text-tertiary">
                    Student portal
                </p>
                <h2 className="h2 font-heading font-bold text-black text-balance">
                    Everything from class, online that night.
                </h2>
                <p className="body max-w-[34rem] text-black-primary">
                    The paper copy goes home in the bag. The same file goes on
                    the portal, so a lost handout or a forgotten booklet is a
                    login away, from any device.
                </p>
            </div>

            <ul className="flex flex-col gap-5">
                {FACTS.map((fact) => (
                    <Fact key={fact.title} {...fact} />
                ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
                <AnimatedButton href={portal.url} text={portal.label} />
                <p className="body-sm text-black-primary">
                    Not enrolled yet? Book a free trial and we set the login
                    up from there.
                </p>
            </div>
        </div>

        <a
            href={portal.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Taiyo student portal"
            className="group block overflow-hidden rounded-2xl bg-tertiary p-2 shadow-[0_24px_60px_-28px_rgba(20,40,90,0.45)] ring-1 ring-black/8 transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 hover:shadow-[0_32px_70px_-28px_rgba(20,40,90,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
            <MediaImage
                src={portalStill}
                alt="The Taiyo Tuition student portal sign-in page"
                className="aspect-[16/9] w-full rounded-xl"
                imgClassName="object-cover object-top"
            />
        </a>
    </HomeSection>
);

export default HomePortal;
