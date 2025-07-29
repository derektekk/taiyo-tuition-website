import Hero from "../components/Hero";
import About from "../components/About";
import Atar from "../components/Atar";
import Aim from "../components/Aim";
import ScrollingText from "../components/ScrollingText";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import ClassInfo from "../components/ClassInfo";
import Location from "../components/Location";

const HomePage = () => {
    return (
        <main role="main">
            {/* Hero Section */}
            <section aria-label="Hero section with main tutoring information">
                <Hero />
            </section>

            {/* About Section */}
            <section aria-label="About Taiyo Tuition">
                <About />
            </section>

            {/* ATAR Information */}
            <section aria-label="ATAR score improvement information">
                <Atar />
            </section>

            {/* Mission and Aims */}
            <section aria-label="Our mission and aims">
                <Aim />
            </section>

            {/* Class Information */}
            <section aria-label="Our learning methods and class types">
                <ClassInfo />
            </section>

            {/* Student Reviews */}
            <section aria-label="Student reviews and testimonials">
                <Reviews />
            </section>

            {/* Scrolling Text */}
            <section aria-label="Key features and benefits">
                <ScrollingText />
            </section>

            {/* Location */}
            <section aria-label="Location">
                <Location />
            </section>

            {/* Frequently Asked Questions */}
            <section aria-label="Frequently asked questions">
                <FAQ />
            </section>
        </main>
    );
};

export default HomePage;
