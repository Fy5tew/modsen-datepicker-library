import { createContext, ReactNode, useContext } from 'react';

import { FORMATTERS } from '#/constants/formatters';
import { Formatters } from '#/types/formatters';
import { DeepPartial } from '#/types/utility';
import { deepMerge } from '#/utils/objects';

const DEFAULT_FORMATTERS = FORMATTERS;

interface FormattersProviderProps {
    formatters?: DeepPartial<Formatters>;
    children?: ReactNode;
}

export const FormattersContext = createContext(FORMATTERS);

export function FormattersProvider({
    formatters = {},
    children,
}: FormattersProviderProps) {
    return (
        <FormattersContext.Provider
            value={deepMerge(DEFAULT_FORMATTERS, formatters)}
        >
            {children}
        </FormattersContext.Provider>
    );
}

export function useFormatters() {
    return useContext(FormattersContext);
}
