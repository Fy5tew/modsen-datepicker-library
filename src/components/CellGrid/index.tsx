import { Children, ReactNode } from 'react';

import { Grid } from './styled';
import { getGridSize } from './utils';

interface DayGridProps {
    rows?: number;
    columns?: number;
    overflow?: boolean;
    children?: ReactNode;
}

export function CellGrid({
    rows,
    columns,
    overflow = true,
    children,
}: DayGridProps) {
    Children.count(children);
    [rows, columns] = getGridSize(Children.count(children), rows, columns);

    if (!overflow) {
        children = Children.toArray(children).slice(0, rows * columns);
    }

    return (
        <Grid $rows={rows} $columns={columns}>
            {children}
        </Grid>
    );
}
