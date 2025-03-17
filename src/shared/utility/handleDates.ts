import dayjs from "dayjs";

type Format = "YYYY-MM-DD" | "HH:mm";

export const getFormattedDateString = (date: Date, format: Format) => dayjs(date).format(format);
export const convertStringToDate = (date: string) => dayjs(date).toDate();
export const converDateToString = (date: Date) => dayjs(date).format("DD [de] MMMM [del] YYYY");
export const transformToDate = (date: Date) => dayjs(date).toDate();
