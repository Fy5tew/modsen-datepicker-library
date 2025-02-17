import { styled } from 'styled-components';

export const Button = styled.button`
    font-family: ${({ theme }) => theme.fonts.calendar};
    font-size: ${({ theme }) => theme.fontSizes.calendarButton};
    font-weight: ${({ theme }) => theme.fontWeights.calendarButton};
    color: ${({ theme }) => theme.colors.calendarButtonFg};
    background: ${({ theme }) => theme.colors.calendarButtonBg};
    border: 1px solid ${({ theme }) => theme.colors.calendarButtonBorder};
    border-radius: 8px;
    padding: 1em;
    width: 100%;

    transition:
        color 0.1s ease-in-out,
        background 0.1s ease-in-out;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.colors.calendarButtonHoverFg};
            background: ${({ theme }) => theme.colors.calendarButtonHoverBg};
        }
    }
`;
