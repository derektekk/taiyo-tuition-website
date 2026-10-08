import { location } from "../data/location";

const OpeningHours = ({ className = "" }) => {
    return (
        <dl className={`flex flex-col gap-1 ${className}`.trim()}>
            {location.hours.map((row) => (
                <div
                    key={row.days}
                    className="grid grid-cols-[7.5rem_auto] gap-x-4"
                >
                    <dt>{row.days}</dt>
                    <dd className="tabular-nums">{row.time}</dd>
                </div>
            ))}
        </dl>
    );
};

export default OpeningHours;
