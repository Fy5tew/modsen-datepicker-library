import { CalendarType } from '#/constants/calendar';
import {
    DayMonthDatasource,
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

export interface MonthCalendarProps extends Required<BaseCalendarProps> {
    weekdayDatasource: WeekdayWeekDatasource;
    dayDatasource: DayMonthDatasource;
}
