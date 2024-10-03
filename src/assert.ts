/**
 * Given a condition, throws an `Error` with the given message if the condition is `false`.
 * 
 * Does a TypeScript assertion on the condition, meaning any further code is guaranteed to have the condition be true.
 * 
 * ```typescript
 * let x: number | undefined = 5
 * assert(x !== undefined, "x is undefined")
 * // x is now a number
 * ```
 * 
 * @param condition The condition to assert
 * @param error The error message to throw
 */
export function assert(condition: unknown, error?: string): asserts condition {
	if (!condition) throw Error(error)
}
