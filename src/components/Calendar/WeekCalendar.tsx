import { DateSlider } from '#/components/DateSlider';
import { COLUMNS_DAYS_COUNT, ROWS_DAYS_WEEK_COUNT } from '#/constants/calendar';
import { useFormatters } from '#/contexts/formatters';
import { getNextWeekDate, getPrevWeekDate } from '#/utils/date';

import { MonthGrid } from './MonthGrid';
import { Wrapper } from './styled';
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
        <Wrapper>
            <DateSlider
                date={date}
                formatTitle={formatCalendarSliderWeekTitle}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
            />
            <MonthGrid
                date={date}
                daysRows={ROWS_DAYS_WEEK_COUNT}
                daysColumns={COLUMNS_DAYS_COUNT}
                weekdayDatasource={weekdayDatasource}
                dayDatasource={dayDatasource}
                dayRenderer={dayRenderer}
            />
        </Wrapper>
    );
}
