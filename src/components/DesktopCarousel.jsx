import React from "react";
import classPhoto1 from "../assets/taiyoImages/classPhotos/classPhoto1.jpg";
import classPhoto2 from "../assets/taiyoImages/classPhotos/classPhoto2.jpg";
import entrance from "../assets/taiyoImages/entrance.jpg";
import taiyoClassroom from "../assets/taiyoImages/taiyoClassroom.jpg";
import classPhoto5 from "../assets/taiyoImages/classPhotos/classPhoto5.jpg";
import classPhoto6 from "../assets/taiyoImages/classPhotos/classPhoto6.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "./DesktopCarousel.css";

const DesktopCarousel = () => {
    return (
        <div className="container cursor-pointer max-md:hidden ">
            <Splide
                key="desktop-carousel"
                options={{
                    type: "loop",
                    direction: "ttb",
                    height: "800px",
                    autoScroll: {
                        speed: -0.5,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                    },
                    arrows: false,
                    pagination: false,
                    drag: false,
                    wheel: false,
                    releaseWheel: false,
                    mediaQuery: "max",
                    breakpoints: {
                        768: {
                            destroy: true,
                        },
                    },
                }}
                extensions={{ AutoScroll }}
                className="w-full"
            >
                <SplideSlide>
                    <div className="grid grid-cols-2 gap-4 ">
                        <div className="row-span-2">
                            <img
                                src={classPhoto1}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                📖 Learn at Your Pace
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={classPhoto2}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                👩‍🏫 Expert Tutors Available
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={entrance}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                ✅ Exceptional Results
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={taiyoClassroom}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                💻 Online & In-Person
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={classPhoto5}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                🎯 Personalized Learning
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={classPhoto6}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                📈 ATAR Excellence Focus
                            </p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="row-span-2">
                            <img
                                src={classPhoto1}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                📖 Learn at Your Pace
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={classPhoto2}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                👩‍🏫 Expert Tutors Available
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={entrance}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                ✅ Exceptional Results
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={taiyoClassroom}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                💻 Online & In-Person
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={classPhoto5}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                🎯 Personalized Learning
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={classPhoto6}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                📈 ATAR Excellence Focus
                            </p>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="grid grid-cols-2 gap-4 my-4">
                        <div className="row-span-2">
                            <img
                                src={classPhoto1}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                📖 Learn at Your Pace
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={classPhoto2}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                👩‍🏫 Expert Tutors Available
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={entrance}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                ✅ Exceptional Results
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={taiyoClassroom}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                💻 Online & In-Person
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={classPhoto5}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                🎯 Personalized Learning
                            </p>
                        </div>
                        <div className="row-span-2">
                            <img
                                src={classPhoto6}
                                alt="hero"
                                className="object-cover rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="row-span-1 min-h-16 bg-primary rounded-lg p-4 flex items-center justify-center">
                            <p className="text-white text-sm text-center">
                                📈 ATAR Excellence Focus
                            </p>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default DesktopCarousel;
