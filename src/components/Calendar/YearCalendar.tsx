import { CellGrid } from '#/components/CellGrid';
import { DateSlider } from '#/components/DateSlider';
import { DayCell } from '#/components/DayCell';
import { WeekdayCell } from '#/components/WeekdayCell';
import {
    COLUMNS_DAYS_COUNT,
    COLUMNS_WEEKDAYS_COUNT,
    COLUMNS_YEAR_COUNT,
    ROWS_DAYS_MONTH_COUNT,
    ROWS_WEEKDAYS_COUNT,
    ROWS_YEAR_COUNT,
} from '#/constants/calendar';
import { useFormatters } from '#/contexts/formatters';
import { getNextYearDate, getPrevYearDate } from '#/utils/date';

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

    console.log(dayDatasource(date));

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
                        <CellGrid
                            rows={ROWS_WEEKDAYS_COUNT}
                            columns={COLUMNS_WEEKDAYS_COUNT}
                            overflow={false}
                        >
                            {weekdayDatasource(monthDate).map((d) => (
                                <WeekdayCell key={d} day={d} />
                            ))}
                        </CellGrid>
                        <CellGrid
                            rows={ROWS_DAYS_MONTH_COUNT}
                            columns={COLUMNS_DAYS_COUNT}
                            overflow={false}
                        >
                            {dayDatasource(monthDate).map((d) => (
                                <DayCell
                                    key={d.getTime()}
                                    {...dayRenderer({ date: d })}
                                />
                            ))}
                        </CellGrid>
                    </YearMonthWrapper>
                ))}
            </CellGrid>
        </Wrapper>
    );
}
