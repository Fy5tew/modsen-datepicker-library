import styled from 'styled-components';

import { COLORS, FONT_SIZES, FONT_WEIGHTS, FONTS } from '#/constants/styles';

export const Wrapper = styled.div`
    max-width: 600px;
`;

export const Header = styled.p`
    text-align: center;
    color: ${COLORS.black};
    font-family: ${FONTS.openSans};
    font-size: ${FONT_SIZES.xl}px;
    font-weight: ${FONT_WEIGHTS.l};
`;

export const Title = styled.p`
    text-align: center;
    color: ${COLORS.internationalOrange};
    font-family: ${FONTS.openSans};
    font-size: ${FONT_SIZES.m}px;
    font-weight: ${FONT_WEIGHTS.m};
`;

export const Text = styled.p`
    text-align: center;
    color: ${COLORS.black};
    font-family: ${FONTS.openSans};
    font-size: ${FONT_SIZES.s}px;
    font-weight: ${FONT_WEIGHTS.s};
`;
