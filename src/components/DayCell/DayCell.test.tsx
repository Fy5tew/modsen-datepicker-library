import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';

import { useFormatters } from '#/contexts/formatters';
import { ThemeProvider } from '#/contexts/theme';

import { DayCell } from '.';
import { DayCellRenderProps } from './styled';

jest.mock('#/contexts/formatters', () => ({
    useFormatters: jest.fn(),
}));

const date = new Date(2025, 0, 1);

describe('DayCell Component', () => {
    beforeEach(() => {
        (useFormatters as jest.Mock).mockReturnValue({
            formatDayCell: (date: Date) => date.toISOString(),
        });
    });

    it('renders with formatted date', () => {
        const { getByText } = render(
            <ThemeProvider>
                <DayCell date={date} />
            </ThemeProvider>
        );
        expect(getByText(date.toISOString())).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(
            <ThemeProvider>
                <DayCell date={date} onClick={handleClick} />
            </ThemeProvider>
        );
        fireEvent.click(getByText(date.toISOString()));
        expect(handleClick).toHaveBeenCalledWith(date);
    });

    it('renders with custom RenderComponent', () => {
        const CustomComponent: React.FC<DayCellRenderProps> = ({
            children,
            ...props
        }) => <button {...props}>{children}</button>;
        const { getByText } = render(
            <ThemeProvider>
                <DayCell date={date} RenderComponent={CustomComponent} />
            </ThemeProvider>
        );
        expect(getByText(date.toISOString())).toBeInTheDocument();
    });

    it('uses formatDate prop if provided', () => {
        const formatDate = (date: Date) => `Formatted: ${date.toDateString()}`;
        const { getByText } = render(
            <ThemeProvider>
                <DayCell date={date} formatDate={formatDate} />
            </ThemeProvider>
        );
        expect(getByText('Formatted: Wed Jan 01 2025')).toBeInTheDocument();
    });
});
