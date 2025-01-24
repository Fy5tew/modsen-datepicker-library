import { ComponentType } from 'react';

import { CalendarProps } from '#/components/Calendar';
import { DayDatasource } from '#/types/datasources';

export function withDayDatasource(datasource: DayDatasource) {
    return function withDayDatasourceDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({ dayDatasource, ...props }: P) {
            const newProps: P = {
                ...props,
                dayDatasource: dayDatasource ?? datasource,
            } as P;
            return <BaseComponent {...newProps} />;
        };
    };
}
