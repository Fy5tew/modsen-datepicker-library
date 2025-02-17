import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarType } from '#/constants/calendar';

import { Calendar } from '.';

type Story = StoryObj<typeof Calendar>;

const meta: Meta<typeof Calendar> = {
    title: 'Component/Calendar',
    component: Calendar,
    render: ({ date, ...props }) => (
        <Calendar date={date && new Date(date)} {...props} />
    ),
    argTypes: {
        date: {
            control: 'date',
        },
        type: {
            control: 'select',
            options: Object.values(CalendarType).filter(
                (x) => typeof x === 'string'
            ),
            mapping: CalendarType,
        },
        weekdayDatasourceManager: { table: { disable: true } },
        dayDatasourceManager: { table: { disable: true } },
        dayRenderer: { table: { disable: true } },
        onDateChange: { table: { disable: true } },
    },
    args: {
        onDateChange: fn(),
    },
};

export const Week: Story = {
    args: {
        type: CalendarType.WEEK,
    },
};

export const Month: Story = {
    args: {
        type: CalendarType.MONTH,
    },
};

export const Year: Story = {
    args: {
        type: CalendarType.YEAR,
    },
};

export default meta;
