import { DayCellProps } from '#/components/DayCell';

export type Renderer<P> = (props: P) => P;

export type DayRenderer = Renderer<DayCellProps>;
