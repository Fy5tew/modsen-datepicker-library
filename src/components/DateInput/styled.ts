import styled from 'styled-components';

import { COLORS } from '#/constants/styles';

interface ButtonProps {
    $isHidden?: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    font-family: ${({ theme }) => theme.fonts.datepicker};
    font-size: ${({ theme }) => theme.fontSizes.datepicker}px;
    font-weight: ${({ theme }) => theme.fontWeights.datepicker};
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.colors.datepickerBorder};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.datepickerFg};
    background: ${({ theme }) => theme.colors.datepickerBg};
    font-family: ${({ theme }) => theme.fonts.datepicker};
    font-size: ${({ theme }) => theme.fontSizes.datepicker}px;
    font-weight: ${({ theme }) => theme.fontWeights.datepicker};
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.datepickerLabelFg};
    font-family: ${({ theme }) => theme.fonts.datepicker};
    font-size: ${({ theme }) => theme.fontSizes.datepickerLable}px;
    font-weight: ${({ theme }) => theme.fontWeights.datepickerLable};
`;

export const ErrorMessage = styled.span`
    font-size: 0.8em;
    color: ${COLORS.internationalOrange};
`;

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.7em;
    border: none;
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts.datepicker};
    font-size: ${({ theme }) => theme.fontSizes.datepicker}px;
    font-weight: ${({ theme }) => theme.fontWeights.datepicker};
    ${({ $isHidden }) => $isHidden && `visibility: hidden;`}
`;

export const Icon = styled.img``;

export const Input = styled.input`
    border: none;
    outline: none;
    flex: 1 1;
    min-width: 100px;
    font-family: ${({ theme }) => theme.fonts.datepicker};
    font-size: ${({ theme }) => theme.fontSizes.datepicker}px;
    font-weight: ${({ theme }) => theme.fontWeights.datepicker};

    &::placeholder {
        color: ${({ theme }) => theme.colors.datepickerPlaceholder};
    }

    &:invalid {
        color: ${COLORS.internationalOrange};
    }
`;
