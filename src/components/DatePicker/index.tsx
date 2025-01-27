import { ComponentType, RefObject } from 'react';
import { useRef } from 'react';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { CalendarProps } from '#/components/Calendar';
import { DateInput } from '#/components/DateInput';
import {
    withDaySelection,
    WithDaySelectionProps,
} from '#/decorators/withDaySelection';
import { useFlag } from '#/hooks/useFlag';
import { useInternalValue } from '#/hooks/useInternalValue';
import { useOnClickOutside } from '#/hooks/useOnClickOutside';

import { Overlay, Wrapper } from './styled';

const DefaultCalendar = new CalendarBuilder()
    .applyDecorator(withDaySelection())
    .build();

export interface DatePickerProps {
    date?: Date;
    label?: string;
    placeholder?: string;
    Calendar?: ComponentType<WithDaySelectionProps & CalendarProps>;
    onChange?: (date: Date) => void;
}

export function DatePicker({
    date: externalDate,
    label,
    placeholder,
    Calendar = DefaultCalendar,
    onChange,
}: DatePickerProps) {
    const [date, setDate] = useInternalValue(
        new Date(),
        externalDate,
        onChange
    );
    const {
        flag: isOverlayVisible,
        disable: closeOverlay,
        toggle: toggleOverlay,
    } = useFlag(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(wrapperRef as RefObject<HTMLDivElement>, closeOverlay);

    return (
        <Wrapper ref={wrapperRef}>
            <DateInput
                date={date}
                label={label}
                placeholder={placeholder}
                onChange={setDate}
                onButtonClick={toggleOverlay}
            />
            <Overlay $isVisible={isOverlayVisible}>
                <Calendar selectedDay={date} onDaySelect={setDate} />
            </Overlay>
        </Wrapper>
    );
}
