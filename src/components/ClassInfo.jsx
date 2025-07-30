import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimateText from "./ScrollAnimateText";
import classPhoto3 from "../assets/taiyoImages/classPhotos/classPhoto3.jpg";
import classPhoto4 from "../assets/taiyoImages/classPhotos/classPhoto4.jpg";

const ClassInfo = () => {
    return (
        <section className="h-auto w-full bg-biege-primary section-card">
            <div className="mx-auto flex flex-col flex-wrap items-center justify-center container-responsive">
                <ScrollAnimateText
                    as="h1"
                    className="text-4xl uppercase font-bold mb-12 text-center"
                >
                    Our Learning Methods
                </ScrollAnimateText>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
                    <div className="col-span-2 bg-white rounded-lg w-full min-h-[300px] flex items-start justify-start shadow-md flex-col max-md:col-span-1 ">
                        <img
                            src={classPhoto4}
                            alt="classImgWide"
                            className="w-full h-[350px] object-cover rounded-lg"
                        />
                        <div className="w-full p-4 flex flex-col flex-auto justify-between h-full">
                            <div className="h-full flex flex-col justify-between max-sm:justify-center">
                                <ScrollAnimateText
                                    as="h2"
                                    className="text-2xl font-bold mb-2"
                                >
                                    Our Subjects
                                </ScrollAnimateText>
                                <ScrollAnimateText
                                    as="p"
                                    className="text-pretty mb-4"
                                >
                                    From VCE subjects like English, Maths
                                    Methods, and Sciences to foundational Year
                                    5-10 programs, we provide comprehensive
                                    academic support tailored to every student's
                                    needs.
                                </ScrollAnimateText>
                                <ScrollAnimateText>
                                    <Link
                                        to="/subjects"
                                        className="bg-primary text-white px-4 py-2 rounded-full hover:bg-[#3482FF] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer inline-block"
                                    >
                                        Learn More
                                    </Link>
                                </ScrollAnimateText>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg w-full min-h-[300px] flex items-start justify-start shadow-md flex-col">
                        <img
                            src={classPhoto3}
                            alt="classImgNarrow"
                            className="w-full h-[350px] object-cover rounded-lg max-md:w-full"
                        />
                        <div className="p-4">
                            <ScrollAnimateText
                                as="h2"
                                className="text-2xl font-bold mb-2"
                            >
                                Our Tutors
                            </ScrollAnimateText>
                            <ScrollAnimateText
                                as="p"
                                className="text-pretty mb-4"
                            >
                                Our expert tutors provide personalized guidance
                                to help every student reach their full academic
                                potential.
                            </ScrollAnimateText>
                            <ScrollAnimateText>
                                <Link
                                    to="/subjects"
                                    className="bg-primary text-white px-4 py-2 rounded-full hover:bg-[#3482FF] hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer inline-block"
                                >
                                    Learn More
                                </Link>
                            </ScrollAnimateText>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassInfo;
