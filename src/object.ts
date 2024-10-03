export class Extensions {
	/**
	 * Determine whether the given item is of type `object`
	 * 
	 * ```typescript
	 * const obj = { a: 1, b: 2 }
	 * const arr = [1, 2, 3]
	 * const str = "hello"
	 * Extensions.IsObject(obj) // true
	 * Extensions.IsObject(arr) // false
	 * Extensions.IsObject(str) // false
	 * ```
	 * 
	 * @param obj The item to check
	 * @returns `true` if the item is an object, `false` otherwise
	 */
    public static IsObject(obj: unknown): boolean {
        return typeof obj === "object";
    }
}
