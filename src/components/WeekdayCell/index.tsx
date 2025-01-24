import { Day } from '#/constants/days';
import { useFormatters } from '#/contexts/formatters';

import { Cell } from './styled';

interface WeekdayCellProps {
    day: Day;
    formatDay?: (day: Day) => string;
    onClick?: ((day: Day) => void) | (() => void);
}

export function WeekdayCell({ day, formatDay, onClick }: WeekdayCellProps) {
    const { formatWeekdayCell } = useFormatters();

    const formattedDay = formatDay ? formatDay(day) : formatWeekdayCell(day);

    const handleClick = () => onClick?.call({}, day);

    return <Cell onClick={handleClick}>{formattedDay}</Cell>;
}
