import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { CalendarType } from '#/constants/calendar';

import { withDisabledDays } from '.';

const DisabledDaysCalendar = new CalendarBuilder()
    .applyDecorator(withDisabledDays())
    .build();

type Story = StoryObj<typeof DisabledDaysCalendar>;

const meta: Meta<typeof DisabledDaysCalendar> = {
    title: 'Decorator/withDisabledDays',
    component: DisabledDaysCalendar,
    render: ({ date, ...props }) => (
        <DisabledDaysCalendar date={date && new Date(date)} {...props} />
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
