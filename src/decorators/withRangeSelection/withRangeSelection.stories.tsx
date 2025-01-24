import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';

import { withRangeSelection } from '.';

const RangeSelectionCalendar = new CalendarBuilder()
    .applyDecorator(withRangeSelection())
    .build();

type Story = StoryObj<typeof RangeSelectionCalendar>;

const meta: Meta<typeof RangeSelectionCalendar> = {
    title: 'Decorator/withRangeSelection',
    component: RangeSelectionCalendar,
    render: ({ date, rangeStart, rangeEnd, ...props }) => (
        <RangeSelectionCalendar
            date={date && new Date(date)}
            rangeStart={rangeStart && new Date(rangeStart)}
            rangeEnd={rangeEnd && new Date(rangeEnd)}
            {...props}
        />
    ),
    argTypes: {
        date: {
            control: 'date',
        },
        rangeStart: {
            control: 'date',
        },
        rangeEnd: {
            control: 'date',
        },
        weekdayDatasource: { table: { disable: true } },
        dayDatasource: { table: { disable: true } },
        onDateChange: { table: { disable: true } },
        onRangeChange: { table: { disable: true } },
    },
    args: {
        onDateChange: fn(),
        onRangeChange: fn(),
    },
};

export const Default: Story = {};

export default meta;
