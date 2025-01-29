import { CellGrid } from '#/components/CellGrid';
import { DateSlider } from '#/components/DateSlider';
import { DayCell } from '#/components/DayCell';
import { ErrorBoundary } from '#/components/ErrorBoundary';
import { WeekdayCell } from '#/components/WeekdayCell';
import {
    COLUMNS_COUNT,
    DEFAULT_DAY_DATASOURCE_MANAGER,
    DEFAULT_WEEKDAY_DATASOURCE_MANAGER,
    ROWS_DAYS_COUNT,
    ROWS_WEEKDAYS_COUNT,
} from '#/constants/calendar';
import { useFormatters } from '#/contexts/formatters';
import { useInternalValue } from '#/hooks/useInternalValue';
import {
    IDayDatasourceManager,
    IWeekdayDatasourceManager,
} from '#/types/datasources';
import { DayRenderer } from '#/types/renderers';
import { getNextMonthDate, getPrevMonthDate } from '#/utils/date';
import { defaultDayRenderer } from '#/utils/renderers';

import { Wrapper } from './styled';

export interface CalendarProps {
    date?: Date;
    weekdayDatasourceManager?: IWeekdayDatasourceManager;
    dayDatasourceManager?: IDayDatasourceManager;
    dayRenderer?: DayRenderer;
    onDateChange?: (date: Date) => void;
}

export function Calendar({
    date: externalDate,
    weekdayDatasourceManager = DEFAULT_WEEKDAY_DATASOURCE_MANAGER,
    dayDatasourceManager = DEFAULT_DAY_DATASOURCE_MANAGER,
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
        <ErrorBoundary>
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
                    {weekdayDatasourceManager
                        .getWeekDatasource()(date)
                        .map((d) => (
                            <WeekdayCell key={d} day={d} />
                        ))}
                </CellGrid>
                <CellGrid
                    rows={ROWS_DAYS_COUNT}
                    columns={COLUMNS_COUNT}
                    overflow={false}
                >
                    {dayDatasourceManager
                        .getMonthDatasource()(date)
                        .map((d) => (
                            <DayCell
                                key={d.getTime()}
                                {...dayRenderer({ date: d })}
                            />
                        ))}
                </CellGrid>
            </Wrapper>
        </ErrorBoundary>
    );
}
