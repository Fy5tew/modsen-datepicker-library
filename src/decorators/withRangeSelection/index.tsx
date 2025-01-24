import { ComponentType, useCallback, useEffect } from 'react';

import { CalendarProps } from '#/components/Calendar';
import { useInternalValue } from '#/hooks/useInternalValue';
import { isDayInMonth, isOneDay } from '#/utils/date';
import { combineRenderers, rangeDayRenderer } from '#/utils/renderers';

export interface WithRangeSelectionProps {
    rangeStart?: Date;
    rangeEnd?: Date;
    onRangeChange?: (start: Date, end: Date) => void;
}

export function withRangeSelection() {
    return function withRangeSelectionDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({
            date: externalDate,
            rangeStart: externalRangeStart,
            rangeEnd: externalRangeEnd,
            dayRenderer,
            onDateChange,
            onRangeChange,
            ...props
        }: WithRangeSelectionProps & P) {
            const [date, setDate] = useInternalValue(
                new Date(),
                externalDate,
                onDateChange
            );
            const [rangeStart, setRangeStart] = useInternalValue(
                new Date(),
                externalRangeStart,
                (d) => onRangeChange?.call({}, d, rangeEnd)
            );
            const [rangeEnd, setRangeEnd] = useInternalValue(
                new Date(),
                externalRangeEnd,
                (d) => onRangeChange?.call({}, rangeStart, d)
            );

            useEffect(() => {
                if (!isDayInMonth(rangeStart, date)) {
                    setDate(rangeStart);
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [rangeStart]);

            useEffect(() => {
                if (!isDayInMonth(rangeEnd, date)) {
                    setDate(rangeEnd);
                }
                // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [rangeEnd]);

            const handleDayCellClick = useCallback(
                (d: Date) => {
                    if (isOneDay(d, rangeEnd)) {
                        setRangeStart(d);
                    } else if (d < rangeStart) {
                        setRangeStart(d);
                    } else {
                        setRangeEnd(d);
                    }
                },
                [rangeEnd, rangeStart, setRangeEnd, setRangeStart]
            );

            const newProps: P = {
                ...props,
                date: date,
                onDateChange: setDate,
                dayRenderer: combineRenderers(
                    dayRenderer,
                    rangeDayRenderer(rangeStart, rangeEnd, handleDayCellClick)
                ),
            } as P;

            return <BaseComponent {...newProps} />;
        };
    };
}
