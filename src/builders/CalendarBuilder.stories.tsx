import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { withDateLimits } from '#/decorators/withDateLimits';
import { withDaySelection } from '#/decorators/withDaySelection';
import { withDisabledDays } from '#/decorators/withDisabledDays';
import { withHolidays } from '#/decorators/withHolidays';
import { withMondayFirst } from '#/decorators/withMondayFirst';
import { withRangeSelection } from '#/decorators/withRangeSelection';
import { withTodos } from '#/decorators/withTodos';
import { withWeekends } from '#/decorators/withWeekends';

import { CalendarBuilder } from './CalendarBuilder';

const DefaultCalendar = new CalendarBuilder().build();

const CustomCalendar = new CalendarBuilder(DefaultCalendar)
    .applyDecorator(withMondayFirst())
    .applyDecorator(withWeekends())
    .applyDecorator(withHolidays())
    .applyDecorator(withDisabledDays())
    .applyDecorator(withDaySelection())
    .applyDecorator(withRangeSelection())
    .applyDecorator(withDateLimits())
    .build();

const TodosCustomCalendar = new CalendarBuilder(CustomCalendar)
    .applyDecorator(withTodos())
    .build();

type Story = StoryObj<typeof CustomCalendar>;

const meta: Meta<typeof CustomCalendar> = {
    title: 'Builder/Calendar',
    component: CustomCalendar,
    render: ({
        date,
        selectedDay,
        rangeStart,
        rangeEnd,
        minDate,
        maxDate,
        ...props
    }) => (
        <CustomCalendar
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
        weekdayDatasourceManager: { table: { disable: true } },
        dayDatasourceManager: { table: { disable: true } },
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

export const Default: Story = {
    render: ({ date, ...props }) => (
        <DefaultCalendar date={date && new Date(date)} {...props} />
    ),
};

export const Customized: Story = {};

export const CustomizedWithTodos: Story = {
    render: ({
        date,
        selectedDay,
        rangeStart,
        rangeEnd,
        minDate,
        maxDate,
        ...props
    }) => (
        <TodosCustomCalendar
            date={date && new Date(date)}
            selectedDay={selectedDay && new Date(selectedDay)}
            rangeStart={rangeStart && new Date(rangeStart)}
            rangeEnd={rangeEnd && new Date(rangeEnd)}
            minDate={minDate && new Date(minDate)}
            maxDate={maxDate && new Date(maxDate)}
            {...props}
        />
    ),
};

export default meta;
