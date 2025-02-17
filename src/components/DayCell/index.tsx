import { useFormatters } from '#/contexts/formatters';

import { BaseCell, DayCellRenderComponent } from './styled';

export interface DayCellProps {
    date: Date;
    RenderComponent?: DayCellRenderComponent;
    formatDate?: (date: Date) => string;
    onClick?: (date: Date) => void;
}

export function DayCell({
    date,
    RenderComponent = BaseCell,
    formatDate,
    onClick,
}: DayCellProps) {
    const { formatDayCell } = useFormatters();

    const formattedDate = formatDate ? formatDate(date) : formatDayCell(date);

    const handleClick = () => onClick?.call({}, date);

    return (
        <RenderComponent onClick={handleClick}>{formattedDate}</RenderComponent>
    );
}
