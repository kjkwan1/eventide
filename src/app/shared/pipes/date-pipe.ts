import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'date'
})
export class DatePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const day = date.getDate();
        return `${month} ${day}, ${year}`;
    }
}

type DateRecord = Record<number, string>;

export const months: DateRecord = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
};