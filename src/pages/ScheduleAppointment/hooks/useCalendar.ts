import { dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/es";

export const useCalendar = () => {
    dayjs.locale("es");

    const localizer = dayjsLocalizer(dayjs);

    const startAccessor = "start";
    const endAccessor = "end";

    const views = ["month", "week"];

    const min = dayjs("2025-03-10T08:00:00").toDate();
    const max = dayjs("2025-03-11T20:00:00").toDate();

    const messages = {
        allDay: "Todo el día",
        previous: "<",
        next: ">",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
        agenda: "Agenda",
        date: "Fecha",
        time: "Hora",
        event: "Evento",
    };

    return { localizer, startAccessor, endAccessor, views, min, max, messages };
};
