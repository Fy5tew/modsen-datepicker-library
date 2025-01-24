import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';

import { withWeekends } from '.';

const WeekendsCalendar = new CalendarBuilder()
    .applyDecorator(withWeekends())
    .build();

type Story = StoryObj<typeof WeekendsCalendar>;

const meta: Meta<typeof WeekendsCalendar> = {
    title: 'Decorator/withWeekends',
    component: WeekendsCalendar,
    render: ({ date, ...props }) => (
        <WeekendsCalendar date={date && new Date(date)} {...props} />
    ),
    argTypes: {
        date: {
            control: 'date',
        },
        weekdayDatasource: { table: { disable: true } },
        dayDatasource: { table: { disable: true } },
        onDateChange: { table: { disable: true } },
    },
    args: {
        onDateChange: fn(),
    },
};

export const Default: Story = {};

export default meta;
