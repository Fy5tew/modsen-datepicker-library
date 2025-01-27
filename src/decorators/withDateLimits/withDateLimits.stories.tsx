import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';

import { withDaySelection } from '../withDaySelection';
import { withDateLimits } from '.';

const LimitedCalendar = new CalendarBuilder()
    .applyDecorator(withDateLimits())
    .build();
const LimitedDaySelectionCalendar = new CalendarBuilder()
    .applyDecorator(withDaySelection())
    .applyDecorator(withDateLimits())
    .build();

type Story = StoryObj<typeof LimitedCalendar>;

const meta: Meta<typeof LimitedCalendar> = {
    title: 'Decorator/withDateLimits',
    component: LimitedCalendar,
    render: ({ date, minDate, maxDate, ...props }) => (
        <LimitedCalendar
            date={date && new Date(date)}
            minDate={minDate && new Date(minDate)}
            maxDate={maxDate && new Date(maxDate)}
            {...props}
        />
    ),
    argTypes: {
        date: {
            control: 'date',
        },
        minDate: {
            control: 'date',
        },
        maxDate: {
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

export const WithOtherDecorators: Story = {
    render: ({ date, minDate, maxDate, ...props }) => (
        <LimitedDaySelectionCalendar
            date={date && new Date(date)}
            minDate={minDate && new Date(minDate)}
            maxDate={maxDate && new Date(maxDate)}
            {...props}
        />
    ),
};

export default meta;
