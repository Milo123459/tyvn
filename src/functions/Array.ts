/*
Array functions.
*/

const arrayIfy = <T, R>(input: T | Readonly<T>): Array<R> => {
	if (!input) return [];
	return [...(input as any)];
};

const limitArray = <R>(arr: Array<R>, length: number): Array<Array<R>> => {
	if (arr.length < length) return [arr];
	const R: Array<Array<R>> = [];
	for (let i = 0; i < arr.length; i += length) R.push(arr.slice(i, i + length));
	return R;
};

export { arrayIfy, limitArray };
