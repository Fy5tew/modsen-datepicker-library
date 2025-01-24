import { CellGrid } from '#/components/CellGrid';
import {
    COLUMNS_COUNT,
    DEFAULT_START_DAY,
    ROWS_DAYS_COUNT,
    ROWS_WEEKDAYS_COUNT,
} from '#/constants/calendar';
import { useFormatters } from '#/contexts/formatters';
import { useInternalValue } from '#/hooks/useInternalValue';
import { DayDatasource, WeekdayDatasource } from '#/types/datasources';
import { DayRenderer } from '#/types/renderers';
import {
    getMonthDayDatasource,
    getWeekdayDatasource,
} from '#/utils/datasources';
import { getNextMonthDate, getPrevMonthDate } from '#/utils/date';
import { defaultDayRenderer } from '#/utils/renderers';

import { DateSlider } from '../DateSlider';
import { DayCell } from '../DayCell';
import { WeekdayCell } from '../WeekdayCell';
import { Wrapper } from './styled';

const DEFAULT_WEEKDAY_DATASOURCE = getWeekdayDatasource(DEFAULT_START_DAY);
const DEFAULT_DAY_DATASOURCE = getMonthDayDatasource(DEFAULT_START_DAY);

export interface CalendarProps {
    date?: Date;
    weekdayDatasource?: WeekdayDatasource;
    dayDatasource?: DayDatasource;
    dayRenderer?: DayRenderer;
    onDateChange?: (date: Date) => void;
}

export function Calendar({
    date: externalDate,
    weekdayDatasource = DEFAULT_WEEKDAY_DATASOURCE,
    dayDatasource = DEFAULT_DAY_DATASOURCE,
    dayRenderer = defaultDayRenderer,
    onDateChange,
}: CalendarProps) {
    const { formatCalendarSliderTitle } = useFormatters();
    const [date, setDate] = useInternalValue(
        new Date(),
        externalDate,
        onDateChange
    );

    const handlePrevClick = () => {
        setDate(getPrevMonthDate(date));
    };

    const handleNextClick = () => {
        setDate(getNextMonthDate(date));
    };

    return (
        <Wrapper>
            <DateSlider
                date={date}
                formatTitle={formatCalendarSliderTitle}
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
                rows={ROWS_DAYS_COUNT}
                columns={COLUMNS_COUNT}
                overflow={false}
            >
                {dayDatasource(date).map((d) => (
                    <DayCell key={d.getTime()} {...dayRenderer({ date: d })} />
                ))}
            </CellGrid>
        </Wrapper>
    );
}
