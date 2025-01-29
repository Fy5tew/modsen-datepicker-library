import { Day } from '#/constants/days';
import { withDatasourceManagers } from '#/decorators/withDatasourceManagers';
import {
    DayDatasourceManager,
    WeekdayDatasourceManager,
} from '#/utils/datasources';

export function withStartDay(day: Day) {
    return withDatasourceManagers(
        new WeekdayDatasourceManager(day),
        new DayDatasourceManager(day)
    );
}
