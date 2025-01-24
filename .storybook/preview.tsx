import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        layout: 'centered',
    },
    decorators: [(Story) => <Story />],
};

export default preview;
