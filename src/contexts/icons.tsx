import { createContext, ReactNode, useContext } from 'react';

import { ICONS } from '#/constants/icons';
import { IconSources } from '#/types/icons';
import { DeepPartial } from '#/types/utility';
import { deepMerge } from '#/utils/objects';

const DEFAULT_ICONS = ICONS;

interface IconsProviderProps {
    icons?: DeepPartial<IconSources>;
    children?: ReactNode;
}

export const IconsContext = createContext(ICONS);

export function IconsProvider({ icons = {}, children }: IconsProviderProps) {
    return (
        <IconsContext.Provider value={deepMerge(DEFAULT_ICONS, icons)}>
            {children}
        </IconsContext.Provider>
    );
}

export function useIcons() {
    return useContext(IconsContext);
}
