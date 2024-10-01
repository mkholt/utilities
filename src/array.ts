/**
 * Generator function that returns chunks of the given size of the input array
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
