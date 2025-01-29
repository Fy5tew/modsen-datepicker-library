import { ComponentType } from 'react';

import { Calendar } from '#/components/Calendar';
import { CalendarProps } from '#/components/Calendar/types';

export class CalendarBuilder<T extends CalendarProps> {
    private BaseComponent: ComponentType<T>;

    constructor(BaseComponent: ComponentType<T> = Calendar) {
        this.BaseComponent = BaseComponent;
    }

    applyDecorator<D extends object>(
        decorator: (component: ComponentType<T>) => ComponentType<T & D>
    ): CalendarBuilder<T & D> {
        const DecoratedComponent = decorator(this.BaseComponent);
        return new CalendarBuilder(DecoratedComponent);
    }

    build(): ComponentType<T> {
        return this.BaseComponent;
    }
}
