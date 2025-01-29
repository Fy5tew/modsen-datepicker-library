import { Formatters } from '#/types/formatters';
import {
    dateDayNumberFormatter,
    dateMonthFullNameFormatter,
    dateMonthYearFormatter,
    dateWeekMonthYearFormatter,
    dateYearFormatter,
    dayShortNameFormatter,
} from '#/utils/formatters';

export const FORMATTERS: Formatters = {
    formatWeekdayCell: dayShortNameFormatter,
    formatDayCell: dateDayNumberFormatter,
    formatCalendarSliderWeekTitle: dateWeekMonthYearFormatter,
    formatCalendarSliderMonthTitle: dateMonthYearFormatter,
    formatCalendarSliderYearTitle: dateYearFormatter,
    formatYearCalendarMonthTitle: dateMonthFullNameFormatter,
};
