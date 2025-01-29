import {
    COLUMNS_COUNT,
    ROWS_DAYS_MONTH_COUNT,
    ROWS_DAYS_WEEK_COUNT,
} from '#/constants/calendar';
import { Day } from '#/constants/days';
import {
    DayMonthDatasource,
    DayWeekDatasource,
    IDayDatasourceManager,
    IWeekdayDatasourceManager,
    WeekdayWeekDatasource,
} from '#/types/datasources';

import { getDay, getMonthDays, getNextDayDate, getPrevDayDate } from './date';
import { getNextDay, getPrevDay } from './day';

export function getWeekdayWeekDatasource(startDay: Day): WeekdayWeekDatasource {
    return function weekdayWeekDatasource(_: Date): Day[] {
        const weekdays: Day[] = [];

        let day = startDay;

        do {
            weekdays.push(day);
            day = getNextDay(day);
        } while (day !== startDay);

        return weekdays;
    };
}

export function getDayWeekDatasource(startDay: Day): DayWeekDatasource {
    return function dayWeekDatasource(date: Date): Date[] {
        const endDay = getPrevDay(startDay);
        const weekDays = [date];

        while (getDay(weekDays[0]) !== startDay) {
            weekDays.unshift(getPrevDayDate(weekDays[0]));
        }

        while (getDay(weekDays.at(-1) as Date) !== endDay) {
            weekDays.push(getNextDayDate(weekDays.at(-1) as Date));
        }

        while (weekDays.length !== COLUMNS_COUNT * ROWS_DAYS_WEEK_COUNT) {
            weekDays.push(getNextDayDate(weekDays.at(-1) as Date));
        }

        return weekDays;
    };
}

export function getDayMonthDatasource(startDay: Day): DayMonthDatasource {
    return function dayMonthDatasource(date: Date): Date[] {
        const endDay = getPrevDay(startDay);
        const monthDays = getMonthDays(date);

        while (getDay(monthDays[0]) !== startDay) {
            monthDays.unshift(getPrevDayDate(monthDays[0]));
        }

        while (getDay(monthDays.at(-1) as Date) !== endDay) {
            monthDays.push(getNextDayDate(monthDays.at(-1) as Date));
        }

        while (monthDays.length !== COLUMNS_COUNT * ROWS_DAYS_MONTH_COUNT) {
            monthDays.push(getNextDayDate(monthDays.at(-1) as Date));
        }

        return monthDays;
    };
}

export class WeekdayDatasourceManager implements IWeekdayDatasourceManager {
    protected readonly _startDay: Day;

    constructor(startDay: Day) {
        this._startDay = startDay;
    }

    getWeekDatasource(): WeekdayWeekDatasource {
        return getWeekdayWeekDatasource(this._startDay);
    }
}

export class DayDatasourceManager implements IDayDatasourceManager {
    protected readonly _startDay: Day;

    constructor(startDay: Day) {
        this._startDay = startDay;
    }

    getWeekDatasource(): DayWeekDatasource {
        return getDayWeekDatasource(this._startDay);
    }

    getMonthDatasource(): DayMonthDatasource {
        return getDayMonthDatasource(this._startDay);
    }
}
