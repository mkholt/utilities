/**
 * Determine whether the given item is defined
 * Can be passed to Array.filter() to clean up typing and remove null or undefined
 * @param i The item to check
 * @returns TRUE if the item is defined, FALSE otherwise
 */
export function isDefined<T>(i?: T): i is NonNullable<T> {
    return i != null && i != undefined;
}

/**
 * Filter out duplicate values by simple index-of check
 * This does full object equality check
 * @param value The current item
 * @param index The index of the currently evaluated item
 * @param self The array
 * @returns TRUE if this is the first occurrence of the item, FALSE otherwise
 */
export function isUnique<T>(value: T, index: number, self: T[]) {
	return self.indexOf(value) === index;
}
