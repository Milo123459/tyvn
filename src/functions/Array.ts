/*
Array functions.
*/

export interface FilterAccept<R> {
	(value: R): void;
}

export interface FilterDeny {
	(): void;
}

export interface FilterFn<T, R> {
	(
		accept: FilterAccept<R>,
		deny: FilterDeny,
		value: T,
		index: number,
		array: Array<T>
	): void | FilterAccept<T> | FilterDeny;
}

/**
 * @description Convert an object to an array. Can be an instance of a class or anything really.
 * @param input Input to arrayify
 * @example
 * import { arrayIfy } from 'tyvn';
 * const data: Set<string> = new Set();
 * data.add('hello');
 * data.add('world');
 * arrayIfy<Set<string>, string>(data); // ['hello', 'world']
 */
const arrayIfy = <T, R>(input: T | Readonly<T>): Array<R> => {
	if (!input) return [];
	return [...(input as any)];
};
/**
 * @description Create sub arrays depending on the max length of them and the input array.
 * @param arr The input array to (chunk) slice
 * @param length The max length of each sub-array
 * @example
 * const data: Set<string> = new Set();
 * data.add('hello');
 * data.add('world');
 * limitArray<string>(arrayIfy<Set<string>, string>(data), 1) // [['hello'], ['world']]
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
 * @example
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

/**
 * @description Filter and map merged into one function.
 * @param arr The array input. Must be an array of T.
 * @param filter The filter function.
 * @example
 * filterMap<string, string>(['a', 'th', 'is', 'wi', 'll', 'display'], (accept, deny, value) => {
 *  if(value.length == 2) {
 *      return accept(value);
 *  } else return deny();
 * }) // ['th', 'is', 'wi', 'll']
 */
const filterMap = <T, R>(arr: Array<T>, filter: FilterFn<T, R>): Array<R> => {
	const res: Array<R> = [];
	const accept = (value: R) => void res.push(value);
	const deny = () => true;
	arr.map((value: T, index: number, array: Array<T>) =>
		filter(accept, deny, value, index, array)
	);

	return res;
};

/**
 * @description Remove all elements from an array that are equal to the value supplied
 * @param arr The array inputted. Must be an array of T
 * @param value The value to remove. Must be the same typeof T
 * @example
 * removeAll<string>(['hello', 'world', 'hello'], 'hello'); // ['world'];
 */
const removeAll = <T>(arr: Array<T>, value: T): Array<T> => {
	return arr.filter((val: T) => val != value);
};

export { arrayIfy, limitArray, limitArrayify, filterMap, removeAll };
