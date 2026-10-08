import HomeHero from "../components/home/HomeHero";
import HomeProof from "../components/home/HomeProof";
import HomeResults from "../components/home/HomeResults";
import HomeStory from "../components/home/HomeStory";
import HomeSubjects from "../components/home/HomeSubjects";
import HomeSocial from "../components/home/HomeSocial";
import HomePortal from "../components/home/HomePortal";
import HomePlace from "../components/home/HomePlace";
import HomeEnrol from "../components/home/HomeEnrol";
import HomeClose from "../components/home/HomeClose";

const HomePage = () => {
    return (
        <main role="main">
            <HomeHero />
            <HomeProof />
            <HomeResults />
            <HomeSocial />
            <HomeStory />
            <HomeSubjects />
            <HomePortal />
            <HomePlace />
            <HomeEnrol />
            <HomeClose />
        </main>
    );
};

export default HomePage;
