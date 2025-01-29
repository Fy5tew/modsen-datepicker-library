import { ComponentType } from 'react';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { CalendarProps } from '#/components/Calendar/types';
import { withDayDatasourceManager } from '#/decorators/withDayDatasourceManager';
import { withWeekdayDatasourceManager } from '#/decorators/withWeekdayDatasourceManager';
import {
    IDayDatasourceManager,
    IWeekdayDatasourceManager,
} from '#/types/datasources';

export function withDatasourceManagers(
    weekdayDatasourceManager: IWeekdayDatasourceManager,
    dayDatasourceManager: IDayDatasourceManager
) {
    return function withDatasourcesDecorator<T extends CalendarProps>(
        BaseComponent: ComponentType<T>
    ) {
        return new CalendarBuilder(BaseComponent)
            .applyDecorator(
                withWeekdayDatasourceManager(weekdayDatasourceManager)
            )
            .applyDecorator(withDayDatasourceManager(dayDatasourceManager))
            .build();
    };
}
