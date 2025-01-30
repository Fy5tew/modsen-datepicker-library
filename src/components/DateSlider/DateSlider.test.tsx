import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from '#/contexts/theme';

import { DateSlider } from '.';

jest.mock('#/contexts/icons', () => ({
    useIcons: jest.fn(() => ({ prev: 'prev-icon.png', next: 'next-icon.png' })),
}));

describe('DateSlider', () => {
    const mockFormatTitle = jest.fn((date) => date.toDateString());

    it('renders formatted date title', () => {
        render(
            <ThemeProvider>
                <DateSlider
                    date={new Date('2024-01-01')}
                    formatTitle={mockFormatTitle}
                />
            </ThemeProvider>
        );

        expect(screen.getByText('Mon Jan 01 2024')).toBeInTheDocument();
    });

    it('calls onClick when title is clicked', () => {
        const handleClick = jest.fn();
        render(
            <ThemeProvider>
                <DateSlider
                    date={new Date()}
                    formatTitle={mockFormatTitle}
                    onClick={handleClick}
                />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText(mockFormatTitle(new Date())));
        expect(handleClick).toHaveBeenCalled();
    });

    it('calls onPrevClick when previous button is clicked', () => {
        const handlePrevClick = jest.fn();
        render(
            <ThemeProvider>
                <DateSlider
                    date={new Date()}
                    formatTitle={mockFormatTitle}
                    onPrevClick={handlePrevClick}
                />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByAltText('<<'));
        expect(handlePrevClick).toHaveBeenCalled();
    });

    it('calls onNextClick when next button is clicked', () => {
        const handleNextClick = jest.fn();
        render(
            <ThemeProvider>
                <DateSlider
                    date={new Date()}
                    formatTitle={mockFormatTitle}
                    onNextClick={handleNextClick}
                />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByAltText('>>'));
        expect(handleNextClick).toHaveBeenCalled();
    });
});
