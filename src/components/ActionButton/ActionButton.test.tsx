import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { ThemeProvider } from '#/contexts/theme';

import { ActionButton } from '.';

describe('ActionButton Component', () => {
    it('renders button with children text', () => {
        const { getByText } = render(
            <ThemeProvider>
                <ActionButton>Click me</ActionButton>
            </ThemeProvider>
        );

        expect(getByText('Click me')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <ThemeProvider>
                <ActionButton onClick={handleClick}>Click me</ActionButton>
            </ThemeProvider>
        );

        fireEvent.click(getByText('Click me'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when there is no onClick handler', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <ThemeProvider>
                <ActionButton>Click me</ActionButton>
            </ThemeProvider>
        );

        fireEvent.click(getByText('Click me'));

        expect(handleClick).toHaveBeenCalledTimes(0);
    });

    it('renders without children', () => {
        const { container } = render(
            <ThemeProvider>
                <ActionButton />
            </ThemeProvider>
        );

        expect(container.firstChild).toBeInTheDocument();
    });
});
