import { ErrorInfo } from 'react';

import { Header, Text, Title, Wrapper } from './styled';

export interface FallbackProps {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export function Fallback({ error, errorInfo }: FallbackProps) {
    return (
        <Wrapper>
            <Header>Uncaught error has occured!</Header>
            {error && (
                <Title>
                    {error.name}: {error.message}
                </Title>
            )}
            {errorInfo && <Text>{errorInfo.componentStack}</Text>}
        </Wrapper>
    );
}
