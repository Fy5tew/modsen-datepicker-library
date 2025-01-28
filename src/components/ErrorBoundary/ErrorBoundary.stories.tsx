import { Meta, StoryObj } from '@storybook/react';

import { ErrorBoundary } from '.';
import { FallbackProps } from './Fallback';

const NormalComponent = () => <h1>This is normal component</h1>;

const ErrorComponent = () => {
    throw new Error('This is error from error component');
};

const CustomFallback = ({ error }: FallbackProps) => (
    <>
        <h1>Custom Fallback</h1>
        <p>
            {error?.name}: {error?.message}
        </p>
    </>
);

const meta: Meta<typeof ErrorBoundary> = {
    title: 'Component/ErrorBoundary',
    component: ErrorBoundary,
    argTypes: {
        children: { table: { disable: true } },
        FallbackComponent: { table: { disable: true } },
    },
};

type Story = StoryObj<typeof ErrorBoundary>;

export const Normal: Story = {
    args: {
        children: <NormalComponent />,
    },
};

export const WithError: Story = {
    args: {
        children: <ErrorComponent />,
    },
};

export const WithCustomFallback: Story = {
    args: {
        children: <ErrorComponent />,
        FallbackComponent: CustomFallback,
    },
};

export default meta;
