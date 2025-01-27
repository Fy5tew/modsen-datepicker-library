import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { withDateLimits } from '#/decorators/withDateLimits';
import { withDaySelection } from '#/decorators/withDaySelection';
import { withDisabledDays } from '#/decorators/withDisabledDays';
import { withHolidays } from '#/decorators/withHolidays';
import { withMondayFirst } from '#/decorators/withMondayFirst';
import { withRangeSelection } from '#/decorators/withRangeSelection';
import { withWeekends } from '#/decorators/withWeekends';

import { CalendarBuilder } from './CalendarBuilder';

const Calendar = new CalendarBuilder()
    .applyDecorator(withMondayFirst())
    .applyDecorator(withWeekends())
    .applyDecorator(withHolidays())
    .applyDecorator(withDisabledDays())
    .applyDecorator(withDaySelection())
    .applyDecorator(withRangeSelection())
    .applyDecorator(withDateLimits())
    .build();

type Story = StoryObj<typeof Calendar>;

const meta: Meta<typeof Calendar> = {
    title: 'Builder/Calendar',
    component: Calendar,
    render: ({
        date,
        selectedDay,
        rangeStart,
        rangeEnd,
        minDate,
        maxDate,
        ...props
    }) => (
        <Calendar
            date={date && new Date(date)}
            selectedDay={selectedDay && new Date(selectedDay)}
            rangeStart={rangeStart && new Date(rangeStart)}
            rangeEnd={rangeEnd && new Date(rangeEnd)}
            minDate={minDate && new Date(minDate)}
            maxDate={maxDate && new Date(maxDate)}
            {...props}
        />
    ),
    argTypes: {
        date: {
            control: 'date',
        },
        selectedDay: {
            control: 'date',
        },
        rangeStart: {
            control: 'date',
        },
        rangeEnd: {
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
        dayRenderer: { table: { disable: true } },
        onDateChange: { table: { disable: true } },
        onDaySelect: { table: { disable: true } },
    },
    args: {
        onDateChange: fn(),
        onDaySelect: fn(),
        onRangeChange: fn(),
    },
};

export const Default: Story = {};

export default meta;
