export function isValidDimansionSize(size?: number): boolean {
    return size !== undefined && size > 0;
}

export function getGridSize(
    count: number,
    rows?: number,
    columns?: number
): [number, number] {
    if (!isValidDimansionSize(rows) && !isValidDimansionSize(columns)) {
        const size = Math.ceil(Math.sqrt(count));
        return [size, size];
    }
    if (!isValidDimansionSize(rows) && isValidDimansionSize(columns)) {
        rows = Math.ceil(count / (columns as number));
        return [rows, columns as number];
    }
    if (!isValidDimansionSize(columns) && isValidDimansionSize(rows)) {
        columns = Math.ceil(count / (rows as number));
        return [rows as number, columns];
    }
    return [rows as number, columns as number];
}
