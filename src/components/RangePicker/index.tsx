import { ComponentType, RefObject, useRef } from 'react';

import { CalendarBuilder } from '#/builders/CalendarBuilder';
import { CalendarProps } from '#/components/Calendar/types';
import {
    withRangeSelection,
    WithRangeSelectionProps,
} from '#/decorators/withRangeSelection';
import { useFlag } from '#/hooks/useFlag';
import { useInternalValue } from '#/hooks/useInternalValue';
import { useOnClickOutside } from '#/hooks/useOnClickOutside';

import { DateInput } from '../DateInput';
import { ErrorBoundary } from '../ErrorBoundary';
import { InputWrapper, Overlay, Wrapper } from './styled';

const DefaultCalendar = new CalendarBuilder()
    .applyDecorator(withRangeSelection())
    .build();

export interface RangePickerProps {
    rangeStart?: Date;
    rangeEnd?: Date;
    startLabel?: string;
    startPlaceholder?: string;
    endLabel?: string;
    endPlaceholder?: string;
    Calendar?: ComponentType<WithRangeSelectionProps & CalendarProps>;
    onChange?: (start: Date, end: Date) => void;
}

export function RangePicker({
    rangeStart: externalRangeStart,
    rangeEnd: externalRangeEnd,
    startLabel = 'From',
    startPlaceholder,
    endLabel = 'To',
    endPlaceholder,
    Calendar = DefaultCalendar,
    onChange,
}: RangePickerProps) {
    const [rangeStart, setRangeStart] = useInternalValue(
        new Date(),
        externalRangeStart,
        (d) => onChange?.call({}, d, rangeEnd)
    );
    const [rangeEnd, setRangeEnd] = useInternalValue(
        new Date(),
        externalRangeEnd,
        (d) => onChange?.call({}, rangeStart, d)
    );
    const {
        flag: isStartOverlayOpen,
        disable: closeStartOverlay,
        toggle: toggleStartOverlay,
    } = useFlag(false);
    const {
        flag: isEndOverlayOpen,
        disable: closeEndOverlay,
        toggle: toggleEndOverlay,
    } = useFlag(false);
    const startWrapperRef = useRef<HTMLDivElement>(null);
    const endWrapperRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(
        startWrapperRef as RefObject<HTMLDivElement>,
        closeStartOverlay
    );
    useOnClickOutside(
        endWrapperRef as RefObject<HTMLDivElement>,
        closeEndOverlay
    );

    const handleRangeChange = (start: Date, end: Date) => {
        if (rangeStart !== start) {
            setRangeStart(start);
        }
        if (rangeEnd !== end) {
            setRangeEnd(end);
        }
    };

    return (
        <ErrorBoundary>
            <Wrapper>
                <InputWrapper ref={startWrapperRef}>
                    <DateInput
                        date={rangeStart}
                        label={startLabel}
                        placeholder={startPlaceholder}
                        onChange={setRangeStart}
                        onButtonClick={toggleStartOverlay}
                    />
                    <Overlay $isVisible={isStartOverlayOpen}>
                        <Calendar
                            rangeStart={rangeStart}
                            rangeEnd={rangeEnd}
                            onRangeChange={handleRangeChange}
                        />
                    </Overlay>
                </InputWrapper>
                <InputWrapper ref={endWrapperRef}>
                    <DateInput
                        date={rangeEnd}
                        label={endLabel}
                        placeholder={endPlaceholder}
                        onChange={setRangeEnd}
                        onButtonClick={toggleEndOverlay}
                    />
                    <Overlay $isVisible={isEndOverlayOpen}>
                        <Calendar
                            rangeStart={rangeStart}
                            rangeEnd={rangeEnd}
                            onRangeChange={handleRangeChange}
                        />
                    </Overlay>
                </InputWrapper>
            </Wrapper>
        </ErrorBoundary>
    );
}
