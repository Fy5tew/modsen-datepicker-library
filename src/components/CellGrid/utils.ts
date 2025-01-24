export function validSize(size?: number): boolean {
    return size !== undefined && size > 0;
}

export function getGridSize(
    count: number,
    rows?: number,
    columns?: number
): [number, number] {
    if (!validSize(rows) && !validSize(columns)) {
        const size = Math.ceil(Math.sqrt(count));
        return [size, size];
    }
    if (!validSize(rows) && validSize(columns)) {
        rows = Math.ceil(count / (columns as number));
        return [rows, columns as number];
    }
    if (!validSize(columns) && validSize(rows)) {
        columns = Math.ceil(count / (rows as number));
        return [rows as number, columns];
    }
    return [rows as number, columns as number];
}
