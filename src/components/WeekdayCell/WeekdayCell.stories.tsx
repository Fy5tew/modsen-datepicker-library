import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Day } from '#/constants/days';

import { WeekdayCell } from '.';

type Story = StoryObj<typeof WeekdayCell>;

const meta: Meta<typeof WeekdayCell> = {
    title: 'Component/WeekdayCell',
    component: WeekdayCell,
    argTypes: {
        day: {
            control: {
                type: 'select',
                labels: Object.fromEntries(
                    Object.entries(Day).filter(([k]) => !isNaN(Number(k)))
                ),
            },
            options: Object.values(Day).filter((v) => typeof v === 'number'),
        },
        formatDay: { table: { disable: true } },
        onClick: { table: { disable: true } },
    },
    args: {
        onClick: fn(),
    },
};

export const Monday: Story = {
    args: {
        day: Day.Monday,
    },
};

export const Tuesday: Story = {
    args: {
        day: Day.Tuesday,
    },
};

export const Wednesday: Story = {
    args: {
        day: Day.Wednesday,
    },
};

export const Thursday: Story = {
    args: {
        day: Day.Thursday,
    },
};

export const Friday: Story = {
    args: {
        day: Day.Friday,
    },
};

export const Saturday: Story = {
    args: {
        day: Day.Saturday,
    },
};

export const Sunday: Story = {
    args: {
        day: Day.Sunday,
    },
};

export default meta;
