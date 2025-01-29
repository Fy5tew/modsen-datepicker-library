import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { CalendarType } from '#/constants/calendar';

import { withMondayFirst } from '.';

const MondayFirstCalendar = new CalendarBuilder()
    .applyDecorator(withMondayFirst())
    .build();

type Story = StoryObj<typeof MondayFirstCalendar>;

const meta: Meta<typeof MondayFirstCalendar> = {
    title: 'Decorator/withMondayFirst',
    component: MondayFirstCalendar,
    render: ({ date, ...props }) => (
        <MondayFirstCalendar date={date && new Date(date)} {...props} />
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
