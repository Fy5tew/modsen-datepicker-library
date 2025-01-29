import { CalendarType } from '#/constants/calendar';
import {
    DayMonthDatasource,
    DayWeekDatasource,
    DayYearDatasource,
    IDayDatasourceManager,
    IWeekdayDatasourceManager,
    WeekdayWeekDatasource,
} from '#/types/datasources';
import { DayRenderer } from '#/types/renderers';

export interface BaseCalendarProps {
    date?: Date;
    dayRenderer?: DayRenderer;
    onDateChange?: (date: Date) => void;
}

export interface CalendarProps extends BaseCalendarProps {
    type?: CalendarType;
    weekdayDatasourceManager?: IWeekdayDatasourceManager;
    dayDatasourceManager?: IDayDatasourceManager;
}

export interface WeekCalendarProps extends Required<BaseCalendarProps> {
    weekdayDatasource: WeekdayWeekDatasource;
    dayDatasource: DayWeekDatasource;
}

export interface MonthCalendarProps extends Required<BaseCalendarProps> {
    weekdayDatasource: WeekdayWeekDatasource;
    dayDatasource: DayMonthDatasource;
}

export interface YearCalendarProps extends Required<BaseCalendarProps> {
    weekdayDatasource: WeekdayWeekDatasource;
    yearDatasource: DayYearDatasource;
    dayDatasource: DayMonthDatasource;
}
