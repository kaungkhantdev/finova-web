import { format } from "date-fns";

export const changeHumanReadAbleDate = (isoDate: string) => {
    // return formatDistanceToNow(new Date(isoDate), { addSuffix: true });
    return format(new Date(isoDate), "PP")
}

export const formatDateToYYYYMMDD = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const getCurrentMonth = () => {
    return new Date().toLocaleString('en-US', { month: 'short' });
}