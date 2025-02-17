import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { CalendarType } from '#/constants/calendar';

import { withDaySelection } from '../withDaySelection';
import { withTodos } from '.';

const TodosCalendar = new CalendarBuilder()
    .applyDecorator(withDaySelection())
    .applyDecorator(withTodos())
    .build();

type Story = StoryObj<typeof TodosCalendar>;

const meta: Meta<typeof TodosCalendar> = {
    title: 'Decorator/withTodos',
    component: TodosCalendar,
    render: ({ date, ...props }) => (
        <TodosCalendar date={date && new Date(date)} {...props} />
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
        onDaySelect: fn(),
    },
};

export const Default: Story = {};

export default meta;
