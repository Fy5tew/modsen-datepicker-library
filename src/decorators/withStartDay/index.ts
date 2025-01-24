import { Day } from '#/constants/days';
import { withDatasources } from '#/decorators/withDatasources';
import {
    getMonthDayDatasource,
    getWeekdayDatasource,
} from '#/utils/datasources';

export function withStartDay(day: Day) {
    return withDatasources(
        getWeekdayDatasource(day),
        getMonthDayDatasource(day)
    );
}
