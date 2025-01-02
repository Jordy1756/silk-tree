import "./index.css";

type FAQItemProps = {
    question: string;
    answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
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
