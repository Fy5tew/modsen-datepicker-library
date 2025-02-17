import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { CellGrid } from '.';

describe('CellGrid Component', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <CellGrid rows={2} columns={2}>
                <div>Cell 1</div>
                <div>Cell 2</div>
                <div>Cell 3</div>
                <div>Cell 4</div>
            </CellGrid>
        );
        expect(getByText('Cell 1')).toBeInTheDocument();
        expect(getByText('Cell 2')).toBeInTheDocument();
        expect(getByText('Cell 3')).toBeInTheDocument();
        expect(getByText('Cell 4')).toBeInTheDocument();
    });

    it('correctly calculates grid size when rows and columns are provided', () => {
        const { container } = render(
            <CellGrid rows={2} columns={2}>
                <div>Cell 1</div>
                <div>Cell 2</div>
                <div>Cell 3</div>
                <div>Cell 4</div>
            </CellGrid>
        );
        const grid = container.querySelector('div') as HTMLDivElement;
        expect(grid).toHaveStyle('grid-template-columns: repeat(2, 1fr)');
        expect(grid).toHaveStyle('grid-template-rows: repeat(2, 1fr)');
    });

    it('calculates grid size dynamically when no rows or columns are provided', () => {
        const { container } = render(
            <CellGrid>
                <div>Cell 1</div>
                <div>Cell 2</div>
                <div>Cell 3</div>
                <div>Cell 4</div>
                <div>Cell 5</div>
                <div>Cell 6</div>
                <div>Cell 7</div>
                <div>Cell 8</div>
            </CellGrid>
        );
        const grid = container.querySelector('div') as HTMLDivElement;
        expect(grid).toHaveStyle('grid-template-columns: repeat(3, 1fr)');
        expect(grid).toHaveStyle('grid-template-rows: repeat(3, 1fr)');
    });

    it('correctly calculates grid size when only rows or columns are provided', () => {
        const { container } = render(
            <CellGrid rows={3}>
                <div>Cell 1</div>
                <div>Cell 2</div>
                <div>Cell 3</div>
                <div>Cell 4</div>
                <div>Cell 5</div>
                <div>Cell 6</div>
            </CellGrid>
        );
        const grid = container.querySelector('div') as HTMLDivElement;
        expect(grid).toHaveStyle('grid-template-columns: repeat(2, 1fr)');
        expect(grid).toHaveStyle('grid-template-rows: repeat(3, 1fr)');
    });
});
