import {
	arrayIfy,
	limitArray,
	addProp,
	limitArrayify,
	filterMap,
	removeAll,
	takeUntil,
	waitUntil,
} from '.';
const data: Set<string> = new Set();
data.add('hello');
data.add('world');
console.log(arrayIfy<Set<string>, string>(data));
console.log(limitArray<string>(arrayIfy<Set<string>, string>(data), 1));
console.log(limitArrayify<Set<string>, string>(data, 1));
console.log(
	addProp<{ one: number; two: number }>(
		['one', 'two'],
		5,
		0,
		{
			one: 6,
			two: 3,
		},
		{ one: 9, two: 12 }
	)
);
console.log(
	filterMap<string, string>(
		['a', 'th', 'is', 'wi', 'll', 'display'],
		(accept, deny, value) => {
			if (value.length == 2) {
				return accept(value);
			} else return deny();
		}
	)
);
console.log(removeAll<string>(['hello', 'world', 'hello'], 'hello'));
console.log(
	takeUntil<string>(
		['hello', 'world', 'this', 'will', 'not', 'be', 'displayed'],
		(value: string, index: number) => index < 2
	)
);
console.log(
	waitUntil<string>(
		['hello', 'world', 'this', 'will', 'not', 'be', 'displayed'],
		(value: string, index: number) => index > 2
	)
);
