import React from "react";
import locationImg from "../assets/WebsiteMapGFX.png";
import ScrollAnimateText from "./ScrollAnimateText";

const Location = () => {
    return (
        <section className="h-full w-full bg-biege-primary py-12 max-md:py-6">
            <div className="mx-auto flex flex-col flex-wrap items-center justify-center container-responsive">
                <ScrollAnimateText
                    as="h1"
                    className="text-4xl uppercase font-bold mb-12 text-center max-md:mb-6"
                >
                    Our Location
                </ScrollAnimateText>
                <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
                        <div className="col-span-2 bg-white rounded-lg w-full h-full flex items-start justify-start shadow-md flex-col max-md:col-span-1">
                            <img
                                src={locationImg}
                                alt="locationImg"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="col-span-1">
                            <ScrollAnimateText
                                as="h2"
                                className="text-2xl font-bold mb-4"
                            >
                                Mount Waverly
                            </ScrollAnimateText>
                            <ScrollAnimateText>
                                <a
                                    href="https://g.co/kgs/k3tVeZW"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-bold text-lg hover:text-primary/70 transition-colors duration-300"
                                >
                                    9-11 Hamilton Place, Mount Waverley VIC 3149
                                </a>
                            </ScrollAnimateText>
                            <br />
                            <br />
                            <ScrollAnimateText
                                as="p"
                                className="text-pretty mb-4"
                            >
                                Our Mount Waverly location is our main office.
                                Here, we offer both in-person and online
                                tutoring services. <br />
                                <br />
                                Our tutors are available to help with all
                                subjects, from Years 5 to 12. <br />
                                <br />
                                Our Mount Waverly location is conveniently
                                located near public transport and major
                                highways, making it easy to access for students
                                and parents.
                            </ScrollAnimateText>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
