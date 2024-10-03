/**
 * Determine whether the given item is defined
 * 
 * Can be passed to `Array.filter()` to clean up typing and remove null or undefined
 * 
 * ```typescript
 * const arr = [1, 2, 3, null, 4, undefined, 5]
 * // typeof arr = (number | null | undefined)[]
 * const defined = arr.filter(isDefined)
 * // defined = [1, 2, 3, 4, 5]
 * // typeof defined = number[]
 * ```
 * 
 * @param i The item to check
 * @returns `true` if the item is defined, `false` otherwise
 */
export function isDefined<T>(i?: T): i is NonNullable<T> {
    return i != null && i != undefined;
}

/**
 * Filter out duplicate values by simple index-of check
 * 
 * This does full object equality check
 * 
 * ```typescript
 * const arr = [1, 2, 3, 1, 2, 3, 4, 5]
 * const unique = arr.filter(isUnique)
 * // unique = [1, 2, 3, 4, 5]
 * ```
 * 
 * @param value The current item
 * @param index The index of the currently evaluated item
 * @param self The array
 * @returns `true` if this is the first occurrence of the item, `false` otherwise
 */
export function isUnique<T>(value: T, index: number, self: T[]) {
	return self.indexOf(value) === index;
}
