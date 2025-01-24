import { Day, DAYS_SHORT_NAMES } from '#/constants/days';
import { Month, MONTH_SHORT_NAMES } from '#/constants/months';

import { getMonth } from './date';

export function dayFullNameFormatter(day: Day): string {
    return Day[day];
}

export function dayShortNameFormatter(day: Day): string {
    return DAYS_SHORT_NAMES[day];
}

export function monthFullNameFormatter(month: Month): string {
    return Month[month];
}

export function monthShortNameFormatter(month: Month): string {
    return MONTH_SHORT_NAMES[month];
}

export function dateDayNumberFormatter(date: Date): string {
    return date.getDate().toString();
}

export function dateYearFormatter(date: Date): string {
    return date.getFullYear().toString();
}

export function dateMonthFullNameFormatter(date: Date): string {
    return monthFullNameFormatter(getMonth(date));
}

export function dateMonthYearFormatter(date: Date): string {
    const month = dateMonthFullNameFormatter(date);
    const year = dateYearFormatter(date);
    return `${month} ${year}`;
}
