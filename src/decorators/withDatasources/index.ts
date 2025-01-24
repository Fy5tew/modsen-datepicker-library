import { ComponentType } from 'react';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { CalendarProps } from '#/components/Calendar';
import { withDayDatasource } from '#/decorators/withDayDatasource';
import { withWeekdayDatasource } from '#/decorators/withWeekdayDatasource';
import { DayDatasource, WeekdayDatasource } from '#/types/datasources';

export function withDatasources(
    weekdayDatasource: WeekdayDatasource,
    dayDatasource: DayDatasource
) {
    return function withDatasourcesDecorator<T extends CalendarProps>(
        BaseComponent: ComponentType<T>
    ) {
        return new CalendarBuilder(BaseComponent)
            .applyDecorator(withWeekdayDatasource(weekdayDatasource))
            .applyDecorator(withDayDatasource(dayDatasource))
            .build();
    };
}
