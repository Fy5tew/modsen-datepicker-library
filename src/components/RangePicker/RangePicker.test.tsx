import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from '#/contexts/theme';

import { RangePicker } from '.';

jest.mock('#/contexts/icons', () => ({
    useIcons: jest.fn(() => ({
        calendar: 'calendar-icon.png',
        clear: 'clear-icon.png',
        prev: 'prev-icon.png',
        next: 'next-icon.png',
    })),
}));

describe('RangePicker Component', () => {
    it('renders RangePicker with start and end labels', () => {
        render(
            <ThemeProvider>
                <RangePicker startLabel="Start" endLabel="End" />
            </ThemeProvider>
        );
        expect(screen.getByText('Start')).toBeInTheDocument();
        expect(screen.getByText('End')).toBeInTheDocument();
    });

    it('renders RangePicker with placeholder texts', () => {
        render(
            <ThemeProvider>
                <RangePicker
                    startPlaceholder="Start date"
                    endPlaceholder="End date"
                />
            </ThemeProvider>
        );
        expect(screen.getByPlaceholderText('Start date')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('End date')).toBeInTheDocument();
    });

    it('opens start date overlay when the start date input button is clicked', () => {
        render(
            <ThemeProvider>
                <RangePicker />
            </ThemeProvider>
        );

        const startDateButton = screen.getAllByAltText('📅')[0];
        fireEvent.click(startDateButton);

        expect(screen.getAllByText(/[A-z]* [0-9]*/)[0]).toBeVisible();
    });

    it('opens end date overlay when the end date input button is clicked', () => {
        render(
            <ThemeProvider>
                <RangePicker />
            </ThemeProvider>
        );

        const endDateButton = screen.getAllByAltText('📅')[1];
        fireEvent.click(endDateButton);

        expect(screen.getAllByText(/[A-z]* [0-9]*/)[1]).toBeVisible();
    });

    it('closes start date overlay when button is clicked twice', () => {
        render(
            <ThemeProvider>
                <RangePicker />
            </ThemeProvider>
        );

        const startDateButton = screen.getAllByAltText('📅')[0];
        fireEvent.click(startDateButton);

        const overlay = screen.getAllByText(/[A-z]* [0-9]*/)[0];
        expect(overlay).toBeVisible();

        fireEvent.click(startDateButton);

        expect(overlay).not.toBeVisible();
    });

    it('fires onChange when a range is selected', () => {
        const mockOnChange = jest.fn();
        render(
            <ThemeProvider>
                <RangePicker onChange={mockOnChange} />
            </ThemeProvider>
        );

        fireEvent.click(screen.getAllByAltText('📅')[0]);
        fireEvent.click(screen.getAllByText('15')[0]);
        fireEvent.click(screen.getAllByAltText('📅')[1]);
        fireEvent.click(screen.getAllByText('20')[1]);

        expect(mockOnChange).toHaveBeenCalledWith(
            expect.any(Date),
            expect.any(Date)
        );
    });

    it('updates the range start and end dates correctly', () => {
        render(
            <ThemeProvider>
                <RangePicker
                    rangeStart={new Date(2025, 0, 1)}
                    rangeEnd={new Date(2025, 0, 10)}
                />
            </ThemeProvider>
        );

        const startDateInput = screen.getAllByRole('textbox')[0];
        const endDateInput = screen.getAllByRole('textbox')[1];

        expect(startDateInput).toHaveValue('01/01/2025');
        expect(endDateInput).toHaveValue('10/01/2025');
    });
});
