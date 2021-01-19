/*
Array functions.
*/

/**
 * @description Convert an object to an array. Can be an instance of a class or anything really.
 * @param input Input to arrayify
 * @example
 * ```typescript
 * import { arrayIfy } from 'tyvn';
 * const data: Set<string> = new Set();
 * data.add('hello');
 * data.add('world');
 * arrayIfy<Set<string>, string>(data); // ['hello', 'world']
 * ```
 */
const arrayIfy = <T, R>(input: T | Readonly<T>): Array<R> => {
	if (!input) return [];
	return [...(input as any)];
};
/**
 *
 * @param arr The input array to (chunk) slice
 * @param length The max length of each sub-array
 * @example
 * ```typescript
 * const data: Set<string> = new Set();
 * data.add('hello');
 * data.add('world');
 * limitArray<string>(arrayIfy<Set<string>, string>(data), 1) // [['hello'], ['world']]
 * ```
 */
const limitArray = <R>(arr: Array<R>, length: number): Array<Array<R>> => {
	if (arr.length < length) return [arr];
	const R: Array<Array<R>> = [];
	for (let i = 0; i < arr.length; i += length) R.push(arr.slice(i, i + length));
	return R;
};

export { arrayIfy, limitArray };
