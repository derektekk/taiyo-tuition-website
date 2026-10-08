import { faqs } from "../data/faq";
import FaqSplit from "../components/FaqSplit";
import HomeClose from "../components/home/HomeClose";
import PageDoc from "../components/PageDoc";

const FaqPage = () => {
    return (
        <main role="main">
            <PageDoc path="/faq" />

            <FaqSplit
                as="header"
                headingAs="h1"
                id="faq"
                className="bg-tertiary mt-[80px]"
                title="Before you start"
                body="Have questions that aren't covered here? Reach out to the team below."
                items={faqs}
            />

            <HomeClose />
        </main>
    );
};

export default FaqPage;
