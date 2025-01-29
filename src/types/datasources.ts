import { Day } from '#/constants/days';

export type Datasource<P, R> = (args: P) => R;

export type WeekdayWeekDatasource = Datasource<Date, Day[]>;

export type DayMonthDatasource = Datasource<Date, Date[]>;

export interface IWeekdayDatasourceManager {
    getWeekDatasource: () => WeekdayWeekDatasource;
}

export interface IDayDatasourceManager {
    getMonthDatasource: () => DayMonthDatasource;
}
