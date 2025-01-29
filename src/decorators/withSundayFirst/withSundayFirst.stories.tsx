import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';

import { withSundayFirst } from '.';

const SundayFirstCalendar = new CalendarBuilder()
    .applyDecorator(withSundayFirst())
    .build();

type Story = StoryObj<typeof SundayFirstCalendar>;

const meta: Meta<typeof SundayFirstCalendar> = {
    title: 'Decorator/withSundayFirst',
    component: SundayFirstCalendar,
    render: ({ date, ...props }) => (
        <SundayFirstCalendar date={date && new Date(date)} {...props} />
    ),
    argTypes: {
        date: {
            control: 'date',
        },
        weekdayDatasourceManager: { table: { disable: true } },
        dayDatasourceManager: { table: { disable: true } },
        onDateChange: { table: { disable: true } },
    },
    args: {
        onDateChange: fn(),
    },
};

export const Default: Story = {};

export default meta;
