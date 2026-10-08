import locationImg from "../../assets/WebsiteMapGFX.webp";
import { location } from "../../data/location";
import MediaImage from "../MediaImage";
import OpeningHours from "../OpeningHours";
import TextLink from "../TextLink";
import HomeSection from "./HomeSection";

const HomePlace = () => {
    return (
        <HomeSection
            id="place"
            label="Location"
            className="bg-tertiary"
            innerClassName="grid items-center gap-10 md:grid-cols-2 md:gap-14"
        >
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <h2 className="h2 font-heading font-bold text-black">
                        Our Mount Waverley campus
                    </h2>
                    <a
                        href={location.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="body-lg font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                        {location.address}
                    </a>
                    <p className="body max-w-[36rem] text-black-primary">
                        In-person classes here, and the same live format online.
                        A short walk from Mount Waverley station.
                    </p>
                </div>

                <div>
                    <p className="body-sm font-heading font-semibold text-black">
                        Hours
                    </p>
                    <OpeningHours className="body-sm mt-1.5 text-black-primary" />
                </div>

                <TextLink
                    to="/location"
                    className="body-sm font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                >
                    Find us
                </TextLink>
            </div>

            <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-biege-primary md:min-h-[420px]">
                <MediaImage
                    src={locationImg}
                    alt="Walking map from Mount Waverley station to Taiyo Tuition on Hamilton Place"
                    className="absolute inset-0"
                    imgClassName="object-contain p-4 md:p-6"
                />
            </div>
        </HomeSection>
    );
};

export default HomePlace;
