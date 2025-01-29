import { DateSlider } from '#/components/DateSlider';
import {
    COLUMNS_DAYS_COUNT,
    ROWS_DAYS_MONTH_COUNT,
} from '#/constants/calendar';
import { useFormatters } from '#/contexts/formatters';
import { getNextMonthDate, getPrevMonthDate } from '#/utils/date';

import { MonthGrid } from './MonthGrid';
import { Wrapper } from './styled';
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
        <Wrapper>
            <DateSlider
                date={date}
                formatTitle={formatCalendarSliderMonthTitle}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
            />
            <MonthGrid
                date={date}
                daysRows={ROWS_DAYS_MONTH_COUNT}
                daysColumns={COLUMNS_DAYS_COUNT}
                weekdayDatasource={weekdayDatasource}
                dayDatasource={dayDatasource}
                dayRenderer={dayRenderer}
            />
        </Wrapper>
    );
}
