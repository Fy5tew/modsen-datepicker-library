import { CellGrid } from '#/components/CellGrid';
import { DayCell } from '#/components/DayCell';
import { WeekdayCell } from '#/components/WeekdayCell';
import {
    COLUMNS_WEEKDAYS_COUNT,
    ROWS_WEEKDAYS_COUNT,
} from '#/constants/calendar';

import { CalendarGridProps } from './types';

export function MonthGrid({
    date,
    daysRows,
    daysColumns,
    dayRenderer,
    weekdayDatasource,
    dayDatasource,
}: CalendarGridProps) {
    return (
        <>
            <CellGrid
                rows={ROWS_WEEKDAYS_COUNT}
                columns={COLUMNS_WEEKDAYS_COUNT}
                overflow={false}
            >
                {weekdayDatasource(date).map((d) => (
                    <WeekdayCell key={d} day={d} />
                ))}
            </CellGrid>
            <CellGrid rows={daysRows} columns={daysColumns} overflow={false}>
                {dayDatasource(date).map((d) => (
                    <DayCell key={d.getTime()} {...dayRenderer({ date: d })} />
                ))}
            </CellGrid>
        </>
    );
}
