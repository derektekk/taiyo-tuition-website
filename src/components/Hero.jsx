import React from "react";
import classPhoto1 from "../assets/taiyoImages/classPhotos/classPhoto1.jpg";
import classPhoto2 from "../assets/taiyoImages/classPhotos/classPhoto2.jpg";
import entrance from "../assets/taiyoImages/entrance.jpg";
import taiyoClassroom from "../assets/taiyoImages/taiyoClassroom.jpg";
import classPhoto5 from "../assets/taiyoImages/classPhotos/classPhoto5.jpg";
import classPhoto6 from "../assets/taiyoImages/classPhotos/classPhoto6.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import ScrollAnimateText from "./ScrollAnimateText";
import AnimatedButton from "./AnimatedButton";

const Hero = () => {
    const splideOptions = {
        type: "loop",
        direction: "ltr",
        height: "300px",
        perPage: 1,
        perMove: 1,
        gap: "0.5rem",
        clones: 3,
        autoScroll: {
            speed: 1.5,
        },
        arrows: false,
        pagination: false,
        drag: false,
        wheel: false,
        releaseWheel: false,
        mediaQuery: "min",
        breakpoints: {
            768: {
                direction: "ltr",
                height: "400px",
                perPage: 2,
                gap: "0.75rem",
                clones: 4,
                autoScroll: {
                    speed: 1,
                },
            },
            1024: {
                direction: "ttb",
                height: "60vh",
                perPage: 1,
                gap: "1rem",
                clones: 2,
                autoScroll: {
                    speed: 0.5,
                },
            },
        },
    };

    return (
        <main className="overflow-hidden">
            <section className="flex items-center justify-center min-h-[60vh] lg:h-[60vh] bg-linear-180 to-gradient-secondary from-gradient-primary mt-[80px]">
                <div className="flex flex-row items-center justify-center z-10 gap-6 max-md:flex-col max-w-[1280px] mx-auto px-6 py-20">
                    <div className="bg-white p-6 rounded-lg max-md:absolute max-md:m-auto z-50 max-md:mx-6 shadow-md">
                        <ScrollAnimateText as="h1" className="text-3xl mb-4">
                            🎓 PRIVATE GROUP AND ONLINE TUTORING
                        </ScrollAnimateText>
                        <ScrollAnimateText as="p" className="text-md mb-4">
                            🏆 Taiyo Tuition delivers exceptional results with
                            proven teaching methods. With a cap of 10 students
                            per tutorial, experience the most effective private
                            tuition in VIC.
                        </ScrollAnimateText>
                        <ScrollAnimateText as="p" className="text-md mb-4">
                            📚 Expert tutors from Australia's top 2% provide
                            personalized learning experiences tailored to your
                            unique academic goals and learning style.
                        </ScrollAnimateText>
                        <ScrollAnimateText>
                            <AnimatedButton text="Free Trial" />
                        </ScrollAnimateText>
                    </div>
                    <div className="w-full max-w-md lg:max-w-lg cursor-pointer overflow-hidden">
                        <Splide
                            key="responsive-carousel"
                            options={splideOptions}
                            extensions={{ AutoScroll }}
                            className="w-full"
                        >
                            <SplideSlide>
                                <div className="flex flex-row lg:grid lg:grid-cols-2 gap-2 lg:gap-4 my-4 min-h-full overflow-x-auto lg:overflow-visible">
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={classPhoto1}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            📖 Learn at Your Pace
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={classPhoto2}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            👩‍🏫 Expert Tutors Available
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={entrance}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            ✅ Exceptional Results
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={taiyoClassroom}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            💻 Online & In-Person
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={classPhoto5}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            🎯 Personalized Learning
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={classPhoto6}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            📈 ATAR Excellence Focus
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className="flex flex-row lg:grid lg:grid-cols-2 gap-2 lg:gap-4 my-4 min-h-full overflow-x-auto lg:overflow-visible">
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={classPhoto1}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            🚀 Fast Track Learning
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={classPhoto2}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            🎯 Targeted Support
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={classPhoto5}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            📊 Progress Tracking
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={classPhoto6}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            🏅 Academic Excellence
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={entrance}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            💡 Innovative Methods
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-32 h-32 lg:row-span-2 lg:w-full lg:h-full">
                                        <img
                                            src={taiyoClassroom}
                                            alt="hero"
                                            className="object-cover rounded-lg w-full h-full"
                                        />
                                    </div>
                                    <div className="flex-shrink-0 w-24 h-16 lg:row-span-1 lg:min-h-16 lg:w-full lg:h-auto bg-primary rounded-lg p-1 lg:p-4 flex items-center justify-center">
                                        <p className="text-white text-xs lg:text-sm text-center">
                                            🌟 Student Success
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;
