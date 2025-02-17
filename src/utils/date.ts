import { Day, DEFAULT_HOLIDAYS, DEFAULT_WEEKENDS } from '#/constants/days';
import { Month } from '#/constants/months';

export function createDate(
    year: number = 0,
    monthIndex: number = 0,
    day: number = 0,
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0,
    milliseconds: number = 0
): Date {
    const date = new Date(0);
    date.setFullYear(year);
    date.setMonth(monthIndex);
    date.setDate(day);
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    date.setMilliseconds(milliseconds);
    return date;
}

export function getDayDate(date: Date): Date {
    return createDate(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getDay(date: Date): Day {
    const day = date.getDay();
    if (day in Day) {
        return day as Day;
    }
    throw new Error('Invalid Date');
}

export function getMonth(date: Date): Month {
    const month = date.getMonth();
    if (month in Month) {
        return month as Month;
    }
    throw new Error('Invalid Date');
}

export function isEquals(date1: Date, date2: Date): boolean {
    return date1.getTime() === date2.getTime();
}

export function isDayInMonth(dayDate: Date, monthDate: Date): boolean {
    return (
        dayDate.getFullYear() === monthDate.getFullYear() &&
        dayDate.getMonth() === monthDate.getMonth()
    );
}

export function isDayInRange(day: Date, start: Date, end: Date) {
    day = getDayDate(day);
    start = getDayDate(start);
    end = getDayDate(end);
    return day >= start && day <= end;
}

export function isRangeStart(day: Date, start: Date, end: Date) {
    return isDayInRange(day, start, end) && isOneDay(day, start);
}

export function isRangeEnd(day: Date, start: Date, end: Date) {
    return isDayInRange(day, start, end) && isOneDay(day, end);
}

export function isOneDay(first: Date, second: Date) {
    return (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    );
}

export function getNextDayDate(date: Date): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
}

export function getPrevDayDate(date: Date): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    return newDate;
}

export function getNextWeekDate(date: Date): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 7);
    return newDate;
}

export function getPrevWeekDate(date: Date): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 7);
    return newDate;
}

export function getNextMonthDate(date: Date): Date {
    return createDate(date.getFullYear(), date.getMonth() + 1, 1);
}

export function getPrevMonthDate(date: Date): Date {
    return createDate(date.getFullYear(), date.getMonth() - 1, 1);
}

export function getNextYearDate(date: Date): Date {
    return createDate(date.getFullYear() + 1, 0, 1);
}

export function getPrevYearDate(date: Date): Date {
    return createDate(date.getFullYear() - 1, 0, 1);
}

export function getMonthDays(date: Date): Date[] {
    const startDay = createDate(date.getFullYear(), date.getMonth(), 1);
    const monthDays: Date[] = [];

    let day = startDay;

    do {
        monthDays.push(day);
        day = getNextDayDate(day);
    } while (day.getMonth() === startDay.getMonth());

    return monthDays;
}

export function getYearMonths(date: Date): Date[] {
    const startMonth = createDate(date.getFullYear(), 0, 1);
    const yearMonths: Date[] = [];

    let month = startMonth;

    do {
        yearMonths.push(month);
        month = getNextMonthDate(month);
    } while (month.getFullYear() === startMonth.getFullYear());

    return yearMonths;
}

export function defaultIsWeekend(date: Date): boolean {
    return DEFAULT_WEEKENDS.includes(getDay(date));
}

export function defaultIsHoliday(date: Date): boolean {
    return DEFAULT_HOLIDAYS.includes(
        `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    );
}
