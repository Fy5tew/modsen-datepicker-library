import { Day } from '#/constants/days';
import { Month } from '#/constants/months';

import {
    createDate,
    defaultIsHoliday,
    defaultIsWeekend,
    getDay,
    getDayDate,
    getMonth,
    getMonthDays,
    getNextDayDate,
    getNextMonthDate,
    getNextWeekDate,
    getNextYearDate,
    getPrevDayDate,
    getPrevMonthDate,
    getPrevWeekDate,
    getPrevYearDate,
    getYearMonths,
    isDayInMonth,
    isDayInRange,
    isEquals,
    isOneDay,
    isRangeEnd,
    isRangeStart,
} from '../date';

describe('Date Utils', () => {
    test('createDate should create a correct date', () => {
        const date = createDate(2023, 0, 1);
        expect(date.getFullYear()).toBe(2023);
        expect(date.getMonth()).toBe(0);
        expect(date.getDate()).toBe(1);
    });

    test('getDayDate should return a date with time reset', () => {
        const date = new Date(2023, 0, 1, 12, 30, 45);
        const dayDate = getDayDate(date);
        expect(dayDate.getFullYear()).toBe(2023);
        expect(dayDate.getMonth()).toBe(0);
        expect(dayDate.getDate()).toBe(1);
        expect(dayDate.getHours()).toBe(0);
    });

    test('getDay should return correct enum value', () => {
        const date = new Date(2023, 0, 2);
        expect(getDay(date)).toBe(Day.Monday);
    });

    test('getMonth should return correct enum value', () => {
        const date = new Date(2023, 2, 1);
        expect(getMonth(date)).toBe(Month.March);
    });

    test('isEquals should check if two dates are equal', () => {
        const date1 = new Date(2023, 0, 1);
        const date2 = new Date(2023, 0, 1);
        expect(isEquals(date1, date2)).toBe(true);
    });

    test('isEquals should return false for different dates', () => {
        const date1 = new Date(2023, 0, 1);
        const date2 = new Date(2023, 0, 2);
        expect(isEquals(date1, date2)).toBe(false);
    });

    test('isDayInMonth should verify if a date is in a given month', () => {
        const day = new Date(2023, 0, 15);
        const month = new Date(2023, 0, 1);
        expect(isDayInMonth(day, month)).toBe(true);
    });

    test('isDayInMonth should return false if the day is in another month', () => {
        const day = new Date(2023, 1, 15);
        const month = new Date(2023, 0, 1);
        expect(isDayInMonth(day, month)).toBe(false);
    });

    test('isDayInRange should return true for a date within the range', () => {
        const start = new Date(2023, 0, 1);
        const end = new Date(2023, 0, 10);
        const day = new Date(2023, 0, 5);
        expect(isDayInRange(day, start, end)).toBe(true);
    });

    test('isDayInRange should return false for a date outside the range', () => {
        const start = new Date(2023, 0, 1);
        const end = new Date(2023, 0, 10);
        const day = new Date(2023, 0, 15);
        expect(isDayInRange(day, start, end)).toBe(false);
    });

    test('getNextDayDate should return the next day', () => {
        const date = new Date(2023, 0, 1);
        expect(getNextDayDate(date).getDate()).toBe(2);
    });

    test('getPrevDayDate should return the previous day', () => {
        const date = new Date(2023, 0, 1);
        expect(getPrevDayDate(date).getDate()).toBe(31);
    });

    test('getNextWeekDate should return the date of the same weekday in the next week', () => {
        const date = new Date(2023, 0, 15);
        const nextWeekDate = getNextWeekDate(date);
        expect(nextWeekDate.getFullYear()).toBe(2023);
        expect(nextWeekDate.getMonth()).toBe(0);
        expect(nextWeekDate.getDate()).toBe(22);
    });

    test('getPrevWeekDate should return the same weekday from the previous week', () => {
        const date = new Date(2023, 0, 15);
        const prevWeekDate = getPrevWeekDate(date);
        expect(prevWeekDate.getFullYear()).toBe(2023);
        expect(prevWeekDate.getMonth()).toBe(0);
        expect(prevWeekDate.getDate()).toBe(8);
    });

    test('getNextMonthDate should return the first day of the next month', () => {
        const date = new Date(2023, 0, 15);
        const nextMonthDate = getNextMonthDate(date);
        expect(nextMonthDate.getFullYear()).toBe(2023);
        expect(nextMonthDate.getMonth()).toBe(1);
        expect(nextMonthDate.getDate()).toBe(1);
    });

    test('getNextYearDate should return the first day of the next year', () => {
        const date = new Date(2023, 5, 15);
        const nextYearDate = getNextYearDate(date);
        expect(nextYearDate.getFullYear()).toBe(2024);
        expect(nextYearDate.getMonth()).toBe(0);
        expect(nextYearDate.getDate()).toBe(1);
    });

    test('getPrevMonthDate should return the first day of the previous month', () => {
        const date = new Date(2023, 1, 15);
        const prevMonthDate = getPrevMonthDate(date);
        expect(prevMonthDate.getFullYear()).toBe(2023);
        expect(prevMonthDate.getMonth()).toBe(0);
        expect(prevMonthDate.getDate()).toBe(1);
    });

    test('getPrevYearDate should return the first day of the previous year', () => {
        const date = new Date(2023, 5, 15);
        const prevYearDate = getPrevYearDate(date);
        expect(prevYearDate.getFullYear()).toBe(2022);
        expect(prevYearDate.getMonth()).toBe(0);
        expect(prevYearDate.getDate()).toBe(1);
    });

    test('getYearMonths should return all months in a year', () => {
        const months = getYearMonths(new Date(2023, 0, 1));
        expect(months.length).toBe(12);
        expect(months[0]).toEqual(createDate(2023, 0, 1, 0, 0, 0));
        expect(months[11]).toEqual(createDate(2023, 11, 1, 0, 0, 0));
    });

    test('getMonthDays should return all days of the given month', () => {
        const days = getMonthDays(new Date(2023, 1, 1));
        expect(days.length).toBe(28);
        expect(days[0]).toEqual(createDate(2023, 1, 1));
        expect(days[27]).toEqual(createDate(2023, 1, 28));
    });

    test('defaultIsWeekend should return true for weekends', () => {
        const saturday = new Date(2023, 6, 15);
        expect(defaultIsWeekend(saturday)).toBe(true);
    });

    test('defaultIsWeekend should return false for weekdays', () => {
        const monday = new Date(2023, 6, 17);
        expect(defaultIsWeekend(monday)).toBe(false);
    });

    test('defaultIsHoliday should detect a holiday', () => {
        const newYear = new Date(2023, 0, 1);
        expect(defaultIsHoliday(newYear)).toBe(true);
    });

    test('defaultIsHoliday should return false for a non-holiday', () => {
        const randomDay = new Date(2023, 0, 5);
        expect(defaultIsHoliday(randomDay)).toBe(false);
    });

    test('isRangeStart should return true for the start date of the range', () => {
        const start = new Date(2023, 0, 1);
        const end = new Date(2023, 0, 10);
        const day = new Date(2023, 0, 1);
        expect(isRangeStart(day, start, end)).toBe(true);
    });

    test('isRangeStart should return false if the date is not the start of the range', () => {
        const start = new Date(2023, 0, 1);
        const end = new Date(2023, 0, 10);
        const day = new Date(2023, 0, 5);
        expect(isRangeStart(day, start, end)).toBe(false);
    });

    test('isRangeEnd should return true for the end date of the range', () => {
        const start = new Date(2023, 0, 1);
        const end = new Date(2023, 0, 10);
        const day = new Date(2023, 0, 10);
        expect(isRangeEnd(day, start, end)).toBe(true);
    });

    test('isRangeEnd should return false if the date is not the end of the range', () => {
        const start = new Date(2023, 0, 1);
        const end = new Date(2023, 0, 10);
        const day = new Date(2023, 0, 5);
        expect(isRangeEnd(day, start, end)).toBe(false);
    });

    test('isOneDay should return true for the same day', () => {
        const date1 = new Date(2023, 0, 1);
        const date2 = new Date(2023, 0, 1);
        expect(isOneDay(date1, date2)).toBe(true);
    });

    test('isOneDay should return false for different days', () => {
        const date1 = new Date(2023, 0, 1);
        const date2 = new Date(2023, 0, 2);
        expect(isOneDay(date1, date2)).toBe(false);
    });
});
