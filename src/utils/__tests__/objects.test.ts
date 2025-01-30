import { deepMerge } from '../objects';

describe('Objects Utils', () => {
    describe('deepMerge', () => {
        it('should merge simple objects', () => {
            const full = { a: 1, b: 2 };
            const partial = { b: 3 };
            const result = deepMerge(full, partial);

            expect(result).toEqual({ a: 1, b: 3 });
        });

        it('should deeply merge nested objects', () => {
            const full = { a: { b: 2, c: 3 }, d: 4 };
            const partial = { a: { b: 5 }, d: 6 };
            const result = deepMerge(full, partial);

            expect(result).toEqual({ a: { b: 5, c: 3 }, d: 6 });
        });

        it('should not mutate the original object', () => {
            const full = { a: 1, b: 2 };
            const partial = { b: 3 };
            const result = deepMerge(full, partial);

            expect(result).not.toBe(full);
            expect(full).toEqual({ a: 1, b: 2 });
        });

        it('should not merge arrays', () => {
            const full = { a: [1, 2], b: 'string' };
            const partial = { a: [3, 4] };
            const result = deepMerge(full, partial);

            expect(result).toEqual({ a: [3, 4], b: 'string' });
        });

        it('should return a new object (not mutate the original)', () => {
            const full = { a: 1, b: { c: 2 } };
            const partial = { a: 3 };
            const result = deepMerge(full, partial);

            expect(result).not.toBe(full);
            expect(result.a).toBe(3);
            expect(result.b.c).toBe(2);
        });
    });
});
