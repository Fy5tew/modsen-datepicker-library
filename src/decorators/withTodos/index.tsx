import { ComponentType, RefObject, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ActionButton } from '#/components/ActionButton';
import { CalendarProps } from '#/components/Calendar/types';
import { Wrapper } from '#/components/ErrorBoundary/styled';
import { WithDaySelectionProps } from '#/decorators/withDaySelection';
import { useFlag } from '#/hooks/useFlag';
import { useInternalValue } from '#/hooks/useInternalValue';
import { useOnClickOutside } from '#/hooks/useOnClickOutside';
import { useTodos } from '#/hooks/useTodos';
import { isOneDay } from '#/utils/date';
import { formatDate } from '#/utils/dateInput';
import { combineRenderers, todoDayRenderer } from '#/utils/renderers';

import {
    AddButton,
    ModalWrapper,
    RemoveButton,
    Title,
    TodosList,
    TodoTitle,
    TodoWrapper,
} from './styled';

export function withTodos() {
    return function withTodosDecorator<
        P extends WithDaySelectionProps & CalendarProps,
    >(BaseComponent: ComponentType<P>) {
        return function WrappedComponent({
            dayRenderer,
            selectedDay: externalSelectedDay,
            onDaySelect,
            ...props
        }: P) {
            const [selectedDay, setSelectedDay] = useInternalValue(
                new Date(),
                externalSelectedDay,
                onDaySelect
            );
            const { todos, add, remove } = useTodos();
            const currentTodos = todos.filter(({ date }) =>
                isOneDay(selectedDay, date)
            );
            const {
                flag: isTodosOpen,
                disable: closeTodos,
                toggle: toggleTodos,
            } = useFlag(false);
            const wrapperRef = useRef<HTMLDivElement>(null);

            useOnClickOutside(
                wrapperRef as RefObject<HTMLDivElement>,
                closeTodos
            );

            const handleAddTodo = () => {
                const title = prompt('Enter todo title');
                if (title) {
                    add({
                        id: Date.now().toString(),
                        date: selectedDay,
                        title: title,
                    });
                }
            };

            const newProps: P = {
                ...props,
                selectedDay,
                onDaySelect: setSelectedDay,
                dayRenderer: combineRenderers(
                    dayRenderer,
                    todoDayRenderer((day) =>
                        todos.some((todo) => isOneDay(day, todo.date))
                    )
                ),
            } as P;

            return (
                <Wrapper>
                    <BaseComponent {...newProps} />
                    <ActionButton onClick={toggleTodos}>
                        {isTodosOpen ? 'Close todos' : 'Open todos'}
                    </ActionButton>
                    {createPortal(
                        <ModalWrapper $isOpen={isTodosOpen} ref={wrapperRef}>
                            <Title>Todos for {formatDate(selectedDay)}</Title>
                            <AddButton onClick={handleAddTodo}>
                                Add todo
                            </AddButton>
                            <TodosList>
                                {currentTodos.length ? (
                                    currentTodos.map(({ id, title }) => (
                                        <TodoWrapper key={id}>
                                            <TodoTitle>{title}</TodoTitle>
                                            <RemoveButton
                                                onClick={() => remove(id)}
                                            >
                                                ✖
                                            </RemoveButton>
                                        </TodoWrapper>
                                    ))
                                ) : (
                                    <TodoTitle>There are no todos</TodoTitle>
                                )}
                            </TodosList>
                        </ModalWrapper>,
                        document.body
                    )}
                </Wrapper>
            );
        };
    };
}
