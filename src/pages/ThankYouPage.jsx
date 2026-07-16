import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollAnimateText from "../components/ScrollAnimateText";

const CONVERSION_SEND_TO = "AW-16463192719/XYI8CK2vitECEI_Foao9";

const ThankYouPage = () => {
  const trackedRef = useRef(false);

  useEffect(() => {
    if (trackedRef.current) return;
    trackedRef.current = true;

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: CONVERSION_SEND_TO,
      });
    }
  }, []);

  return (
    <main
      className="min-h-screen bg-biege-primary py-5 md:py-10 lg:py-20 mt-[80px]"
      role="main"
      aria-label="Enrollment confirmation"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-2xl shadow-lg px-8 py-12 md:py-16 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <ScrollAnimateText
            as="h1"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Thank You!
          </ScrollAnimateText>
          <ScrollAnimateText as="p" className="text-lg text-gray-600 mb-8">
            Your enrolment enquiry has been sent. We&apos;ll get back to you
            within 24-48 hours to discuss your tutoring needs.
          </ScrollAnimateText>

          <Link
            to="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-[#3482FF] hover:scale-105 transition-all ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Back to Home
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ThankYouPage;
