import { Day } from '#/constants/days';

export type Datasource<P, R> = (args: P) => R;

export type WeekdayWeekDatasource = Datasource<Date, Day[]>;

export type DayWeekDatasource = Datasource<Date, Date[]>;
export type DayMonthDatasource = Datasource<Date, Date[]>;

export interface IWeekdayDatasourceManager {
    getWeekDatasource: () => WeekdayWeekDatasource;
}

export interface IDayDatasourceManager {
    getWeekDatasource: () => DayWeekDatasource;
    getMonthDatasource: () => DayMonthDatasource;
}
