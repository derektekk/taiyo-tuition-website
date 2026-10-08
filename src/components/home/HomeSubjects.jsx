import HomeSection from "./HomeSection";
import SubjectsGrid from "../SubjectsGrid";

const HomeSubjects = () => {
    return (
        <HomeSection
            id="subjects"
            label="Our subjects"
            className="bg-primary-deep"
            innerClassName="flex flex-col gap-8 md:gap-10"
        >
            <SubjectsGrid headingAs="h2" heading="Our subjects" />
        </HomeSection>
    );
};

export default HomeSubjects;
