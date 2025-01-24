import { COLUMNS_COUNT, ROWS_DAYS_COUNT } from '#/constants/calendar';
import { Day } from '#/constants/days';
import { DayDatasource, WeekdayDatasource } from '#/types/datasources';

import { getDay, getMonthDays, getNextDayDate, getPrevDayDate } from './date';
import { getNextDay, getPrevDay } from './day';

export function getWeekdayDatasource(startDay: Day): WeekdayDatasource {
    return function weekdaysDatasource(_: Date): Day[] {
        const weekdays: Day[] = [];

        let day = startDay;

        do {
            weekdays.push(day);
            day = getNextDay(day);
        } while (day !== startDay);

        return weekdays;
    };
}

export function getMonthDayDatasource(startDay: Day): DayDatasource {
    return function monthDatasource(date: Date): Date[] {
        const endDay = getPrevDay(startDay);
        const monthDays = getMonthDays(date);

        while (getDay(monthDays[0]) !== startDay) {
            monthDays.unshift(getPrevDayDate(monthDays[0]));
        }

        while (getDay(monthDays.at(-1) as Date) !== endDay) {
            monthDays.push(getNextDayDate(monthDays.at(-1) as Date));
        }

        while (monthDays.length !== COLUMNS_COUNT * ROWS_DAYS_COUNT) {
            monthDays.push(getNextDayDate(monthDays.at(-1) as Date));
        }

        return monthDays;
    };
}
