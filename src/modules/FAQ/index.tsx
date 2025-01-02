import FAQItem from "./components/FAQItem";
import "./index.css";

const FAQ = () => {
    return (
        <section id="FAQs" className="faq">
            <h2>Preguntas frecuentes</h2>
            <div>
                <FAQItem
                    question="¿Los servicios son gratuitos?"
                    answer="No, nuestros servicios no son gratuitos. Sin embargo, ofrecemos opciones de financiamiento y seguros médicos para ayudar a nuestros pacientes a cubrir los costos."
                />
                <FAQItem
                    question="¿Cómo puedo programar una cita?"
                    answer="Puede programar una cita llamando a nuestro número de teléfono o visitando nuestra clínica en persona."
                />
                <FAQItem
                    question="¿Qué debo llevar a mi cita?"
                    answer="Debe traer una identificación con foto, su tarjeta de seguro médico y una lista de medicamentos que esté tomando actualmente."
                />
                <FAQItem
                    question="¿Qué sucede si no puedo asistir a mi cita?"
                    answer="Si no puede asistir a su cita, llámenos con al menos 24 horas de anticipación para reprogramar."
                />
                <FAQItem
                    question="¿Qué tipo de servicios ofrecen?"
                    answer="Ofrecemos una amplia gama de servicios, incluidas consultas médicas, exámenes de laboratorio, pruebas de diagnóstico y procedimientos quirúrgicos."
                />
                <FAQItem
                    question="¿Aceptan pacientes sin seguro médico?"
                    answer="Sí, aceptamos pacientes sin seguro médico. Ofrecemos opciones de pago flexibles y descuentos para aquellos que no tienen seguro."
                />
                <FAQItem
                    question="¿Qué idiomas hablan los médicos?"
                    answer="Nuestros médicos hablan varios idiomas, incluidos inglés, español, francés, alemán y chino."
                />
            </div>
        </section>
    );
};

export default FAQ;
