import styled from 'styled-components';

import { COLORS, FONTS } from '#/constants/styles';

interface ModalWrapperProps {
    $isOpen?: boolean;
}

export const Wrapper = styled.div`
    position: relative;
`;

export const ModalWrapper = styled.div<ModalWrapperProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 1em;
    background: ${COLORS.white};
    border: 1px solid ${COLORS.black};
    padding: 1em;
    border-radius: 8px;
    max-width: 300px;
    max-height: 350px;
`;

const Button = styled.button`
    background: transparent;
    padding: 0.5em;
    border-radius: 8px;
    cursor: pointer;
    font-family: ${FONTS.openSans};
`;

export const AddButton = styled(Button)`
    width: 100%;
`;

export const RemoveButton = styled(Button)`
    border: none;
`;

export const Title = styled.h3`
    font-family: ${FONTS.openSans};
    margin: 0;
    min-height: fit-content;
    overflow-x: hidden;
    text-overflow: ellipsis;
    text-align: center;
`;

export const TodosList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    overflow-y: scroll;
`;

export const TodoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;
`;

export const TodoTitle = styled.p`
    font-family: ${FONTS.openSans};
    margin: 0;
    overflow-x: hidden;
    text-overflow: ellipsis;
`;
