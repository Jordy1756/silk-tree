import "./faqItem.css";

type Props = {
    question: string;
    answer: string;
};

const FAQItem = ({ question, answer }: Props) => {
    return (
        <details name="faqs" className="faq__item">
            <summary>
                <h5>{question}</h5>
            </summary>
            <p>{answer}</p>
        </details>
    );
};

export default FAQItem;
