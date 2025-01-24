import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import {
    dateDayNumberFormatter,
    dateMonthFullNameFormatter,
    dateMonthYearFormatter,
    dateYearFormatter,
} from '#/utils/formatters';

import { DateSlider } from '.';

type Story = StoryObj<typeof DateSlider>;

const meta: Meta<typeof DateSlider> = {
    title: 'Component/DateSlider',
    component: DateSlider,
    render: ({ date, ...props }) => (
        <DateSlider date={new Date(date)} {...props} />
    ),
    argTypes: {
        date: {
            control: 'date',
        },
        formatTitle: { table: { disable: true } },
        onClick: { table: { disable: true } },
        onPrevClick: { table: { disable: true } },
        onNextClick: { table: { disable: true } },
    },
    args: {
        onClick: fn(),
        onPrevClick: fn(),
        onNextClick: fn(),
    },
};

export const Day: Story = {
    args: {
        date: new Date(),
        formatTitle: dateDayNumberFormatter,
    },
};

export const Month: Story = {
    args: {
        date: new Date(),
        formatTitle: dateMonthFullNameFormatter,
    },
};

export const Year: Story = {
    args: {
        date: new Date(),
        formatTitle: dateYearFormatter,
    },
};

export const MonthYear: Story = {
    args: {
        date: new Date(),
        formatTitle: dateMonthYearFormatter,
    },
};

export default meta;
