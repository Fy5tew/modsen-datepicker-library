import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DateInput } from '.';

type Story = StoryObj<typeof DateInput>;

const meta: Meta<typeof DateInput> = {
    title: 'Component/DateInput',
    component: DateInput,
    render: ({ date, ...props }) => (
        <DateInput date={date && new Date(date)} {...props} />
    ),
    argTypes: {
        date: {
            control: 'date',
        },
        onChange: { table: { disable: true } },
        onButtonClick: { table: { disable: true } },
    },
    args: {
        onChange: fn(),
        onButtonClick: fn(),
    },
};

export const Default: Story = {};

export default meta;
