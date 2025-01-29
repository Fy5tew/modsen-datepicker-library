import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';

import { withDaySelection } from '.';

const DaySelectionCalendar = new CalendarBuilder()
    .applyDecorator(withDaySelection())
    .build();

type Story = StoryObj<typeof DaySelectionCalendar>;

const meta: Meta<typeof DaySelectionCalendar> = {
    title: 'Decorator/withDaySelection',
    component: DaySelectionCalendar,
    render: ({ date, selectedDay, ...props }) => (
        <DaySelectionCalendar
            date={date && new Date(date)}
            selectedDay={selectedDay && new Date(selectedDay)}
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
        weekdayDatasourceManager: { table: { disable: true } },
        dayDatasourceManager: { table: { disable: true } },
        onDateChange: { table: { disable: true } },
        onDaySelect: { table: { disable: true } },
    },
    args: {
        onDateChange: fn(),
        onDaySelect: fn(),
    },
};

export const Default: Story = {};

export default meta;
