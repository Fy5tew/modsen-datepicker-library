import { ComponentType } from 'react';

import { CalendarProps } from '#/components/Calendar';
import { WeekdayDatasource } from '#/types/datasources';

export function withWeekdayDatasource(datasource: WeekdayDatasource) {
    return function withWeekdayDatasourceDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({ weekdayDatasource, ...props }: P) {
            const newProps: P = {
                ...props,
                weekdayDatasource: weekdayDatasource ?? datasource,
            } as P;
            return <BaseComponent {...newProps} />;
        };
    };
}
