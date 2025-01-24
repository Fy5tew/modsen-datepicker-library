import { ReactNode } from 'react';

import { Button } from './styled';

interface ActionButtonProps {
    children?: ReactNode;
    onClick?: () => void;
}

export function ActionButton({ children, onClick }: ActionButtonProps) {
    const handleClick = () => onClick?.call({});

    return <Button onClick={handleClick}>{children}</Button>;
}
