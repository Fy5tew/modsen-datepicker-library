export function parseDateString(dateString: string): Date | null {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(regex);

    if (match) {
        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10) - 1;
        const year = parseInt(match[3], 10);

        const date = new Date(year, month, day);
        if (
            date.getDate() === day &&
            date.getMonth() === month &&
            date.getFullYear() === year
        ) {
            return date;
        }
    }

    return null;
}

export function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
