import { ComponentProps, ComponentType } from 'react';
import styled from 'styled-components';

export type DayCellRenderComponent = ComponentType<
    ComponentProps<typeof BaseCell>
>;

export const BaseCell = styled.button`
    border: none;
    border-radius: 8px;
    padding: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.fonts.calendar};
    font-size: ${({ theme }) => theme.fontSizes.calendarCell}px;
    font-weight: ${({ theme }) => theme.fontWeights.calendarCell};
    color: ${({ theme }) => theme.colors.calendarCellFg};
    background: ${({ theme }) => theme.colors.calendarCellBg};

    transition:
        color 0.1s ease-in-out,
        background 0.1s ease-in-out;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.colors.calendarCellHoverFg};
            background: ${({ theme }) => theme.colors.calendarCellHoverBg};
        }
    }
`;

export const DefaultCell = styled(BaseCell)`
    color: ${({ theme }) => theme.colors.calendarCellFg};
    background: ${({ theme }) => theme.colors.calendarCellBg};
`;

export const DisabledCell = styled(BaseCell)`
    color: ${({ theme }) => theme.colors.calendarCellDisabledFg};
    background: ${({ theme }) => theme.colors.calendarCellDisabledBg};
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.calendarCellDisabledFg};
        }
    }
`;

export const LockedCell = styled(DisabledCell)`
    opacity: 0.3;

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.colors.calendarCellBg};
        }
    }
`;

export const SelectedCell = styled(BaseCell)`
    color: ${({ theme }) => theme.colors.calendarCellSelectedFg};
    background: ${({ theme }) => theme.colors.calendarCellSelectedBg};
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.calendarCellSelectedBg};
        }
    }
`;

export const RangeStartCell = styled(BaseCell)`
    color: ${({ theme }) => theme.colors.calendarCellRangeStartFg};
    background: ${({ theme }) => theme.colors.calendarCellRangeStartBg};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.calendarCellRangeStartBg};
        }
    }
`;

export const RangeMiddleCell = styled(BaseCell)`
    color: ${({ theme }) => theme.colors.calendarCellRangeMiddleFg};
    background: ${({ theme }) => theme.colors.calendarCellRangeMiddleBg};
    border-radius: 0;
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.calendarCellRangeMiddleFg};
        }
    }
`;

export const RangeEndCell = styled(BaseCell)`
    color: ${({ theme }) => theme.colors.calendarCellRangeEndFg};
    background: ${({ theme }) => theme.colors.calendarCellRangeEndBg};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.calendarCellRangeEndBg};
        }
    }
`;

export const RangeDoubleCell = styled(BaseCell)`
    color: ${({ theme }) => theme.colors.calendarCellRangeEndFg};
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.calendarCellRangeStartBg} 50%,
        ${({ theme }) => theme.colors.calendarCellRangeEndBg} 50% 100%
    );
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.calendarCellRangeEndBg};
        }
    }
`;

export const WeekendCell = styled(BaseCell)`
    color: ${({ theme }) => theme.colors.calendarCellWeekendFg};
    background: ${({ theme }) => theme.colors.calendarCellWeekendBg};
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.calendarCellWeekendFg};
        }
    }
`;

export const HolydayCell = styled(BaseCell)`
    color: ${({ theme }) => theme.colors.calendarCellHolidayFg};
    background: ${({ theme }) => theme.colors.calendarCellHolidayBg};
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.calendarCellHolidayFg};
        }
    }
`;

export const TodoCell = (Base: DayCellRenderComponent = BaseCell) => styled(
    Base
)`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0.3em;
        transform: translateX(-50%);
        height: 0.3em;
        width: 0.3em;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.calendarCellTodoMarker};
    }
`;
