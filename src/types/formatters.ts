import { Day } from '#/constants/days';

export type Formatter<T> = (data: T) => string;

export interface Formatters {
    formatWeekdayCell: Formatter<Day>;
    formatDayCell: Formatter<Date>;
    formatCalendarSliderWeekTitle: Formatter<Date>;
    formatCalendarSliderMonthTitle: Formatter<Date>;
}
