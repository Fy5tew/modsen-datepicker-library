import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '#/contexts/theme';

import { ErrorBoundary } from '.';

const ProblematicComponent = () => {
    throw new Error('Test error');
};

describe('ErrorBoundary', () => {
    it('renders children when there is no error', () => {
        render(
            <ThemeProvider>
                <ErrorBoundary>
                    <div>Safe Component</div>
                </ErrorBoundary>
            </ThemeProvider>
        );
        expect(screen.getByText('Safe Component')).toBeInTheDocument();
    });

    it('renders fallback UI when an error occurs', () => {
        const mockConsoleError = jest
            .spyOn(console, 'error')
            .mockImplementation(() => {});

        render(
            <ThemeProvider>
                <ErrorBoundary>
                    <ProblematicComponent />
                </ErrorBoundary>
            </ThemeProvider>
        );

        expect(
            screen.getByText('Uncaught error has occured!')
        ).toBeInTheDocument();
        expect(screen.getByText(/Test error/)).toBeInTheDocument();

        mockConsoleError.mockRestore();
    });
});
