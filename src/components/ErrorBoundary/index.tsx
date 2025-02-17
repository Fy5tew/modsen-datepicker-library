import { Component, ComponentType, ErrorInfo, ReactNode } from 'react';

import { Fallback, FallbackProps } from './Fallback';

interface ErrorBoundaryProps {
    children?: ReactNode;
    FallbackComponent?: ComponentType<FallbackProps>;
}

type ErrorBoundaryState = {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
};

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    public state: ErrorBoundaryState = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error) {
        return { hasError: true, error: error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
        this.setState({ errorInfo: errorInfo });
    }

    public render() {
        const { children, FallbackComponent = Fallback } = this.props;
        const { hasError, error, errorInfo } = this.state;

        if (hasError) {
            return <FallbackComponent error={error} errorInfo={errorInfo} />;
        }

        return children;
    }
}
