import { styled } from 'styled-components';

export const Wrapper = styled.div`
    font-family: ${({ theme }) => theme.fonts.calendar};
    font-size: ${({ theme }) => theme.fontSizes.calendar}px;
    font-weight: ${({ theme }) => theme.fontWeights.calendar};

    color: ${({ theme }) => theme.colors.calendarFg};
    background-color: ${({ theme }) => theme.colors.calendarBg};
    border: 1px solid ${({ theme }) => theme.colors.calendarBorder};
    border-radius: 8px;
    padding: 0.5em;
`;
