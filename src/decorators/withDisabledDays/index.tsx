import { ComponentType } from 'react';

import { CalendarProps } from '#/components/Calendar';
import { useInternalValue } from '#/hooks/useInternalValue';
import { combineRenderers, disabledDayRenderer } from '#/utils/renderers';

export function withDisabledDays() {
    return function withDisabledDaysDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({
            date: externalDate,
            dayRenderer,
            onDateChange,
            ...props
        }: P) {
            const [date, setDate] = useInternalValue(
                new Date(),
                externalDate,
                onDateChange
            );

            const newProps: P = {
                ...props,
                date: date,
                onDateChange: (newDate) => {
                    setDate(newDate);
                },
                dayRenderer: combineRenderers(
                    dayRenderer,
                    disabledDayRenderer(date)
                ),
            } as P;

            return <BaseComponent {...newProps} />;
        };
    };
}
