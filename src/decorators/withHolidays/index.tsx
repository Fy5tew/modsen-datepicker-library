import { ComponentType } from 'react';

import { CalendarProps } from '#/components/Calendar';
import { defaultIsHoliday } from '#/utils/date';
import { combineRenderers, holidayDayRenderer } from '#/utils/renderers';

const DEFAULT_HOLIDAY_CHECKER = defaultIsHoliday;

export interface WithHolidaysProps {
    isHoliday?: (date: Date) => boolean;
}

export function withHolidays(
    holidayChecker: WithHolidaysProps['isHoliday'] = DEFAULT_HOLIDAY_CHECKER
) {
    return function withHolidaysDecorator<P extends CalendarProps>(
        BaseComponent: ComponentType<P>
    ) {
        return function WrappedComponent({
            isHoliday,
            dayRenderer,
            ...props
        }: WithHolidaysProps & P) {
            const newProps: P = {
                ...props,
                dayRenderer: combineRenderers(
                    dayRenderer,
                    holidayDayRenderer(isHoliday ?? holidayChecker)
                ),
            } as P;
            return <BaseComponent {...newProps} />;
        };
    };
}
