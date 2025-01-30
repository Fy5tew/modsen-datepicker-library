import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { Day } from '#/constants/days';
import { ThemeProvider } from '#/contexts/theme';

import { WeekdayCell } from '.';

const mockFormatDay = jest.fn((day) => `Formatted ${Day[day]}`);
const mockOnClick = jest.fn();

describe('WeekdayCell Component', () => {
    it('renders with formatted day', () => {
        render(
            <ThemeProvider>
                <WeekdayCell day={Day.Monday} formatDay={mockFormatDay} />
            </ThemeProvider>
        );
        expect(screen.getByText('Formatted Monday')).toBeInTheDocument();
    });

    it('calls onClick with correct day when clicked', () => {
        render(
            <ThemeProvider>
                <WeekdayCell day={Day.Tuesday} onClick={mockOnClick} />
            </ThemeProvider>
        );
        const cell = screen.getByRole('button');
        fireEvent.click(cell);
        expect(mockOnClick).toHaveBeenCalledWith(Day.Tuesday);
    });
});
