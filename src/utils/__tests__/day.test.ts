import { Day } from '#/constants/days';

import { getNextDay, getPrevDay } from '../day';

describe('Day Utils', () => {
    describe('getPrevDay', () => {
        it('should return the correct previous day for each day of the week', () => {
            expect(getPrevDay(Day.Monday)).toBe(Day.Sunday);
            expect(getPrevDay(Day.Tuesday)).toBe(Day.Monday);
            expect(getPrevDay(Day.Wednesday)).toBe(Day.Tuesday);
            expect(getPrevDay(Day.Thursday)).toBe(Day.Wednesday);
            expect(getPrevDay(Day.Friday)).toBe(Day.Thursday);
            expect(getPrevDay(Day.Saturday)).toBe(Day.Friday);
            expect(getPrevDay(Day.Sunday)).toBe(Day.Saturday);
        });

        it('should throw an error for invalid day', () => {
            expect(() => getPrevDay(10 as Day)).toThrow('Invalid Day');
        });
    });

    describe('getNextDay', () => {
        it('should return the correct next day for each day of the week', () => {
            expect(getNextDay(Day.Monday)).toBe(Day.Tuesday);
            expect(getNextDay(Day.Tuesday)).toBe(Day.Wednesday);
            expect(getNextDay(Day.Wednesday)).toBe(Day.Thursday);
            expect(getNextDay(Day.Thursday)).toBe(Day.Friday);
            expect(getNextDay(Day.Friday)).toBe(Day.Saturday);
            expect(getNextDay(Day.Saturday)).toBe(Day.Sunday);
            expect(getNextDay(Day.Sunday)).toBe(Day.Monday);
        });

        it('should throw an error for invalid day', () => {
            expect(() => getNextDay(10 as Day)).toThrow('Invalid Day');
        });
    });
});
