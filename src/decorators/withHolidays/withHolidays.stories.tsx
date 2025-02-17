import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { CalendarType } from '#/constants/calendar';

import { withHolidays } from '.';

const WeekendsCalendar = new CalendarBuilder()
    .applyDecorator(withHolidays())
    .build();

type Story = StoryObj<typeof WeekendsCalendar>;

const meta: Meta<typeof WeekendsCalendar> = {
    title: 'Decorator/withHolidays',
    component: WeekendsCalendar,
    render: ({ date, ...props }) => (
        <WeekendsCalendar date={date && new Date(date)} {...props} />
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
        onDateChange: { table: { disable: true } },
    },
    args: {
        onDateChange: fn(),
    },
};

export const Default: Story = {};

export default meta;
