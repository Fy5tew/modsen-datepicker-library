import { styled } from 'styled-components';

export const Cell = styled.button`
    border: none;
    border-radius: 8px;
    padding: 0.7em;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: ${({ theme }) => theme.fonts.calendar};
    font-size: ${({ theme }) => theme.fontSizes.calendarTitleCell}px;
    font-weight: ${({ theme }) => theme.fontWeights.calendarTitleCell};
    color: ${({ theme }) => theme.colors.calendarTitleCellFg};
    background: ${({ theme }) => theme.colors.calendarTitleCellBg};

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.colors.calendarTitleCellHoverFg};
            background: ${({ theme }) => theme.colors.calendarTitleCellHoverBg};
        }
    }
`;
