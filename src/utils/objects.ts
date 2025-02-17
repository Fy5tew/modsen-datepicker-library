import { DeepPartial } from '#/types/utility';

export function deepMerge<T>(full: T, partial: DeepPartial<T>): T {
    const result = { ...full };

    for (const key in partial) {
        if (
            partial[key] &&
            typeof partial[key] === 'object' &&
            !Array.isArray(partial[key])
        ) {
            result[key] = deepMerge(full[key], partial[key]);
        } else {
            result[key] = partial[key] as T[typeof key];
        }
    }

    return result;
}
