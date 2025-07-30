import React, { useEffect, useState, useRef } from "react";
import ScrollAnimateText from "./ScrollAnimateText";
import aboutImage from "../assets/teaching-team.jpg";

const Aim = () => {
    return (
        <>
            <section className="h-auto w-full bg-biege-primary section-card">
                <div className="mx-auto flex flex-col flex-wrap items-center justify-center container-responsive">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative">
                        <div className="bg-white rounded-lg pt-6 pr-28 pl-6 pb-16 w-full min-h-[300px] flex items-start justify-start section-card-content shadow-md flex-col">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl font-bold mb-2"
                            >
                                🎯
                            </ScrollAnimateText>
                            <ScrollAnimateText as="p" className="text-pretty">
                                <span className="font-bold text-3xl/10 max-md:text-2xl">
                                    Our Aim
                                </span>{" "}
                                <br />
                                Our team's purpose is simple yet powerful: to
                                help every student reach their full potential
                                and go beyond their own expectations. With the
                                right guidance and personalised approach, every
                                student can develop the confidence to excel
                                academically.
                            </ScrollAnimateText>
                        </div>
                        <div className="bg-white rounded-lg pt-6 pr-6 pl-28 pb-16 w-full min-h-[300px] flex items-end justify-start text-right max-md:pl-16 section-card-content shadow-md flex-col">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl font-bold mb-2"
                            >
                                🏃‍♂️
                            </ScrollAnimateText>
                            <ScrollAnimateText as="p" className="text-pretty">
                                <span className="font-bold text-3xl/10 max-md:text-2xl">
                                    A Transformative Learning Experience:
                                </span>{" "}
                                <br />
                                We believe education should be enriching and
                                transformative. From Years 5 to 12, we provide
                                the tools and guidance students need to master
                                their studies, develop a love for learning, and
                                navigate their academic paths with confidence.
                            </ScrollAnimateText>
                        </div>
                        <div className="bg-white rounded-lg pt-16 pr-28 pl-6 pb-6 w-full min-h-[300px] flex items-start justify-center max-md:pl-16 section-card-content shadow-md flex-col">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl font-bold mb-2"
                            >
                                📝
                            </ScrollAnimateText>
                            <ScrollAnimateText as="p" className="text-pretty">
                                <span className="font-bold text-3xl/10 max-md:text-2xl">
                                    Personalised Support for Every Student:
                                </span>{" "}
                                <br />
                                Through one-on-one tutoring and carefully
                                designed online courses, we focus on unlocking
                                each student's unique strengths. Our goal is to
                                create an environment where academic challenges
                                are met with enthusiasm and resilience.
                            </ScrollAnimateText>
                        </div>
                        <div className="bg-white rounded-lg pt-16 pr-6 pl-28 pb-6 w-full min-h-[300px] flex items-end justify-center text-right max-md:pr-16 section-card-content shadow-md flex-col">
                            <ScrollAnimateText
                                as="h1"
                                className="text-4xl font-bold mb-2"
                            >
                                🏆
                            </ScrollAnimateText>
                            <ScrollAnimateText as="p" className="text-pretty">
                                <span className="font-bold text-3xl/10 max-md:text-2xl">
                                    Building Skills for a Lifetime of
                                    Achievement
                                </span>{" "}
                                <br />
                                We are committed to instilling confidence,
                                determination, and essential skills in every
                                student. At Taiyo Tuition, we don't just aim for
                                academic excellence—we empower students to
                                succeed in all aspects of their educational
                                journey.
                            </ScrollAnimateText>
                        </div>
                        <div className="absolute w-64 h-64 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <img
                                src={aboutImage}
                                alt="About"
                                className="w-full h-full object-cover rounded-4xl shadow-md border-1 border-gray-400 max-md:hidden"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Aim;
