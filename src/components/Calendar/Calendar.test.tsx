import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { CalendarType } from '#/constants/calendar';
import { ThemeProvider } from '#/contexts/theme';

import { Calendar } from '.';

jest.mock('#/contexts/icons', () => ({
    useIcons: jest.fn(() => ({ prev: 'prev-icon.png', next: 'next-icon.png' })),
}));

describe('Calendar Component', () => {
    it('renders Week calendar correctly', () => {
        render(
            <ThemeProvider>
                <Calendar
                    type={CalendarType.WEEK}
                    date={new Date(2025, 0, 30)}
                    onDateChange={jest.fn()}
                />
            </ThemeProvider>
        );

        expect(screen.getByText('30')).toBeInTheDocument();
    });

    it('renders Month calendar correctly', () => {
        render(
            <ThemeProvider>
                <Calendar
                    type={CalendarType.MONTH}
                    date={new Date(2025, 0, 30)}
                    onDateChange={jest.fn()}
                />
            </ThemeProvider>
        );

        expect(screen.getByText('January 2025')).toBeInTheDocument();
    });

    it('renders Year calendar correctly', () => {
        render(
            <ThemeProvider>
                <Calendar
                    type={CalendarType.YEAR}
                    date={new Date(2025, 0, 30)}
                    onDateChange={jest.fn()}
                />
            </ThemeProvider>
        );

        expect(screen.getByText('2025')).toBeInTheDocument();
    });

    it('throws error for unknown calendar type', () => {
        const rendering = () =>
            render(
                <ThemeProvider>
                    <Calendar
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        type={'unknown' as any}
                        date={new Date(2025, 0, 30)}
                        onDateChange={jest.fn()}
                    />
                </ThemeProvider>
            );

        expect(rendering).toThrow(
            TypeError('Unknown `type` prop value: unknown')
        );
    });

    it('fires onDateChange when date is updated', () => {
        const onDateChangeMock = jest.fn();
        render(
            <ThemeProvider>
                <Calendar
                    type={CalendarType.MONTH}
                    date={new Date(2025, 0, 30)}
                    onDateChange={onDateChangeMock}
                />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByAltText('>>'));

        expect(onDateChangeMock).toHaveBeenCalled();
    });
});
