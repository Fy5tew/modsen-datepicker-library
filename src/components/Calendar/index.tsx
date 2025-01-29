import { ReactNode } from 'react';

import { ErrorBoundary } from '#/components/ErrorBoundary';
import {
    CalendarType,
    DEFAULT_DAY_DATASOURCE_MANAGER,
    DEFAULT_TYPE,
    DEFAULT_WEEKDAY_DATASOURCE_MANAGER,
} from '#/constants/calendar';
import { useInternalValue } from '#/hooks/useInternalValue';
import { defaultDayRenderer } from '#/utils/renderers';

import { MonthCalendar } from './MonthCalendar';
import { CalendarProps } from './types';
import { WeekCalendar } from './WeekCalendar';
import { YearCalendar } from './YearCalendar';

export function Calendar({
    date: externalDate,
    type = DEFAULT_TYPE,
    weekdayDatasourceManager = DEFAULT_WEEKDAY_DATASOURCE_MANAGER,
    dayDatasourceManager = DEFAULT_DAY_DATASOURCE_MANAGER,
    dayRenderer = defaultDayRenderer,
    onDateChange,
}: CalendarProps) {
    const [date, setDate] = useInternalValue(
        new Date(),
        externalDate,
        onDateChange
    );

    let calendarComponent: ReactNode;
    switch (type) {
        case CalendarType.WEEK:
            calendarComponent = (
                <WeekCalendar
                    date={date}
                    weekdayDatasource={weekdayDatasourceManager.getWeekDatasource()}
                    dayDatasource={dayDatasourceManager.getWeekDatasource()}
                    dayRenderer={dayRenderer}
                    onDateChange={setDate}
                />
            );
            break;
        case CalendarType.MONTH:
            calendarComponent = (
                <MonthCalendar
                    date={date}
                    weekdayDatasource={weekdayDatasourceManager.getWeekDatasource()}
                    dayDatasource={dayDatasourceManager.getMonthDatasource()}
                    dayRenderer={dayRenderer}
                    onDateChange={setDate}
                />
            );
            break;
        case CalendarType.YEAR:
            calendarComponent = (
                <YearCalendar
                    date={date}
                    weekdayDatasource={weekdayDatasourceManager.getWeekDatasource()}
                    yearDatasource={dayDatasourceManager.getYearDatasource()}
                    dayDatasource={dayDatasourceManager.getMonthDatasource()}
                    dayRenderer={dayRenderer}
                    onDateChange={setDate}
                />
            );
            break;
        default:
            throw TypeError(`Unknown \`type\` prop value: ${type}`);
    }

    return <ErrorBoundary>{calendarComponent}</ErrorBoundary>;
}
