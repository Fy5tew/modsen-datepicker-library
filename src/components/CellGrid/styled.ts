import styled, { css } from 'styled-components';

interface GridProps {
    $rows: number;
    $columns: number;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    column-gap: 0;
    row-gap: 0.1em;

    ${({ $columns }) => css`
        grid-template-columns: repeat(${$columns}, 1fr);
    `}

    ${({ $rows }) => css`
        grid-template-rows: repeat(${$rows}, 1fr);
    `}
`;
