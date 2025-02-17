import { Context, ReactNode } from 'react';
import {
    ThemeContext as StyledThemeContext,
    ThemeProvider as StyledThemeProvider,
    useTheme as styledUseTheme,
} from 'styled-components';

import { THEME } from '#/constants/themes';
import { Theme } from '#/types/theme';
import { DeepPartial } from '#/types/utility';
import { deepMerge } from '#/utils/objects';

const DEFAULT_THEME = THEME;

interface ThemeProviderProps {
    theme?: DeepPartial<Theme>;
    children?: ReactNode;
}

export const ThemeContext: Context<Theme | undefined> = StyledThemeContext;

export function ThemeProvider({ children, theme = {} }: ThemeProviderProps) {
    return (
        <StyledThemeProvider theme={deepMerge(DEFAULT_THEME, theme)}>
            {children}
        </StyledThemeProvider>
    );
}

export function useTheme(): Theme {
    return styledUseTheme();
}
