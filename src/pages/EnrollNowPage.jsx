import ContactForm from "../components/ContactForm";

const EnrollNowPage = () => {
    return (
        <main
            className="min-h-screen bg-biege-primary py-5 md:py-10 lg:py-20 mt-[80px]"
            role="main"
            aria-label="Enrollment form"
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ContactForm />
            </div>
        </main>
    );
};

export default EnrollNowPage;
