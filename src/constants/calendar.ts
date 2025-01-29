import {
    DayDatasourceManager,
    WeekdayDatasourceManager,
} from '#/utils/datasources';

import { Day } from './days';

export const COLUMNS_COUNT = 7;
export const ROWS_WEEKDAYS_COUNT = 1;
export const ROWS_DAYS_COUNT = 6;
export const DEFAULT_START_DAY = Day.Sunday;

export const DEFAULT_WEEKDAY_DATASOURCE_MANAGER = new WeekdayDatasourceManager(
    DEFAULT_START_DAY
);
export const DEFAULT_DAY_DATASOURCE_MANAGER = new DayDatasourceManager(
    DEFAULT_START_DAY
);
