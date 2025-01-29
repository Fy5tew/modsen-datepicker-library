import {
    COLUMNS_COUNT,
    ROWS_DAYS_MONTH_COUNT,
    ROWS_WEEKDAYS_COUNT,
} from '#/constants/calendar';
import { useFormatters } from '#/contexts/formatters';
import { getNextMonthDate, getPrevMonthDate } from '#/utils/date';

import { CellGrid } from '../CellGrid';
import { DateSlider } from '../DateSlider';
import { DayCell } from '../DayCell';
import { WeekdayCell } from '../WeekdayCell';
import { MonthCalendarWrapper } from './styled';
import { MonthCalendarProps } from './types';

export function MonthCalendar({
    date,
    weekdayDatasource,
    dayDatasource,
    dayRenderer,
    onDateChange,
}: MonthCalendarProps) {
    const { formatCalendarSliderMonthTitle } = useFormatters();

    const handlePrevClick = () => {
        onDateChange(getPrevMonthDate(date));
    };

    const handleNextClick = () => {
        onDateChange(getNextMonthDate(date));
    };

    return (
        <MonthCalendarWrapper>
            <DateSlider
                date={date}
                formatTitle={formatCalendarSliderMonthTitle}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
            />
            <CellGrid
                rows={ROWS_WEEKDAYS_COUNT}
                columns={COLUMNS_COUNT}
                overflow={false}
            >
                {weekdayDatasource(date).map((d) => (
                    <WeekdayCell key={d} day={d} />
                ))}
            </CellGrid>
            <CellGrid
                rows={ROWS_DAYS_MONTH_COUNT}
                columns={COLUMNS_COUNT}
                overflow={false}
            >
                {dayDatasource(date).map((d) => (
                    <DayCell key={d.getTime()} {...dayRenderer({ date: d })} />
                ))}
            </CellGrid>
        </MonthCalendarWrapper>
    );
}
