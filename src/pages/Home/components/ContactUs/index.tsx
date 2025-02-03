import { useForm } from "react-hook-form";
import Form from "../../../../shared/components/Form";
import InputField from "../../../../shared/components/InputField";
import Actionable from "../../../../shared/components/Actionable";
import "./index.css";

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <section id="contact-us" className="contact__us">
            <div>
                <h2>Contactanos</h2>
                <p>Si tienes alguna pregunta o comentario, no dudes en contactarnos.</p>
                <p>El Torito Santa Cruz de Turrialba, Cartago</p>
                <p>jordycastro@gmail.com</p>
                <p>+57 123 456 7890</p>
            </div>
            <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
                <InputField
                    typeField="input"
                    name="name"
                    labelText="Nombre"
                    register={register}
                    validation={{
                        required: { value: true, message: "El nombre es requerido" },
                        maxLength: { value: 200, message: "El nombre debe tener máximo 200 caracteres" },
                        minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" },
                        pattern: {
                            value: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]/,
                            message:
                                "El nombre debe comenzar con una letra mayúscula y seguir el formato correcto, como 'John'.",
                        },
                    }}
                    error={errors.name}
                />
                <InputField
                    typeField="input"
                    name="email"
                    labelText="Correo electrónico"
                    typeInput="text"
                    register={register}
                    validation={{
                        required: { value: true, message: "El correo electrónico es requerido" },
                        minLength: { value: 3, message: "El correo electrónico debe tener al menos 3 caracteres" },
                        maxLength: { value: 200, message: "El correo electrónico debe tener máximo 200 caracteres" },
                        pattern: {
                            value: /[a-z0-9._%+]+@[a-z0-9.]+\.[a-z]{2,}$/,
                            message: "El correo electrónico no es válido",
                        },
                    }}
                    error={errors.email}
                />
                <InputField
                    typeField="textarea"
                    name="message"
                    labelText="Mensaje"
                    register={register}
                    validation={{
                        required: { value: true, message: "El mensaje es requerido" },
                        maxLength: { value: 500, message: "El mensaje debe tener máximo 500 caracteres" },
                        minLength: { value: 3, message: "El mensaje debe tener al menos 3 caracteres" },
                        pattern: {
                            value: /^[a-zA-Z0-9\s]*$/,
                            message: "El mensaje solo puede contener letras y números",
                        },
                    }}
                    error={errors.message}
                />
                <Actionable type="button" buttonType="submit" className="primary">
                    Enviar
                </Actionable>
            </Form>
        </section>
    );
};

export default ContactUs;
