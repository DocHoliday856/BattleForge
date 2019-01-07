/**
* Function that return the array passed in sorted by the defined property
* @param array array to be sorted
* @param property property of the array to sort on
*/
export function sortByProperty<T>(array: T[], property: string): void {
    array.sort((a, b) => a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0);
}