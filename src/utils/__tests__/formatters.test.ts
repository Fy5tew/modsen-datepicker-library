import { Day } from '#/constants/days';
import { Month } from '#/constants/months';

import {
    dateDayNumberFormatter,
    dateMonthFullNameFormatter,
    dateMonthWeekNumberFormatter,
    dateMonthYearFormatter,
    dateWeekMonthYearFormatter,
    dateYearFormatter,
    dayFullNameFormatter,
    dayShortNameFormatter,
    monthFullNameFormatter,
    monthShortNameFormatter,
} from '../formatters';

describe('Formatters Utils', () => {
    test('dayFullNameFormatter should return the full name of the day', () => {
        expect(dayFullNameFormatter(Day.Monday)).toBe('Monday');
        expect(dayFullNameFormatter(Day.Tuesday)).toBe('Tuesday');
        expect(dayFullNameFormatter(Day.Wednesday)).toBe('Wednesday');
        expect(dayFullNameFormatter(Day.Thursday)).toBe('Thursday');
        expect(dayFullNameFormatter(Day.Friday)).toBe('Friday');
        expect(dayFullNameFormatter(Day.Saturday)).toBe('Saturday');
        expect(dayFullNameFormatter(Day.Sunday)).toBe('Sunday');
    });

    test('dayShortNameFormatter should return the short name of the day', () => {
        expect(dayShortNameFormatter(Day.Monday)).toBe('Mo');
        expect(dayShortNameFormatter(Day.Tuesday)).toBe('Tu');
        expect(dayShortNameFormatter(Day.Wednesday)).toBe('We');
        expect(dayShortNameFormatter(Day.Thursday)).toBe('Th');
        expect(dayShortNameFormatter(Day.Friday)).toBe('Fr');
        expect(dayShortNameFormatter(Day.Saturday)).toBe('Sa');
        expect(dayShortNameFormatter(Day.Sunday)).toBe('Su');
    });

    test('monthFullNameFormatter should return the full name of the month', () => {
        expect(monthFullNameFormatter(Month.January)).toBe('January');
        expect(monthFullNameFormatter(Month.February)).toBe('February');
        expect(monthFullNameFormatter(Month.March)).toBe('March');
        expect(monthFullNameFormatter(Month.April)).toBe('April');
        expect(monthFullNameFormatter(Month.May)).toBe('May');
        expect(monthFullNameFormatter(Month.June)).toBe('June');
        expect(monthFullNameFormatter(Month.July)).toBe('July');
        expect(monthFullNameFormatter(Month.August)).toBe('August');
        expect(monthFullNameFormatter(Month.September)).toBe('September');
        expect(monthFullNameFormatter(Month.October)).toBe('October');
        expect(monthFullNameFormatter(Month.November)).toBe('November');
        expect(monthFullNameFormatter(Month.December)).toBe('December');
    });

    test('monthShortNameFormatter should return the short name of the month', () => {
        expect(monthShortNameFormatter(Month.January)).toBe('Jan');
        expect(monthShortNameFormatter(Month.February)).toBe('Feb');
        expect(monthShortNameFormatter(Month.March)).toBe('Mar');
        expect(monthShortNameFormatter(Month.April)).toBe('Apr');
        expect(monthShortNameFormatter(Month.May)).toBe('May');
        expect(monthShortNameFormatter(Month.June)).toBe('June');
        expect(monthShortNameFormatter(Month.July)).toBe('July');
        expect(monthShortNameFormatter(Month.August)).toBe('Aug');
        expect(monthShortNameFormatter(Month.September)).toBe('Sept');
        expect(monthShortNameFormatter(Month.October)).toBe('Oct');
        expect(monthShortNameFormatter(Month.November)).toBe('Nov');
        expect(monthShortNameFormatter(Month.December)).toBe('Dec');
    });

    test('dateDayNumberFormatter should return the day number as a string', () => {
        const date = new Date(2025, 0, 15);
        expect(dateDayNumberFormatter(date)).toBe('15');
    });

    test('dateYearFormatter should return the year as a string', () => {
        const date = new Date(2025, 0, 15);
        expect(dateYearFormatter(date)).toBe('2025');
    });

    test('dateMonthFullNameFormatter should return the full month name from a date', () => {
        const date = new Date(2025, 0, 15);
        expect(dateMonthFullNameFormatter(date)).toBe('January');
    });

    test('dateMonthYearFormatter should return the full month name and year from a date', () => {
        const date = new Date(2025, 0, 15);
        expect(dateMonthYearFormatter(date)).toBe('January 2025');
    });

    test('dateMonthWeekNumberFormatter should return the week number of the month from a date', () => {
        const date = new Date(2025, 0, 15);
        expect(dateMonthWeekNumberFormatter(date)).toBe('3');
    });

    test('dateWeekMonthYearFormatter should return the week, month, and year from a date', () => {
        const date = new Date(2025, 0, 15);
        expect(dateWeekMonthYearFormatter(date)).toBe('January 2025, 3 week');
    });
});
