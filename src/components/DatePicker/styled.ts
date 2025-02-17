import styled from 'styled-components';

interface OverlayProps {
    $isVisible?: boolean;
}

export const Wrapper = styled.div`
    position: relative;
    min-width: 300px;
`;

export const Overlay = styled.div<OverlayProps>`
    position: absolute;
    top: calc(100% + 0.5em);
    left: 0;
    width: 100%;
    min-width: fit-content;
    z-index: 10;

    display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`;
