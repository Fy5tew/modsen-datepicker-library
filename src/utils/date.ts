import { Day, DEFAULT_HOLIDAYS, DEFAULT_WEEKENDS } from '#/constants/days';
import { Month } from '#/constants/months';

export function createDate(year: number, month: number, day: number): Date {
    const date = new Date(0);
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    return date;
}

export function getDayDate(date: Date): Date {
    return createDate(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getDay(date: Date): Day {
    switch (date.getDay()) {
        case Day.Monday:
            return Day.Monday;
        case Day.Tuesday:
            return Day.Tuesday;
        case Day.Wednesday:
            return Day.Wednesday;
        case Day.Thursday:
            return Day.Thursday;
        case Day.Friday:
            return Day.Friday;
        case Day.Saturday:
            return Day.Saturday;
        case Day.Sunday:
            return Day.Sunday;
    }
    throw new Error('Invalid Date');
}

export function getMonth(date: Date): Month {
    switch (date.getMonth()) {
        case Month.January:
            return Month.January;
        case Month.February:
            return Month.February;
        case Month.March:
            return Month.March;
        case Month.April:
            return Month.April;
        case Month.May:
            return Month.May;
        case Month.June:
            return Month.June;
        case Month.July:
            return Month.July;
        case Month.August:
            return Month.August;
        case Month.September:
            return Month.September;
        case Month.October:
            return Month.October;
        case Month.November:
            return Month.November;
        case Month.December:
            return Month.December;
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

export function getNextMonthDate(date: Date): Date {
    return createDate(date.getFullYear(), date.getMonth() + 1, 1);
}

export function getPrevMonthDate(date: Date): Date {
    return createDate(date.getFullYear(), date.getMonth() - 1, 1);
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

export function defaultIsWeekend(date: Date): boolean {
    return DEFAULT_WEEKENDS.includes(getDay(date));
}

export function defaultIsHoliday(date: Date): boolean {
    return DEFAULT_HOLIDAYS.includes(
        `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    );
}
