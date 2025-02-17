import { ComponentType, useEffect } from 'react';

import { CalendarProps } from '#/components/Calendar/types';
import { MAX_DATE, MIN_DATE } from '#/constants/date';
import { useInternalValue } from '#/hooks/useInternalValue';
import { combineRenderers, limitDayRenderer } from '#/utils/renderers';

export interface WithDateLimitsProps {
    minDate?: Date;
    maxDate?: Date;
}

export function withDateLimits() {
    return function withDateLimitsDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({
            date: externalDate,
            minDate = MIN_DATE,
            maxDate = MAX_DATE,
            dayRenderer,
            onDateChange,
            ...props
        }: WithDateLimitsProps & P) {
            const [date, setDate] = useInternalValue(
                new Date(),
                externalDate,
                onDateChange
            );

            useEffect(() => {
                if (date < minDate) {
                    setDate(minDate);
                }
                if (date > maxDate) {
                    setDate(maxDate);
                }
            }, [date, maxDate, minDate, setDate]);

            const newProps: P = {
                ...props,
                date,
                onDateChange: setDate,
                dayRenderer: combineRenderers(
                    dayRenderer,
                    limitDayRenderer(minDate, maxDate)
                ),
            } as P;

            return <BaseComponent {...newProps} />;
        };
    };
}
