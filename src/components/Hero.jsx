import React from "react";
import ScrollAnimateText from "./ScrollAnimateText";
import AnimatedButton from "./AnimatedButton";
import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";

// todo: edit hero section responsiveness and change carousel item sizing

const Hero = () => {
    return (
        <main className="overflow-hidden">
            <section className="flex items-center justify-center h-[60vh] bg-linear-180 to-gradient-secondary from-gradient-primary mt-[80px] max-md:h-full w-full ">
                <div className="flex flex-row items-center justify-center z-10 gap-6 max-md:flex-col  mx-auto px-6 container-responsive overflow-hidden">
                    <div className="flex flex-col">
                        <ScrollAnimateText
                            as="h1"
                            className="text-4xl mb-4 z-50 max-md:hidden"
                        >
                            <span className="font-bold bg-linear-180 from-primary to-blue-500 bg-clip-text text-transparent relative">
                                <span className="absolute top-[4px] left-[1px] text-shadow-md text-shadow-gradient-secondary opacity-40 -z-20">
                                    PRIVATE
                                </span>
                                PRIVATE
                            </span>{" "}
                            GROUP AND{" "}
                            <span className="font-bold bg-linear-180 from-primary to-blue-500 bg-clip-text text-transparent relative">
                                <span className="absolute top-[4px] left-[1px] text-shadow-md text-shadow-gradient-secondary opacity-40 -z-20">
                                    ONLINE
                                </span>
                                ONLINE
                            </span>{" "}
                            TUTORING
                        </ScrollAnimateText>
                        <div className="bg-white p-6 rounded-lg z-50 shadow-md max-md:mt-6 ">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl mb-4 z-50 md:hidden max-sm:text-3xl"
                            >
                                <span className="font-bold bg-linear-180 from-primary to-blue-500 bg-clip-text text-transparent relative">
                                    <span className="absolute top-[4px] left-[1px] text-shadow-md text-shadow-primary opacity-40 -z-20">
                                        PRIVATE
                                    </span>
                                    PRIVATE
                                </span>{" "}
                                GROUP AND{" "}
                                <span className="font-bold bg-linear-180 from-primary to-blue-500 bg-clip-text text-transparent relative">
                                    <span className="absolute top-[4px] left-[1px] text-shadow-md text-shadow-primary opacity-40 -z-20">
                                        ONLINE
                                    </span>
                                    ONLINE
                                </span>{" "}
                                TUTORING
                            </ScrollAnimateText>
                            <div className="flex flex-row">
                                <ScrollAnimateText
                                    as="p"
                                    className="text-md mb-4"
                                >
                                    <span className="decoration-primary underline decoration-2">
                                        Inspiring a love for learning.
                                    </span>{" "}
                                    While delivering excellence in every
                                    subject. With a capacity of{" "}
                                    <span className="decoration-primary underline decoration-2">
                                        10 students per tutorial
                                    </span>{" "}
                                    , this is the most impactful private tuition
                                    in Melbourne.
                                </ScrollAnimateText>
                            </div>
                            <div className="flex flex-row">
                                <ScrollAnimateText
                                    as="div"
                                    className="text-md mb-4"
                                >
                                    <ul className="space-y-1">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            Helped over 1500+ Students
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            98+ Average ATAR of our Tutors
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            91% of 2024 Students scored 45+
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                            In-person and Online classes.
                                        </li>
                                    </ul>
                                </ScrollAnimateText>
                            </div>
                            <ScrollAnimateText>
                                <AnimatedButton text="Free Trial" />
                            </ScrollAnimateText>
                        </div>
                    </div>
                    <MobileCarousel />
                    <DesktopCarousel />
                </div>
            </section>
        </main>
    );
};

export default Hero;
