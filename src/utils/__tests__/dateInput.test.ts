import { formatDate, parseDateString } from '../dateInput';

describe('DateInput Utils', () => {
    describe('parseDateString', () => {
        it('should parse a valid date string', () => {
            expect(parseDateString('12/05/2023')).toEqual(
                new Date(2023, 4, 12)
            );
        });

        it('should return null for an invalid date string', () => {
            expect(parseDateString('32/05/2023')).toBeNull();
        });

        it('should return null for a malformed date string', () => {
            expect(parseDateString('2023/05/12')).toBeNull();
        });
    });

    describe('formatDate', () => {
        it('should format a valid date object', () => {
            expect(formatDate(new Date(2023, 4, 12))).toBe('12/05/2023');
        });
    });
});
