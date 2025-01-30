import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from '#/contexts/theme';

import { DatePicker } from '.';

jest.mock('#/contexts/icons', () => ({
    useIcons: jest.fn(() => ({
        calendar: 'calendar-icon.png',
        clear: 'clear-icon.png',
        prev: 'prev-icon.png',
        next: 'next-icon.png',
    })),
}));

describe('DatePicker Component', () => {
    it('renders DatePicker component with label', () => {
        render(
            <ThemeProvider>
                <DatePicker label="Select a date" />
            </ThemeProvider>
        );
        expect(screen.getByText('Select a date')).toBeInTheDocument();
    });

    it('renders DatePicker with placeholder', () => {
        render(
            <ThemeProvider>
                <DatePicker placeholder="Choose a date" />
            </ThemeProvider>
        );
        expect(
            screen.getByPlaceholderText('Choose a date')
        ).toBeInTheDocument();
    });

    it('opens overlay when button is clicked', () => {
        render(
            <ThemeProvider>
                <DatePicker />
            </ThemeProvider>
        );

        const btn = screen.getByAltText('📅');
        fireEvent.click(btn);

        expect(screen.getByText(/[A-z]* [0-9]*/)).toBeVisible();
    });

    it('closes overlay when button is clicked again', () => {
        render(
            <ThemeProvider>
                <DatePicker />
            </ThemeProvider>
        );

        const btn = screen.getByAltText('📅');
        fireEvent.click(btn);

        const overlay = screen.getByText(/[A-z]* [0-9]*/);
        fireEvent.click(btn);

        expect(overlay).not.toBeVisible();
    });

    it('fires onChange when a day is selected', () => {
        const mockOnChange = jest.fn();
        render(
            <ThemeProvider>
                <DatePicker onChange={mockOnChange} />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByRole('textbox'));
        fireEvent.click(screen.getByText('15'));

        expect(mockOnChange).toHaveBeenCalledWith(expect.any(Date));
    });
});
