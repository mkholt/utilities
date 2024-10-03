/**
 * Generator function that returns chunks of the given size of the input array
 * 
 * ```typescript
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * for (const chunk of chunkArray(arr, 3)) {
 *    console.log(chunk)
 * }
 * // [1, 2, 3]
 * // [4, 5, 6]
 * // [7, 8, 9]
 * ```
 * 
 * @param elms The array of objects to chunk
 * @param chunkSize The size of chunks, at least 1
 */
export function* chunkArray<TObject>(elms: TObject[], chunkSize: number) {
	if (chunkSize < 1) throw Error("Chunk size cannot be less than 1")
	for (let i = 0; i < elms.length; i += chunkSize) {
		const chunk = elms.slice(i, i + chunkSize);
		yield chunk
	}
}
