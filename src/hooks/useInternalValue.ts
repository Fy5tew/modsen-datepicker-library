import { useCallback, useEffect, useState } from 'react';

export function useInternalValue<T>(
    defaultValue: T,
    externalValue?: T,
    onChange?: (v: T) => void
): [T, (newValue: T) => void] {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = externalValue ?? internalValue;

    useEffect(() => {
        if (externalValue) {
            setInternalValue(externalValue);
        }
    }, [externalValue]);

    const setCurrentValue = useCallback(
        (newValue: T) => {
            if (!externalValue) {
                setInternalValue(newValue);
            }
            onChange?.call({}, newValue);
        },
        [externalValue, onChange]
    );

    return [currentValue, setCurrentValue];
}
