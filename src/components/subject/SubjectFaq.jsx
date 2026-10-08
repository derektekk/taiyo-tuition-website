import { faqs } from "../../data/faq";
import FaqSplit from "../FaqSplit";

/** Four questions from the shared bank, then the full list. */
const SubjectFaq = ({ subject }) => {
    const items = subject.faqIds
        .map((id) => faqs.find((faq) => faq.id === id))
        .filter(Boolean);

    if (!items.length) return null;

    return (
        <FaqSplit
            title="Before you book a trial"
            body="Have questions that aren't covered here? Reach out to the team below."
            items={items}
            showAllLink
            className="bg-tertiary"
        />
    );
};

export default SubjectFaq;
