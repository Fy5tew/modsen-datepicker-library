import {
    DayDatasourceManager,
    WeekdayDatasourceManager,
} from '#/utils/datasources';

import { Day } from './days';

export enum CalendarType {
    WEEK,
    MONTH,
    YEAR,
}

export const COLUMNS_WEEKDAYS_COUNT = 7;
export const COLUMNS_DAYS_COUNT = 7;
export const COLUMNS_YEAR_COUNT = 4;

export const ROWS_WEEKDAYS_COUNT = 1;
export const ROWS_DAYS_WEEK_COUNT = 1;
export const ROWS_DAYS_MONTH_COUNT = 6;
export const ROWS_YEAR_COUNT = 3;

export const DEFAULT_START_DAY = Day.Sunday;

export const DEFAULT_TYPE = CalendarType.MONTH;

export const DEFAULT_WEEKDAY_DATASOURCE_MANAGER = new WeekdayDatasourceManager(
    DEFAULT_START_DAY
);
export const DEFAULT_DAY_DATASOURCE_MANAGER = new DayDatasourceManager(
    DEFAULT_START_DAY
);
