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
    WeekendCell,
} from '#/components/DayCell/styled';
import { Renderer } from '#/types/renderers';

import {
    combineCellOnClick,
    combineRenderers,
    disabledDayRenderer,
    holidayDayRenderer,
    limitDayRenderer,
    rangeDayRenderer,
    selectedDayRenderer,
    todoDayRenderer,
    weekendDayRenderer,
} from '../renderers';

describe('Renderers Utils', () => {
    describe('combineRenderers', () => {
        it('should combine two renderers', () => {
            const rendererA: Renderer<DayCellProps> = (props) => ({
                ...props,
                value: 'A',
            });
            const rendererB: Renderer<DayCellProps> = (props) => ({
                ...props,
                value: 'B',
            });

            const combinedRenderer = combineRenderers(rendererB, rendererA);

            expect(combinedRenderer({} as DayCellProps)).toEqual({
                value: 'B',
            });
        });

        it('should handle undefined oldRenderer', () => {
            const rendererB: Renderer<DayCellProps> = (props) => ({
                ...props,
                value: 'B',
            });

            const combinedRenderer = combineRenderers(undefined, rendererB);

            expect(combinedRenderer({} as DayCellProps)).toEqual({
                value: 'B',
            });
        });

        it('should handle undefined newRenderer', () => {
            const rendererA: Renderer<DayCellProps> = (props) => ({
                ...props,
                value: 'A',
            });

            const combinedRenderer = combineRenderers(rendererA, undefined);

            expect(combinedRenderer({} as DayCellProps)).toEqual({
                value: 'A',
            });
        });
    });

    describe('combineCellOnClick', () => {
        it('should combine two onClick handlers', () => {
            const mockOnClickA: DayCellProps['onClick'] = jest.fn();
            const mockOnClickB: DayCellProps['onClick'] = jest.fn();
            const combinedOnClick = combineCellOnClick(
                mockOnClickA,
                mockOnClickB
            );

            const date = new Date();
            combinedOnClick?.call({}, date);

            expect(mockOnClickA).toHaveBeenCalledWith(date);
            expect(mockOnClickB).toHaveBeenCalledWith(date);
        });

        it('should handle undefined oldOnClick', () => {
            const mockOnClickB: DayCellProps['onClick'] = jest.fn();
            const combinedOnClick = combineCellOnClick(undefined, mockOnClickB);

            const date = new Date();
            combinedOnClick?.call({}, date);

            expect(mockOnClickB).toHaveBeenCalledWith(date);
        });

        it('should handle undefined newOnClick', () => {
            const mockOnClickA: DayCellProps['onClick'] = jest.fn();
            const combinedOnClick = combineCellOnClick(mockOnClickA, undefined);

            const date = new Date();
            combinedOnClick?.call({}, date);

            expect(mockOnClickA).toHaveBeenCalledWith(date);
        });
    });

    describe('selectedDayRenderer', () => {
        it('should render the selected cell for the selected day', () => {
            const selectedDay = new Date(2025, 0, 15);
            const date = new Date(2025, 0, 15);
            const result = selectedDayRenderer(selectedDay)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).toBe(SelectedCell);
        });

        it('should render the default cell for a non-selected day', () => {
            const selectedDay = new Date(2025, 0, 15);
            const date = new Date(2025, 0, 16);
            const result = selectedDayRenderer(selectedDay)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).toBe(DefaultCell);
        });
    });

    describe('disabledDayRenderer', () => {
        it('should render DisabledCell for dates outside the current month', () => {
            const currentDate = new Date(2025, 0, 1);
            const date = new Date(2025, 1, 1);
            const result = disabledDayRenderer(currentDate)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).toBe(DisabledCell);
        });

        it('should render the default cell for dates inside the current month', () => {
            const currentDate = new Date(2025, 0, 1);
            const date = new Date(2025, 0, 15);
            const result = disabledDayRenderer(currentDate)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).toBe(DefaultCell);
        });
    });

    describe('limitDayRenderer', () => {
        it('should render LockedCell for dates outside the range', () => {
            const minDate = new Date(2025, 0, 1);
            const maxDate = new Date(2025, 0, 31);
            const date = new Date(2025, 1, 1);
            const result = limitDayRenderer(
                minDate,
                maxDate
            )({ date, RenderComponent: DefaultCell });

            expect(result.RenderComponent).toBe(LockedCell);
        });

        it('should render the default cell for dates inside the range', () => {
            const minDate = new Date(2025, 0, 1);
            const maxDate = new Date(2025, 0, 31);
            const date = new Date(2025, 0, 15);
            const result = limitDayRenderer(
                minDate,
                maxDate
            )({ date, RenderComponent: DefaultCell });

            expect(result.RenderComponent).toBe(DefaultCell);
        });

        it('should disable the onClick for dates outside the range', () => {
            const minDate = new Date(2025, 0, 1);
            const maxDate = new Date(2025, 0, 31);
            const date = new Date(2025, 1, 1);
            const mockOnClick: DayCellProps['onClick'] = jest.fn();
            const result = limitDayRenderer(
                minDate,
                maxDate
            )({ date, onClick: mockOnClick });

            result.onClick?.call({}, date);
            expect(mockOnClick).not.toHaveBeenCalled();
        });
    });

    describe('weekendDayRenderer', () => {
        it('should render WeekendCell for weekends', () => {
            const isWeekend = (date: Date) =>
                date.getDay() === 6 || date.getDay() === 0;
            const date = new Date(2025, 0, 4);
            const result = weekendDayRenderer(isWeekend)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).toBe(WeekendCell);
        });

        it('should render DefaultCell for weekdays', () => {
            const isWeekend = (date: Date) =>
                date.getDay() === 6 || date.getDay() === 0;
            const date = new Date(2025, 0, 6);
            const result = weekendDayRenderer(isWeekend)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).toBe(DefaultCell);
        });
    });

    describe('holidayDayRenderer', () => {
        it('should render HolydayCell for holidays', () => {
            const isHoliday = (date: Date) =>
                date.getDate() === 25 && date.getMonth() === 11;
            const date = new Date(2025, 11, 25);
            const result = holidayDayRenderer(isHoliday)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).toBe(HolydayCell);
        });

        it('should render DefaultCell for non-holidays', () => {
            const isHoliday = (date: Date) =>
                date.getDate() === 25 && date.getMonth() === 11;
            const date = new Date(2025, 0, 1);
            const result = holidayDayRenderer(isHoliday)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).toBe(DefaultCell);
        });
    });

    describe('rangeDayRenderer', () => {
        const rangeStart = new Date(2025, 0, 10);
        const rangeEnd = new Date(2025, 0, 15);

        it('should render RangeStartCell for the start date of the range', () => {
            const date = rangeStart;
            const result = rangeDayRenderer(
                rangeStart,
                rangeEnd
            )({ date, RenderComponent: DefaultCell });
            expect(result.RenderComponent).toBe(RangeStartCell);
        });

        it('should render RangeEndCell for the end date of the range', () => {
            const date = rangeEnd;
            const result = rangeDayRenderer(
                rangeStart,
                rangeEnd
            )({ date, RenderComponent: DefaultCell });
            expect(result.RenderComponent).toBe(RangeEndCell);
        });

        it('should render RangeMiddleCell for dates in between the range', () => {
            const date = new Date(2025, 0, 12);
            const result = rangeDayRenderer(
                rangeStart,
                rangeEnd
            )({ date, RenderComponent: DefaultCell });
            expect(result.RenderComponent).toBe(RangeMiddleCell);
        });

        it('should render RangeDoubleCell for the same start and end date', () => {
            const date = new Date(2025, 0, 10);
            const result = rangeDayRenderer(
                rangeStart,
                rangeStart
            )({ date, RenderComponent: DefaultCell });
            expect(result.RenderComponent).toBe(RangeDoubleCell);
        });
    });

    describe('todoDayRenderer', () => {
        const hasTodo = (date: Date) => date.getDate() === 15;

        it('should render TodoCell when there is a todo for the day', () => {
            const date = new Date(2025, 0, 15);
            const result = todoDayRenderer(hasTodo)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).not.toBe(DefaultCell);
        });

        it('should render the default cell when there is no todo for the day', () => {
            const date = new Date(2025, 0, 16);
            const result = todoDayRenderer(hasTodo)({
                date,
                RenderComponent: DefaultCell,
            });

            expect(result.RenderComponent).toBe(DefaultCell);
        });
    });
});
