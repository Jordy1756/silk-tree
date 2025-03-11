import { useForm } from "react-hook-form";
import Form from "../../../../shared/components/Form";
import "./index.css";
import { TextField } from "../../../../shared/components/InputField";
import Actionable from "../../../../shared/components/Actionable";
import { useModal } from "../../../../shared/hooks/useModal";
import dayjs from "dayjs";

type NewAppointmentFormProps = {
    startDate: Date;
    endDate: Date;
    handleEvents: (events: any) => void;
};

const NewAppointmentForm = ({ startDate, endDate, handleEvents }: NewAppointmentFormProps) => {
    dayjs.locale("es");
    const { closeModal } = useModal();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            initialHour: "",
            finalHour: "",
        },
    });

    const onSubmit = ({ initialHour, finalHour }: { initialHour: string; finalHour: string }) => {
        console.log({ initialHour, finalHour });
        console.log({ startDate, endDate });
        const [initialHourValue, initialMinuteValue] = initialHour.split(":").map(Number);
        const [finalHourValue, finalMinuteValue] = finalHour.split(":").map(Number);

        const updatedStartDate = dayjs(startDate).hour(initialHourValue).minute(initialMinuteValue).second(0);
        const updatedEndDate = dayjs(endDate).hour(finalHourValue).minute(finalMinuteValue).second(0);

        console.log({
            updatedStartDate: updatedStartDate.toISOString(),
            updatedEndDate: updatedEndDate.toISOString(),
        });

        const event = {
            title: "Nueva cita",
            start: updatedStartDate.toDate(),
            end: updatedEndDate.toDate(),
        };

        handleEvents([event]);
        // reset();
        closeModal();
    };

    return (
        <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <TextField
                type="time"
                name="initialHour"
                labelText="Hora de inicio"
                register={register}
                validation={{
                    required: { value: true, message: "La hora de inicio es requerida" },
                    min: { value: "08:00", message: "La hora de inicio no puede ser antes de las 8:00" },
                    max: { value: "19:00", message: "La hora de inicio no puede ser después de las 19:00" },
                    pattern: {
                        value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
                        message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
                    },
                }}
                error={errors.initialHour}
            />
            <TextField
                type="time"
                name="finalHour"
                labelText="Hora de fin"
                register={register}
                validation={{
                    required: { value: true, message: "La hora de fin es requerida" },
                    min: { value: "08:00", message: "La hora de inicio no puede ser antes de las 8:00" },
                    max: { value: "19:00", message: "La hora de inicio no puede ser después de las 19:00" },
                    pattern: {
                        value: /^([0-9]|0[0-9]|1[0-9]|2[0-3]):(00|30)$/,
                        message: "La hora debe ser en intervalos de 30 minutos (XX:00 o XX:30)",
                    },
                }}
                error={errors.finalHour}
            />
            <div className="form__actions">
                <Actionable type="button" className="primary" buttonType="submit">
                    Agendar
                </Actionable>
                <Actionable type="button" className="secondary" buttonType="reset" onClick={() => closeModal()}>
                    Cancelar
                </Actionable>
            </div>
        </Form>
    );
};

export default NewAppointmentForm;
