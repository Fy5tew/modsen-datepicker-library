import { getGridSize, isValidDimansionSize } from '../grid';

describe('Grid Utils', () => {
    describe('isValidDimansionSize', () => {
        it('should return true for positive numbers', () => {
            expect(isValidDimansionSize(1)).toBe(true);
            expect(isValidDimansionSize(10)).toBe(true);
        });

        it('should return false for 0, negative numbers, and undefined', () => {
            expect(isValidDimansionSize(0)).toBe(false);
            expect(isValidDimansionSize(-1)).toBe(false);
            expect(isValidDimansionSize(undefined)).toBe(false);
        });
    });

    describe('getGridSize', () => {
        it('should return a square grid if rows and columns are not provided', () => {
            expect(getGridSize(10)).toEqual([4, 4]);
            expect(getGridSize(16)).toEqual([4, 4]);
        });

        it('should calculate rows if only columns are provided', () => {
            expect(getGridSize(10, undefined, 2)).toEqual([5, 2]);
        });

        it('should calculate columns if only rows are provided', () => {
            expect(getGridSize(10, 2)).toEqual([2, 5]);
        });

        it('should return given rows and columns if both are valid', () => {
            expect(getGridSize(10, 2, 5)).toEqual([2, 5]);
        });
    });
});
