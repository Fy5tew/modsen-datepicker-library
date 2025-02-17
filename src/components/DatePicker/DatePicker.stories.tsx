import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { withDaySelection } from '#/decorators/withDaySelection';
import { withDisabledDays } from '#/decorators/withDisabledDays';
import { withMondayFirst } from '#/decorators/withMondayFirst';
import { withWeekends } from '#/decorators/withWeekends';

import { DatePicker } from '.';

const CustomCalendar = new CalendarBuilder()
    .applyDecorator(withMondayFirst())
    .applyDecorator(withWeekends())
    .applyDecorator(withDisabledDays())
    .applyDecorator(withDaySelection())
    .build();

type Story = StoryObj<typeof DatePicker>;

const meta: Meta<typeof DatePicker> = {
    title: 'Component/DatePicker',
    component: DatePicker,
    render: ({ date, ...props }) => (
        <DatePicker date={date && new Date(date)} {...props} />
    ),
    argTypes: {
        date: {
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
