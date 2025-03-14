import dayjs from "dayjs";

type Format = "YYYY-MM-DD" | "HH:mm";

export const getFormattedDateString = (date: Date, format: Format) => dayjs(date).format(format);
