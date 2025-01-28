import { ComponentType } from 'react';

import { ActionButton } from '#/components/ActionButton';
import { CalendarProps } from '#/components/Calendar';
import { WithDaySelectionProps } from '#/decorators/withDaySelection';
import { useInternalValue } from '#/hooks/useInternalValue';
import { useTodos } from '#/hooks/useTodos';
import { isOneDay } from '#/utils/date';
import { combineRenderers, todoDayRenderer } from '#/utils/renderers';

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
            const { todos, add } = useTodos();

            const handleAddTodo = () =>
                add({
                    date: selectedDay || new Date(),
                    title: prompt('Enter todo title') ?? '',
                });

            const newProps: P = {
                ...props,
                selectedDay,
                onDaySelect: setSelectedDay,
                dayRenderer: combineRenderers(
                    dayRenderer,
                    todoDayRenderer(
                        (day) =>
                            todos.filter(({ date }) => isOneDay(day, date))
                                .length !== 0
                    )
                ),
            } as P;
            return (
                <>
                    <BaseComponent {...newProps} />
                    <ActionButton onClick={handleAddTodo}>
                        {todos.filter(({ date }) => isOneDay(selectedDay, date))
                            .length !== 0
                            ? 'View todos'
                            : 'Add todo'}
                    </ActionButton>
                </>
            );
        };
    };
}
