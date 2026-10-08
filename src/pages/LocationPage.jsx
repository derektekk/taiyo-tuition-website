import classPhoto from "../assets/taiyoImages/classPhotos2026/2026-class-photo-6.webp";
import classroomImg from "../assets/taiyoImages/taiyoClassroom.webp";
import receptionImg from "../assets/taiyoImages/entrance.webp";
import HomeClose from "../components/home/HomeClose";
import HomeSection from "../components/home/HomeSection";
import MediaImage from "../components/MediaImage";
import OpeningHours from "../components/OpeningHours";
import PageDoc from "../components/PageDoc";
import { location } from "../data/location";

const stillClass =
    "relative min-h-[220px] overflow-hidden rounded-2xl md:min-h-[280px]";

const LocationFact = ({ title, children }) => (
    <div className="flex flex-col gap-2">
        <h3 className="h5 font-heading font-semibold text-black">{title}</h3>
        {children}
    </div>
);

const LocationPage = () => {
    return (
        <main role="main">
            <PageDoc path="/location" />

            <HomeSection
                as="header"
                label="Location"
                className="bg-tertiary mt-[80px]"
                innerClassName="flex flex-col gap-12 md:gap-16"
            >
                <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-14">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-1">
                            <p className="h2 font-heading font-bold text-black">
                                In-person tutoring
                            </p>
                            <h1 className="h1 font-heading font-bold text-black">
                                {location.suburb}
                            </h1>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h2 className="h4 font-heading font-semibold text-black">
                                Getting there
                            </h2>
                            <p className="body text-black-primary">
                                Hamilton Place is in the Mount Waverley shops, a
                                short walk from the station. Follow the path off
                                Miller Crescent. Every class runs here in person
                                and live online, with the same tutor and the
                                same notes.
                            </p>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2">
                            <LocationFact title="Address">
                                <a
                                    href={location.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="body text-primary transition-colors hover:text-primary/80"
                                >
                                    {location.street}
                                    <br />
                                    {location.addressLine}
                                </a>
                            </LocationFact>

                            <LocationFact title="Hours">
                                <OpeningHours className="body text-black-primary" />
                            </LocationFact>

                            <LocationFact title="Contact">
                                <a
                                    href={location.phoneHref}
                                    className="body text-primary transition-colors hover:text-primary/80"
                                >
                                    {location.phone}
                                </a>
                                <a
                                    href={`mailto:${location.email}`}
                                    className="body text-primary transition-colors hover:text-primary/80"
                                >
                                    {location.email}
                                </a>
                            </LocationFact>
                        </div>
                    </div>

                    <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-gradient-primary md:min-h-[32rem]">
                        <iframe
                            title="Google Map of Taiyo Tuition at 9-11 Hamilton Place, Mount Waverley"
                            src={location.embedUrl}
                            className="absolute inset-0 h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h2 className="h4 font-heading font-semibold text-black">
                        Inside the centre
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
                        <div
                            className={`${stillClass} bg-gradient-primary md:row-span-2 md:min-h-full`}
                        >
                            <MediaImage
                                src={classroomImg}
                                alt="A class at the Mount Waverley centre"
                                className="absolute inset-0"
                                imgClassName="object-cover"
                            />
                        </div>
                        <div className={`${stillClass} bg-gradient-primary`}>
                            <MediaImage
                                src={receptionImg}
                                alt="Reception at Taiyo Tuition in Mount Waverley"
                                className="absolute inset-0"
                                imgClassName="object-cover"
                            />
                        </div>
                        <div className={`${stillClass} bg-gradient-primary`}>
                            <MediaImage
                                src={classPhoto}
                                alt="A tutor working with students in class"
                                className="absolute inset-0"
                                imgClassName="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </HomeSection>

            <HomeClose />
        </main>
    );
};

export default LocationPage;
