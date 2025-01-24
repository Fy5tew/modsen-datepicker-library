import { styled } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1em;

    font-family: ${({ theme }) => theme.fonts.calendar};
    font-size: ${({ theme }) => theme.fontSizes.calendarSlider}px;
    font-weight: ${({ theme }) => theme.fontWeights.calendarSlider};
    color: ${({ theme }) => theme.colors.calendarSliderFg};
    background: ${({ theme }) => theme.colors.calendarSliderBg};
`;

export const BaseButton = styled.button`
    border: none;
    border-radius: 8px;
    padding: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.calendarSliderFg};
    background: ${({ theme }) => theme.colors.calendarSliderBg};

    transition:
        color 0.1s ease-in-out,
        background 0.1s ease-in-out;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.colors.calendarSliderHoverFg};
            background: ${({ theme }) => theme.colors.calendarSliderHoverBg};
        }
    }
`;

export const Icon = styled.img``;

export const Button = styled(BaseButton)`
    font-family: ${({ theme }) => theme.fonts.calendar};
    font-size: ${({ theme }) => theme.fontSizes.calendarSlider}px;
    font-weight: ${({ theme }) => theme.fontWeights.calendarSlider};
`;

export const Title = styled(BaseButton)`
    flex-grow: 1;
    padding: 1em;

    font-family: ${({ theme }) => theme.fonts.calendar};
    font-size: ${({ theme }) => theme.fontSizes.calendarSlider}px;
    font-weight: ${({ theme }) => theme.fontWeights.calendarSlider};
`;
