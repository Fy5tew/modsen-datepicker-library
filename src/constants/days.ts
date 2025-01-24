export enum Day {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday = 0,
}

export const DAYS_SHORT_NAMES = {
    [Day.Monday]: 'Mo',
    [Day.Tuesday]: 'Tu',
    [Day.Wednesday]: 'We',
    [Day.Thursday]: 'Th',
    [Day.Friday]: 'Fr',
    [Day.Saturday]: 'Sa',
    [Day.Sunday]: 'Su',
};

export const DEFAULT_WEEKENDS = [Day.Saturday, Day.Sunday];

export const DEFAULT_HOLIDAYS = [
    '01-01',
    '01-07',
    '02-14',
    '03-08',
    '05-01',
    '10-31',
    '12-25',
];
