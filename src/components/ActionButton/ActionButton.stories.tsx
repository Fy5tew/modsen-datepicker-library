import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ActionButton } from '.';

type Story = StoryObj<typeof ActionButton>;

const meta: Meta<typeof ActionButton> = {
    title: 'Component/ActionButton',
    component: ActionButton,
    argTypes: {
        children: {
            control: 'text',
        },
    },
    args: {
        onClick: fn(),
    },
};

export const Default: Story = {
    args: {
        children: 'Clear',
    },
};

export default meta;
