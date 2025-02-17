import { DayCellProps } from '#/components/DayCell';
import {
    DefaultCell,
    DisabledCell,
    HolydayCell,
    LockedCell,
    RangeDoubleCell,
    RangeEndCell,
    RangeMiddleCell,
    RangeStartCell,
    SelectedCell,
    TodoCell,
    WeekendCell,
} from '#/components/DayCell/styled';
import { DayRenderer, Renderer } from '#/types/renderers';

import {
    isDayInMonth,
    isDayInRange,
    isOneDay,
    isRangeEnd,
    isRangeStart,
} from './date';

export function combineRenderers<P>(
    oldRenderer?: Renderer<P>,
    newRenderer?: Renderer<P>
): Renderer<P> {
    return function renderer(props: P) {
        let newProps = newRenderer?.call({}, props) ?? props;
        newProps = oldRenderer?.call({}, newProps) ?? newProps;
        return newProps;
    };
}

export function combineCellOnClick(
    oldOnClick: DayCellProps['onClick'],
    newOnClick: DayCellProps['onClick']
): DayCellProps['onClick'] {
    return function onClick(date) {
        newOnClick?.call({}, date);
        oldOnClick?.call({}, date);
    };
}

export const defaultDayRenderer: DayRenderer = (props) => ({
    ...props,
    RenderComponent: DefaultCell,
});

export const disabledDayRenderer =
    (currentDate: Date): DayRenderer =>
    ({ date, RenderComponent, ...props }) => ({
        ...props,
        date,
        RenderComponent: !isDayInMonth(date, currentDate)
            ? DisabledCell
            : RenderComponent,
    });

export const limitDayRenderer =
    (minDate: Date, maxDate: Date): DayRenderer =>
    ({ date, onClick, RenderComponent, ...props }) => {
        const isInRange = isDayInRange(date, minDate, maxDate);
        return {
            ...props,
            date,
            onClick: isInRange ? onClick : () => {},
            RenderComponent: isInRange ? RenderComponent : LockedCell,
        };
    };

export const selectedDayRenderer =
    (selectedDay: Date, onClick?: DayCellProps['onClick']): DayRenderer =>
    ({ date, RenderComponent, onClick: originalOnClick, ...props }) => ({
        ...props,
        date,
        RenderComponent: isOneDay(selectedDay, date)
            ? SelectedCell
            : RenderComponent,
        onClick: combineCellOnClick(originalOnClick, onClick),
    });

export const rangeDayRenderer =
    (
        rangeStart: Date,
        rangeEnd: Date,
        onClick?: DayCellProps['onClick']
    ): DayRenderer =>
    ({ date, RenderComponent, onClick: originalOnClick, ...props }) => {
        if (isOneDay(rangeStart, rangeEnd) && isOneDay(date, rangeStart)) {
            RenderComponent = RangeDoubleCell;
        } else if (isRangeEnd(date, rangeStart, rangeEnd)) {
            RenderComponent = RangeEndCell;
        } else if (isRangeStart(date, rangeStart, rangeEnd)) {
            RenderComponent = RangeStartCell;
        } else if (isDayInRange(date, rangeStart, rangeEnd)) {
            RenderComponent = RangeMiddleCell;
        }

        return {
            ...props,
            date,
            RenderComponent,
            onClick: combineCellOnClick(originalOnClick, onClick),
        };
    };

export const weekendDayRenderer =
    (isWeekend: (date: Date) => boolean): DayRenderer =>
    ({ date, RenderComponent, ...props }) => ({
        ...props,
        date,
        RenderComponent: isWeekend(date) ? WeekendCell : RenderComponent,
    });

export const holidayDayRenderer =
    (isHoliday: (date: Date) => boolean): DayRenderer =>
    ({ date, RenderComponent, ...props }) => ({
        ...props,
        date,
        RenderComponent: isHoliday(date) ? HolydayCell : RenderComponent,
    });

export const todoDayRenderer =
    (hasTodo: (day: Date) => boolean): DayRenderer =>
    ({ date, RenderComponent, ...props }) => ({
        date,
        RenderComponent: hasTodo(date)
            ? TodoCell(RenderComponent)
            : RenderComponent,
        ...props,
    });
