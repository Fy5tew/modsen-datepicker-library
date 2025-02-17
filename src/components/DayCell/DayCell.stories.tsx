import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DayCell } from '.';
import {
    DefaultCell,
    DisabledCell,
    HolydayCell,
    RangeDoubleCell,
    RangeEndCell,
    RangeMiddleCell,
    RangeStartCell,
    SelectedCell,
    TodoCell,
    WeekendCell,
} from './styled';

type Story = StoryObj<typeof DayCell>;

const meta: Meta<typeof DayCell> = {
    title: 'Component/DayCell',
    component: DayCell,
    render: ({ date, ...props }) => (
        <DayCell date={new Date(date)} {...props} />
    ),
    argTypes: {
        date: {
            control: 'date',
        },
        RenderComponent: { table: { disable: true } },
        formatDate: { table: { disable: true } },
        onClick: { table: { disable: true } },
    },
    args: {
        date: new Date(),
        onClick: fn(),
    },
};

export const Default: Story = {
    args: {
        RenderComponent: DefaultCell,
    },
};

export const Disabled: Story = {
    args: {
        RenderComponent: DisabledCell,
    },
};

export const Selected: Story = {
    args: {
        RenderComponent: SelectedCell,
    },
};

export const RangeStart: Story = {
    args: {
        RenderComponent: RangeStartCell,
    },
};

export const RangeMiddle: Story = {
    args: {
        RenderComponent: RangeMiddleCell,
    },
};

export const RangeEnd: Story = {
    args: {
        RenderComponent: RangeEndCell,
    },
};

export const RangeDouble: Story = {
    args: {
        RenderComponent: RangeDoubleCell,
    },
};

export const Weekend: Story = {
    args: {
        RenderComponent: WeekendCell,
    },
};

export const Holyday: Story = {
    args: {
        RenderComponent: HolydayCell,
    },
};

export const Todo: Story = {
    args: {
        RenderComponent: TodoCell(),
    },
};

export default meta;
