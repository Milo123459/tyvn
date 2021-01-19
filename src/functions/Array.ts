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
/**
 * @description A convenience functions. Combines arrayIfy and limitArray
 * @param input The array of input. Has to be either a readonly version or a instanceof T.
 * @param length The max length of each sub array
 * ```typescript
 * const data: Set<string> = new Set();
 * data.add('hello');
 * data.add('world');
 * limitArrayify<Set<string>, string>(data, 1); // [['hello'], ['world']]
 */
const limitArrayify = <T, R>(
	input: T | Readonly<T>,
	length: number
): Array<Array<R>> => {
	return limitArray<R>(arrayIfy<T, R>(input), length);
};

export { arrayIfy, limitArray, limitArrayify };
