import { ComponentType, useEffect } from 'react';

import { CalendarProps } from '#/components/Calendar';
import { useInternalValue } from '#/hooks/useInternalValue';
import { isDayInMonth } from '#/utils/date';
import { combineRenderers, selectedDayRenderer } from '#/utils/renderers';

export interface WithDaySelectionProps {
    selectedDay?: Date;
    onDaySelect?: (date: Date) => void;
}

export function withDaySelection() {
    return function withDaySelectionDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({
            date: externalDate,
            selectedDay: externalDay,
            dayRenderer,
            onDateChange,
            onDaySelect,
            ...props
        }: WithDaySelectionProps & P) {
            const [date, setDate] = useInternalValue(
                new Date(),
                externalDate,
                onDateChange
            );
            const [day, setDay] = useInternalValue(
                new Date(),
                externalDay,
                onDaySelect
            );

            useEffect(() => {
                if (!isDayInMonth(day, date)) {
                    setDate(day);
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [day]);

            const newProps: P = {
                ...props,
                date: date,
                onDateChange: setDate,
                dayRenderer: combineRenderers(
                    dayRenderer,
                    selectedDayRenderer(day, setDay)
                ),
            } as P;

            return <BaseComponent {...newProps} />;
        };
    };
}
