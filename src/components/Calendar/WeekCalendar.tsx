import {
    COLUMNS_COUNT,
    ROWS_DAYS_WEEK_COUNT,
    ROWS_WEEKDAYS_COUNT,
} from '#/constants/calendar';
import { useFormatters } from '#/contexts/formatters';
import { getNextWeekDate, getPrevWeekDate } from '#/utils/date';

import { CellGrid } from '../CellGrid';
import { DateSlider } from '../DateSlider';
import { DayCell } from '../DayCell';
import { WeekdayCell } from '../WeekdayCell';
import { MonthCalendarWrapper } from './styled';
import { WeekCalendarProps } from './types';

export function WeekCalendar({
    date,
    weekdayDatasource,
    dayDatasource,
    dayRenderer,
    onDateChange,
}: WeekCalendarProps) {
    const { formatCalendarSliderWeekTitle } = useFormatters();

    const handlePrevClick = () => {
        onDateChange(getPrevWeekDate(date));
    };

    const handleNextClick = () => {
        onDateChange(getNextWeekDate(date));
    };

    return (
        <MonthCalendarWrapper>
            <DateSlider
                date={date}
                formatTitle={formatCalendarSliderWeekTitle}
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
                rows={ROWS_DAYS_WEEK_COUNT}
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
