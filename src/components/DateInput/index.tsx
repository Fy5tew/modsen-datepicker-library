import { ChangeEvent, useEffect, useState } from 'react';

import { useIcons } from '#/contexts/icons';
import { useInternalValue } from '#/hooks/useInternalValue';

import {
    Button,
    ErrorMessage,
    Icon,
    Input,
    InputWrapper,
    Label,
    Wrapper,
} from './styled';
import { formatDate, parseDateString } from './utils';

const DEFAULT_LABEL = 'Date';
const DEFAULT_PLACEHOLDER = 'Choose Date';

export interface DateInputProps {
    date?: Date;
    label?: string;
    placeholder?: string;
    onChange?: (date: Date) => void;
    onButtonClick?: () => void;
}

export function DateInput({
    date: externalDate,
    label = DEFAULT_LABEL,
    placeholder = DEFAULT_PLACEHOLDER,
    onChange,
    onButtonClick,
}: DateInputProps) {
    const { calendar, clear } = useIcons();
    const [date, setDate] = useInternalValue(
        new Date(),
        externalDate,
        onChange
    );
    const [inputValue, setInputValue] = useState(formatDate(date));
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (externalDate) {
            setInputValue(formatDate(externalDate));
            setError(null);
        }
    }, [externalDate]);

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
        const parsed = parseDateString(value);
        if (parsed !== null) {
            setError(null);
            setDate(parsed);
        } else {
            setError('Invalid date format');
        }
    };

    const handleDateClear = () => {
        setInputValue('');
    };

    return (
        <Wrapper>
            <Label>
                {label} {error && <ErrorMessage>{error}</ErrorMessage>}
            </Label>
            <InputWrapper>
                <Button onClick={onButtonClick}>
                    <Icon src={calendar} alt="" />
                </Button>
                <Input
                    placeholder={placeholder}
                    type="text"
                    pattern="\d{2}\/\d{2}\/\d{4}"
                    maxLength={15}
                    value={inputValue}
                    onChange={handleDateChange}
                />
                <Button
                    $isHidden={inputValue.length <= 0}
                    onClick={handleDateClear}
                >
                    <Icon src={clear} alt="" />
                </Button>
            </InputWrapper>
        </Wrapper>
    );
}
