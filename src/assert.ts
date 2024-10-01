/**
 * Given a condition, throws the given Error if the condition is false.
 * 
 * Does a TypeScript assertion on the condition, meaning any further code is guaranteed to have the condition be true.
 * @param condition The condition to assert
 * @param error The error message to throw
 */
export function assert(condition: unknown, error?: string): asserts condition {
	if (!condition) throw Error(error)
}
