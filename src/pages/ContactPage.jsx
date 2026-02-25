import ScrollAnimateText from "../components/ScrollAnimateText";

const ContactPage = () => {
    const contactInfo = [
        {
            icon: "📧",
            title: "Email",
            details: "admin@taiyotuition.com",
            description: "Send us an email anytime",
        },
        {
            icon: "📞",
            title: "Phone",
            details: "+61 422 283 789",
            description: "Mon to Fri from 8am to 6pm",
        },
        {
            icon: "📍",
            title: "Address",
            details: "9-11 Hamilton Place, Mount Waverly VIC 3149",
            description: "Visit our learning center",
        },
        {
            icon: "⏰",
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 2-Column Grid: Get in Touch + Quick Questions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column: Get in Touch */}
                    <section
                        className="bg-white rounded-2xl shadow-lg p-8"
                        aria-labelledby="contact-info-heading"
                    >
                        <ScrollAnimateText
                            as="h2"
                            id="contact-info-heading"
                            className="text-3xl font-bold text-gray-900 mb-8 text-center"
                        >
                            Get in Touch
                        </ScrollAnimateText>
                        <address className="space-y-6 not-italic">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4"
                                >
                                    <div
                                        className="text-3xl mr-4 text-white"
                                        role="img"
                                        aria-label={info.title}
                                    >
                                        {info.icon}
                                    </div>
                                    <div>
                                        <ScrollAnimateText
                                            as="h3"
                                            className="font-semibold text-gray-900 text-lg"
                                        >
                                            {info.title}
                                        </ScrollAnimateText>
                                        {info.title === "Email" ? (
                                            <ScrollAnimateText>
                                                <a
                                                    href={`mailto:${info.details}`}
                                                    className="text-blue-600 font-medium text-lg hover:underline"
                                                >
                                                    {info.details}
                                                </a>
                                            </ScrollAnimateText>
                                        ) : info.title === "Phone" ? (
                                            <ScrollAnimateText>
                                                <a
                                                    href={`tel:${info.details}`}
                                                    className="text-blue-600 font-medium text-lg hover:underline"
                                                >
                                                    {info.details}
                                                </a>
                                            </ScrollAnimateText>
                                        ) : (
                                            <ScrollAnimateText
                                                as="p"
                                                className="text-blue-600 font-medium text-lg whitespace-pre-line"
                                            >
                                                {info.details}
                                            </ScrollAnimateText>
                                        )}
                                        <ScrollAnimateText
                                            as="p"
                                            className="text-gray-600"
                                        >
                                            {info.description}
                                        </ScrollAnimateText>
                                    </div>
                                </div>
                            ))}
                        </address>
                    </section>

                    {/* Right Column: FAQ Section */}
                    <aside>
                        <section
                            className="bg-white rounded-2xl shadow-lg p-8 h-fit"
                            aria-labelledby="faq-heading"
                        >
                            <ScrollAnimateText
                                as="h2"
                                id="faq-heading"
                                className="text-3xl font-bold text-gray-900 mb-8 text-center"
                            >
                                Quick Questions?
                            </ScrollAnimateText>
                            <div className="space-y-6">
                                <div className="border-b border-gray-200 pb-6">
                                    <ScrollAnimateText className="font-semibold text-gray-900 mb-3 text-lg">
                                        How do I book a trial lesson?
                                    </ScrollAnimateText>
                                    <ScrollAnimateText className="text-gray-600">
                                        Visit our Enroll Now page and fill out
                                        the form to arrange your free trial
                                        lesson at your convenience and discuss
                                        your academic goals.
                                    </ScrollAnimateText>
                                </div>
                                <div className="border-b border-gray-200 pb-6">
                                    <ScrollAnimateText className="font-semibold text-gray-900 mb-3 text-lg">
                                        What subjects do you offer?
                                    </ScrollAnimateText>
                                    <ScrollAnimateText className="text-gray-700">
                                        We offer tutoring in Mathematics,
                                        Physics, Chemistry, English, Biology,
                                        and many more subjects for VCE students.
                                        Visit our subjects page to learn more.
                                    </ScrollAnimateText>
                                </div>
                                <div className="border-b border-gray-200 pb-6">
                                    <ScrollAnimateText className="font-semibold text-gray-900 mb-3 text-lg">
                                        Do you offer online sessions?
                                    </ScrollAnimateText>
                                    <ScrollAnimateText className="text-gray-600">
                                        Yes! We offer both in-person and online
                                        tutoring sessions to accommodate your
                                        preferences and schedule.
                                    </ScrollAnimateText>
                                </div>
                                <div>
                                    <ScrollAnimateText className="font-semibold text-gray-900 mb-3 text-lg">
                                        How much do your classes cost?
                                    </ScrollAnimateText>
                                    <ScrollAnimateText className="text-gray-600">
                                        Our pricing varies depending on the
                                        subject and class format. Contact us
                                        directly for detailed pricing
                                        information and package options.
                                    </ScrollAnimateText>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
