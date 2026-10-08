import { Clock, Mail, MapPin, Phone } from "lucide-react";
import HomeClose from "../components/home/HomeClose";
import PageDoc from "../components/PageDoc";
import Reveal from "../components/Reveal";
import ScrollAnimateText from "../components/ScrollAnimateText";
import TextLink from "../components/TextLink";

const ContactPage = () => {
    const contactInfo = [
        {
            Icon: Mail,
            title: "Email",
            details: "admin@taiyotuition.com",
            description: "Send us an email anytime",
        },
        {
            Icon: Phone,
            title: "Phone",
            details: "+61 422 283 789",
            description: "Mon to Fri from 8am to 6pm",
        },
        {
            Icon: MapPin,
            title: "Address",
            details: "9-11 Hamilton Place, Mount Waverley VIC 3149",
            description: "Visit our learning center",
        },
        {
            Icon: Clock,
            title: "Hours",
            details: "Mon - Fri: 4pm - 9pm\nSat - Sun: 12pm - 6:30pm",
            description: "Weekend sessions available",
        },
    ];

    return (
        <main
            className="min-h-screen bg-biege-primary py-5 md:py-10 lg:py-20 mt-[80px]"
            role="main"
        >
            <PageDoc
                title="Contact | Taiyo Tuition"
                description="Contact Taiyo Tuition in Mount Waverley. Call +61 422 283 789 or email admin@taiyotuition.com. Classes run weekday evenings and weekends."
                path="/contact"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <Reveal
                        as="section"
                        className="bg-white rounded-2xl shadow-lg p-8"
                        aria-labelledby="contact-info-heading"
                    >
                        <ScrollAnimateText
                            as="h1"
                            id="contact-info-heading"
                            className="h2 text-gray-900 mb-8 text-center"
                        >
                            Get in Touch
                        </ScrollAnimateText>
                        <address className="space-y-6 not-italic">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4"
                                >
                                    <info.Icon
                                        className="mt-0.5 size-6 shrink-0 text-primary"
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    />
                                    <div>
                                        <ScrollAnimateText
                                            as="h3"
                                            className="h5 text-gray-900"
                                        >
                                            {info.title}
                                        </ScrollAnimateText>
                                        {info.title === "Email" ? (
                                            <ScrollAnimateText>
                                                <a
                                                    href={`mailto:${info.details}`}
                                                    className="body-lg text-blue-600 font-medium hover:underline"
                                                >
                                                    {info.details}
                                                </a>
                                            </ScrollAnimateText>
                                        ) : info.title === "Phone" ? (
                                            <ScrollAnimateText>
                                                <a
                                                    href={`tel:${info.details.replace(/\s/g, "")}`}
                                                    className="body-lg text-blue-600 font-medium hover:underline"
                                                >
                                                    {info.details}
                                                </a>
                                            </ScrollAnimateText>
                                        ) : info.title === "Address" ? (
                                            <ScrollAnimateText>
                                                <a
                                                    href="https://share.google/eFkAn9R7TESKpFVRG"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="body-lg text-blue-600 font-medium hover:underline"
                                                >
                                                    {info.details}
                                                </a>
                                            </ScrollAnimateText>
                                        ) : (
                                            <ScrollAnimateText
                                                as="p"
                                                className="body-lg text-blue-600 font-medium whitespace-pre-line"
                                            >
                                                {info.details}
                                            </ScrollAnimateText>
                                        )}
                                        <ScrollAnimateText
                                            as="p"
                                            className="body text-gray-600"
                                        >
                                            {info.description}
                                        </ScrollAnimateText>
                                    </div>
                                </div>
                            ))}
                        </address>
                    </Reveal>

                    <Reveal
                        as="aside"
                        delay={0.1}
                        className="bg-white rounded-2xl shadow-lg p-8 h-fit"
                    >
                        <ScrollAnimateText
                            as="h2"
                            className="h2 text-gray-900 mb-4"
                        >
                            Questions first?
                        </ScrollAnimateText>
                        <ScrollAnimateText
                            as="p"
                            className="body text-gray-600 mb-6"
                        >
                            Class size, subjects, and weekly fees are on the
                            FAQ. Book a free trial when you're ready to start.
                        </ScrollAnimateText>
                        <div className="flex flex-col gap-3">
                            <TextLink
                                to="/faq"
                                className="body-sm font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                            >
                                Read the FAQ
                            </TextLink>
                            <TextLink
                                to="/location"
                                className="body-sm font-heading font-semibold text-primary transition-colors hover:text-primary/80"
                            >
                                Mount Waverley rooms
                            </TextLink>
                        </div>
                    </Reveal>
                </div>
            </div>

            <HomeClose />
        </main>
    );
};

export default ContactPage;
