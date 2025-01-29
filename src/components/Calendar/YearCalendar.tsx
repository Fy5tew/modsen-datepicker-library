import { CellGrid } from '#/components/CellGrid';
import { DateSlider } from '#/components/DateSlider';
import {
    COLUMNS_DAYS_COUNT,
    COLUMNS_YEAR_COUNT,
    ROWS_DAYS_MONTH_COUNT,
    ROWS_YEAR_COUNT,
} from '#/constants/calendar';
import { useFormatters } from '#/contexts/formatters';
import { getNextYearDate, getPrevYearDate } from '#/utils/date';

import { MonthGrid } from './MonthGrid';
import { MonthTitle, Wrapper, YearMonthWrapper } from './styled';
import { YearCalendarProps } from './types';

export function YearCalendar({
    date,
    weekdayDatasource,
    yearDatasource,
    dayDatasource,
    dayRenderer,
    onDateChange,
}: YearCalendarProps) {
    const { formatCalendarSliderYearTitle, formatYearCalendarMonthTitle } =
        useFormatters();

    const handlePrevClick = () => {
        onDateChange(getPrevYearDate(date));
    };

    const handleNextClick = () => {
        onDateChange(getNextYearDate(date));
    };

    return (
        <Wrapper>
            <DateSlider
                date={date}
                formatTitle={formatCalendarSliderYearTitle}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
            />
            <CellGrid
                rows={ROWS_YEAR_COUNT}
                columns={COLUMNS_YEAR_COUNT}
                overflow={false}
            >
                {yearDatasource(date).map((monthDate) => (
                    <YearMonthWrapper key={monthDate.getTime()}>
                        <MonthTitle>
                            {formatYearCalendarMonthTitle(monthDate)}
                        </MonthTitle>
                        <MonthGrid
                            date={monthDate}
                            daysRows={ROWS_DAYS_MONTH_COUNT}
                            daysColumns={COLUMNS_DAYS_COUNT}
                            weekdayDatasource={weekdayDatasource}
                            dayDatasource={dayDatasource}
                            dayRenderer={dayRenderer}
                        />
                    </YearMonthWrapper>
                ))}
            </CellGrid>
        </Wrapper>
    );
}
