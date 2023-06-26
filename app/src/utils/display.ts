const monthNameByNumber: Record<number, string> = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
}


function getMonthByNumber(month: number, shortHand: boolean = false): string {
    var monthName: string = monthNameByNumber[month];

    if (shortHand) {
        monthName = monthName.substring(0, 3);
    }

    return monthName;
}


function createMarkup(value: string) {
    return {__html: value};
}


export { createMarkup, getMonthByNumber };
