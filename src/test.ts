import { arrayIfy, limitArray, addProp } from '.';
const data: Set<string> = new Set();
data.add('hello');
data.add('world');
console.log(arrayIfy<Set<string>, string>(data));
console.log(limitArray<string>(arrayIfy<Set<string>, string>(data), 1));
console.log(
	addProp<{ one: number; two: number }>(['one', 'two'], 5, 0, {
		one: 69,
		two: 3,
	})
);
