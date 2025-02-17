import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { CalendarType } from '#/constants/calendar';

import { withSundayFirst } from '.';

const SundayFirstCalendar = new CalendarBuilder()
    .applyDecorator(withSundayFirst())
    .build();

type Story = StoryObj<typeof SundayFirstCalendar>;

const meta: Meta<typeof SundayFirstCalendar> = {
    title: 'Decorator/withSundayFirst',
    component: SundayFirstCalendar,
    render: ({ date, ...props }) => (
        <SundayFirstCalendar date={date && new Date(date)} {...props} />
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
