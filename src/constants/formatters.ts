import { Formatters } from '#/types/formatters';
import {
    dateDayNumberFormatter,
    dateMonthYearFormatter,
    dayShortNameFormatter,
} from '#/utils/formatters';

export const FORMATTERS: Formatters = {
    formatWeekdayCell: dayShortNameFormatter,
    formatDayCell: dateDayNumberFormatter,
    formatCalendarSliderMonthTitle: dateMonthYearFormatter,
};
