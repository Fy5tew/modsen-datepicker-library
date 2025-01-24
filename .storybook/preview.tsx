import type { Preview } from '@storybook/react';

import { FormattersProvider } from '#/contexts/formatters';
import { IconsProvider } from '#/contexts/icons';
import { ThemeProvider } from '#/contexts/theme';

const preview: Preview = {
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <FormattersProvider>
                    <IconsProvider>
                        <Story />
                    </IconsProvider>
                </FormattersProvider>
            </ThemeProvider>
        ),
    ],
};

export default preview;
