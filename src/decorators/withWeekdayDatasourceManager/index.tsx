import { ComponentType } from 'react';

import { CalendarProps } from '#/components/Calendar/types';
import { IWeekdayDatasourceManager } from '#/types/datasources';

export function withWeekdayDatasourceManager(
    datasourceManager: IWeekdayDatasourceManager
) {
    return function withWeekdayDatasourceDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({
            weekdayDatasourceManager,
            ...props
        }: P) {
            const newProps: P = {
                ...props,
                weekdayDatasourceManager:
                    weekdayDatasourceManager ?? datasourceManager,
            } as P;
            return <BaseComponent {...newProps} />;
        };
    };
}
