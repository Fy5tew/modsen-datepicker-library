import {
    COLUMNS_DAYS_COUNT,
    ROWS_DAYS_MONTH_COUNT,
} from '#/constants/calendar';
import { Day } from '#/constants/days';

import { DayDatasourceManager, WeekdayDatasourceManager } from '../datasources';
import {
    getDayMonthDatasource,
    getDayWeekDatasource,
    getDayYearDatasource,
    getWeekdayWeekDatasource,
} from '../datasources';

describe('Datesource Utils', () => {
    describe('getWeekdayWeekDatasource', () => {
        it('should return an array of weekdays starting from Sunday', () => {
            const datasource = getWeekdayWeekDatasource(Day.Sunday);
            const result = datasource(new Date('2025-01-01'));
            expect(result).toEqual([
                Day.Sunday,
                Day.Monday,
                Day.Tuesday,
                Day.Wednesday,
                Day.Thursday,
                Day.Friday,
                Day.Saturday,
            ]);
        });

        it('should return an array of weekdays starting from Monday', () => {
            const datasource = getWeekdayWeekDatasource(Day.Monday);
            const result = datasource(new Date('2025-01-01'));
            expect(result).toEqual([
                Day.Monday,
                Day.Tuesday,
                Day.Wednesday,
                Day.Thursday,
                Day.Friday,
                Day.Saturday,
                Day.Sunday,
            ]);
        });
    });

    describe('getDayWeekDatasource', () => {
        it('should return a full week of dates starting from Monday', () => {
            const datasource = getDayWeekDatasource(Day.Monday);
            const result = datasource(new Date('2025-01-01'));
            expect(result.length).toBe(7);
        });

        it('should return correct dates for a full week when starting from a given day', () => {
            const datasource = getDayWeekDatasource(Day.Sunday);
            const result = datasource(new Date('2025-01-01'));
            expect(result[0].getDay()).toBe(Day.Sunday);
        });
    });

    describe('getDayMonthDatasource', () => {
        it('should return a list of dates that fill the month', () => {
            const datasource = getDayMonthDatasource(Day.Monday);
            const result = datasource(new Date('2025-01-01'));
            expect(result.length).toBe(
                COLUMNS_DAYS_COUNT * ROWS_DAYS_MONTH_COUNT
            );
        });

        it('should start on the correct start day', () => {
            const datasource = getDayMonthDatasource(Day.Monday);
            const result = datasource(new Date('2025-01-01'));
            expect(result[0].getDay()).toBe(Day.Monday);
        });

        it('should end on the correct end day', () => {
            const datasource = getDayMonthDatasource(Day.Monday);
            const result = datasource(new Date('2025-01-01'));
            expect(result[result.length - 1].getDay()).toBe(Day.Sunday);
        });
    });

    describe('getDayYearDatasource', () => {
        it('should return an array of all months in a year', () => {
            const datasource = getDayYearDatasource();
            const result = datasource(new Date('2025-01-01'));
            expect(result.length).toBe(12);
        });
    });

    describe('WeekdayDatasourceManager', () => {
        it('should return a WeekdayWeekDatasource starting from Sunday', () => {
            const manager = new WeekdayDatasourceManager(Day.Sunday);
            const datasource = manager.getWeekDatasource();
            const result = datasource(new Date('2025-01-01'));
            expect(result).toEqual([
                Day.Sunday,
                Day.Monday,
                Day.Tuesday,
                Day.Wednesday,
                Day.Thursday,
                Day.Friday,
                Day.Saturday,
            ]);
        });

        it('should return a WeekdayWeekDatasource starting from Monday', () => {
            const manager = new WeekdayDatasourceManager(Day.Monday);
            const datasource = manager.getWeekDatasource();
            const result = datasource(new Date('2025-01-01'));
            expect(result).toEqual([
                Day.Monday,
                Day.Tuesday,
                Day.Wednesday,
                Day.Thursday,
                Day.Friday,
                Day.Saturday,
                Day.Sunday,
            ]);
        });
    });

    describe('DayDatasourceManager', () => {
        it('should return the correct WeekDatasource for Monday start day', () => {
            const manager = new DayDatasourceManager(Day.Monday);
            const weekDatasource = manager.getWeekDatasource();
            const result = weekDatasource(new Date('2025-01-01'));
            expect(result.length).toBe(7);
        });

        it('should return the correct MonthDatasource for Monday start day', () => {
            const manager = new DayDatasourceManager(Day.Monday);
            const monthDatasource = manager.getMonthDatasource();
            const result = monthDatasource(new Date('2025-01-01'));
            expect(result.length).toBe(
                COLUMNS_DAYS_COUNT * ROWS_DAYS_MONTH_COUNT
            );
        });

        it('should return the correct YearDatasource', () => {
            const manager = new DayDatasourceManager(Day.Monday);
            const yearDatasource = manager.getYearDatasource();
            const result = yearDatasource(new Date('2025-01-01'));
            expect(result.length).toBe(12);
        });
    });
});
