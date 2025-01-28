import { useCallback, useEffect, useState } from 'react';

import { Todo } from '#/types/todo';

const TODOS_STORAGE_KEY = '@fy5tew/modsen-datepicker-library/todos';

interface TodosState {
    todos: Todo[];
    add: (todo: Todo) => void;
    remove: (todo: Todo) => void;
}

export function useTodos(): TodosState {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
        if (savedTodos) {
            setTodos(
                (JSON.parse(savedTodos) as Todo[]).map(({ date, ...todo }) => ({
                    ...todo,
                    date: new Date(date),
                }))
            );
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
        }
    }, [todos]);

    const add = useCallback((todo: Todo) => {
        setTodos((prevTodos) => [...prevTodos, todo]);
    }, []);

    const remove = useCallback((todo: Todo) => {
        setTodos((prevTodos) => prevTodos.filter((td) => td !== todo));
    }, []);

    return { todos, add, remove };
}
