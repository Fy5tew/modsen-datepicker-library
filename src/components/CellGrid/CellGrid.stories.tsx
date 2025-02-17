import { Meta, StoryObj } from '@storybook/react';

import { DayCell } from '#/components/DayCell';
import { WeekdayCell } from '#/components/WeekdayCell';
import { Day } from '#/constants/days';

import {
    DefaultCell,
    DisabledCell,
    RangeEndCell,
    RangeMiddleCell,
    RangeStartCell,
    SelectedCell,
} from '../DayCell/styled';
import { CellGrid } from '.';

const labelCels = [
    <WeekdayCell day={Day.Monday} />,
    <WeekdayCell day={Day.Tuesday} />,
    <WeekdayCell day={Day.Wednesday} />,
    <WeekdayCell day={Day.Thursday} />,
    <WeekdayCell day={Day.Friday} />,
    <WeekdayCell day={Day.Saturday} />,
    <WeekdayCell day={Day.Sunday} />,
];

const monthCells = [
    <DayCell date={new Date('2024-12-23')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2024-12-24')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2024-01-25')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2024-01-26')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2024-01-27')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2024-01-28')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2024-01-29')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2024-12-30')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2024-12-31')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2025-01-01')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-02')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-03')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-04')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-05')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-06')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-07')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-08')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-09')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-10')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-11')} RenderComponent={SelectedCell} />,
    <DayCell date={new Date('2025-01-12')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-13')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-14')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-15')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-16')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-17')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-18')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-19')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-20')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-01-21')} RenderComponent={RangeStartCell} />,
    <DayCell date={new Date('2025-01-22')} RenderComponent={RangeMiddleCell} />,
    <DayCell date={new Date('2025-01-23')} RenderComponent={RangeMiddleCell} />,
    <DayCell date={new Date('2025-01-24')} RenderComponent={RangeMiddleCell} />,
    <DayCell date={new Date('2025-01-25')} RenderComponent={RangeMiddleCell} />,
    <DayCell date={new Date('2025-01-26')} RenderComponent={RangeMiddleCell} />,
    <DayCell date={new Date('2025-01-27')} RenderComponent={RangeMiddleCell} />,
    <DayCell date={new Date('2025-01-28')} RenderComponent={RangeMiddleCell} />,
    <DayCell date={new Date('2025-01-29')} RenderComponent={RangeMiddleCell} />,
    <DayCell date={new Date('2025-01-30')} RenderComponent={RangeEndCell} />,
    <DayCell date={new Date('2025-01-31')} RenderComponent={DefaultCell} />,
    <DayCell date={new Date('2025-02-01')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2025-02-02')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2025-02-03')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2025-02-04')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2025-02-05')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2025-02-06')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2025-02-07')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2025-02-08')} RenderComponent={DisabledCell} />,
    <DayCell date={new Date('2025-02-09')} RenderComponent={DisabledCell} />,
];

const weekCels = monthCells.slice(14, 21);

const monthLabelCels = [...labelCels, ...monthCells.slice(6)];

const weekLabelCels = [...labelCels, ...weekCels];

type Story = StoryObj<typeof CellGrid>;

const meta: Meta<typeof CellGrid> = {
    title: 'Component/CellGrid',
    component: CellGrid,
    argTypes: {
        children: { table: { disable: true } },
    },
};

export const Default: Story = {
    args: {
        rows: 0,
        columns: 0,
        overflow: true,
        children: monthCells,
    },
};

export const WeekDays: Story = {
    args: {
        rows: 1,
        columns: 7,
        overflow: false,
        children: labelCels,
    },
};

export const Week: Story = {
    args: {
        rows: 1,
        columns: 7,
        overflow: false,
        children: weekCels,
    },
};

export const Month: Story = {
    args: {
        rows: 7,
        columns: 7,
        overflow: false,
        children: monthCells,
    },
};

export const WeekCalendar: Story = {
    args: {
        rows: 2,
        columns: 7,
        overflow: false,
        children: weekLabelCels,
    },
};

export const MonthCalendar: Story = {
    args: {
        rows: 7,
        columns: 7,
        overflow: false,
        children: monthLabelCels,
    },
};

export default meta;
