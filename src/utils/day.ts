import { Day } from '#/constants/days';

export function getPrevDay(day: Day): Day {
    switch (day) {
        case Day.Monday:
            return Day.Sunday;
        case Day.Tuesday:
            return Day.Monday;
        case Day.Wednesday:
            return Day.Tuesday;
        case Day.Thursday:
            return Day.Wednesday;
        case Day.Friday:
            return Day.Thursday;
        case Day.Saturday:
            return Day.Friday;
        case Day.Sunday:
            return Day.Saturday;
    }
    throw new Error('Invalid Day');
}

export function getNextDay(day: Day): Day {
    switch (day) {
        case Day.Monday:
            return Day.Tuesday;
        case Day.Tuesday:
            return Day.Wednesday;
        case Day.Wednesday:
            return Day.Thursday;
        case Day.Thursday:
            return Day.Friday;
        case Day.Friday:
            return Day.Saturday;
        case Day.Saturday:
            return Day.Sunday;
        case Day.Sunday:
            return Day.Monday;
    }
    throw new Error('Invalid Day');
}
