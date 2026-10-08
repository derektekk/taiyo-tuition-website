import MediaImage from "./MediaImage";

const frameStyle = (crop) => ({
    objectPosition: `${crop.x}% ${crop.y}%`,
    transform: crop.scale === 1 ? undefined : `scale(${crop.scale})`,
    transformOrigin: `${crop.x}% ${crop.y}%`,
});

const TutorHeadshot = ({ tutor }) => (
    <MediaImage
        src={tutor.image}
        alt={`${tutor.name}, ${tutor.role} at Taiyo Tuition`}
        className="aspect-square w-full"
        imgClassName="object-cover"
        style={frameStyle(tutor.crop)}
    />
);

export default TutorHeadshot;
