import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from '#/contexts/theme';

import { DateInput } from '.';

jest.mock('#/contexts/icons', () => ({
    useIcons: jest.fn(() => ({
        calendar: 'calendar-icon.png',
        clear: 'clear-icon.png',
    })),
}));

describe('DateInput Component', () => {
    it('renders DateInput with default props', () => {
        render(
            <ThemeProvider>
                <DateInput />
            </ThemeProvider>
        );
        expect(screen.getByText('Date')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Choose Date')).toBeInTheDocument();
    });

    it('renders with an external date', () => {
        const date = new Date('2023-01-01');
        render(
            <ThemeProvider>
                <DateInput date={date} />
            </ThemeProvider>
        );
        expect(screen.getByDisplayValue('01/01/2023')).toBeInTheDocument();
    });

    it('updates input value on change and validates format', () => {
        render(
            <ThemeProvider>
                <DateInput />
            </ThemeProvider>
        );
        const input = screen.getByPlaceholderText('Choose Date');
        fireEvent.change(input, { target: { value: '12/31/2023' } });
        expect(input).toHaveValue('12/31/2023');
    });

    it('shows error on invalid date format', () => {
        render(
            <ThemeProvider>
                <DateInput />
            </ThemeProvider>
        );
        const input = screen.getByPlaceholderText('Choose Date');
        fireEvent.change(input, { target: { value: 'invalid date' } });
        expect(screen.getByText('Invalid date format')).toBeInTheDocument();
    });

    it('clears input when clear button is clicked', () => {
        render(
            <ThemeProvider>
                <DateInput />
            </ThemeProvider>
        );
        const input = screen.getByPlaceholderText('Choose Date');
        fireEvent.change(input, { target: { value: '12/31/2023' } });
        const clearButton = screen.getByAltText('✖');
        fireEvent.click(clearButton);
        expect(input).toHaveValue('');
    });
});
