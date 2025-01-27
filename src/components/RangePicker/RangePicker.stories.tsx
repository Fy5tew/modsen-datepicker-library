import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { withDisabledDays } from '#/decorators/withDisabledDays';
import { withMondayFirst } from '#/decorators/withMondayFirst';
import { withRangeSelection } from '#/decorators/withRangeSelection';
import { withWeekends } from '#/decorators/withWeekends';

import { RangePicker } from '.';

const CustomCalendar = new CalendarBuilder()
    .applyDecorator(withMondayFirst())
    .applyDecorator(withWeekends())
    .applyDecorator(withDisabledDays())
    .applyDecorator(withRangeSelection())
    .build();

type Story = StoryObj<typeof RangePicker>;

const meta: Meta<typeof RangePicker> = {
    title: 'Component/RangePicker',
    component: RangePicker,
    render: ({ rangeStart, rangeEnd, ...props }) => (
        <RangePicker
            rangeStart={rangeStart && new Date(rangeStart)}
            rangeEnd={rangeEnd && new Date(rangeEnd)}
            {...props}
        />
    ),
    argTypes: {
        rangeStart: {
            control: 'date',
        },
        rangeEnd: {
            control: 'date',
        },
        onChange: { table: { disable: true } },
        Calendar: { table: { disable: true } },
    },
    args: {
        onChange: fn(),
    },
};

export const Default: Story = {};

export const WithCustomCalendar: Story = {
    args: {
        Calendar: CustomCalendar,
    },
};

export default meta;
