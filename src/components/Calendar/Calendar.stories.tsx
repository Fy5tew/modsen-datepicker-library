import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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
        weekdayDatasourceManager: { table: { disable: true } },
        dayDatasourceManager: { table: { disable: true } },
        dayRenderer: { table: { disable: true } },
        onDateChange: { table: { disable: true } },
    },
    args: {
        onDateChange: fn(),
    },
};

export const Default: Story = {};

export default meta;
