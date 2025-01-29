import { ComponentType } from 'react';

import { CalendarProps } from '#/components/Calendar';
import { IDayDatasourceManager } from '#/types/datasources';

export function withDayDatasourceManager(
    datasourceManager: IDayDatasourceManager
) {
    return function withDayDatasourceDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({
            dayDatasourceManager,
            ...props
        }: P) {
            const newProps: P = {
                ...props,
                dayDatasourceManager: dayDatasourceManager ?? datasourceManager,
            } as P;
            return <BaseComponent {...newProps} />;
        };
    };
}
