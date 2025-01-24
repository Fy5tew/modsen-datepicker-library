import { Day } from '#/constants/days';

export type Datasource<T, R> = (args: T) => R;

export type WeekdayDatasource = Datasource<Date, Day[]>;
export type DayDatasource = Datasource<Date, Date[]>;
