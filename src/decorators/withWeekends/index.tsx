import { ComponentType } from 'react';

import { CalendarProps } from '#/components/Calendar';
import { defaultIsWeekend } from '#/utils/date';
import { combineRenderers, weekendDayRenderer } from '#/utils/renderers';

const DEFAULT_WEEKEND_CHECKER = defaultIsWeekend;

export interface WithWeekendsProps {
    isWeekend?: (date: Date) => boolean;
}

export function withWeekends(
    weekendChecker: WithWeekendsProps['isWeekend'] = DEFAULT_WEEKEND_CHECKER
) {
    return function withWeekendsDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({
            isWeekend,
            dayRenderer,
            ...props
        }: WithWeekendsProps & P) {
            const newProps: P = {
                ...props,
                dayRenderer: combineRenderers(
                    dayRenderer,
                    weekendDayRenderer(isWeekend ?? weekendChecker)
                ),
            } as P;
            return <BaseComponent {...newProps} />;
        };
    };
}
