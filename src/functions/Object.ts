/*
Object functions.
*/

import { keysWithType } from './Type';

/**
 * @description Add multiple properties togethor to calculate a number. inputs is a sweeper.
 * @param prop The property that should be called on the object. Can be an array.
 * @param defaultValue The default value it'll fallback to if one of the properties doesn't exist.
 * @param startValue The base value.
 * @param inputs Objects that'll be inputted. It is a sweeper functions so you can add in however much you'd like.
 * @example
 * import { addProp } from 'tyvn';
 *
 * addProp<{ one: number, two: number }>(['one', 'two'], 5, { one: 1, two: 2 }); // 3
 * addProp<{ one: number, two: number }>('one', 5, { one: 1, two: 2 }); // 1
 * addProp<{ one: number, two: number }>(['one', 'two'], 5, { one: 1, two: 'Hello world!' }); // 6
 * addProp<{ one: number; two: number }>(['one', 'two'], 5, 0, { one: 6, two: 3 }, { one: 9, two: 12 }); // 30
 */
const addProp = <T>(
	prop: keysWithType<T, number> | Array<keysWithType<T, number>>,
	defaultValue: number,
	startValue: number,
	...inputs: Array<T | Readonly<T>>
): number => {
	let res: number = startValue;
	inputs.map((value) => {
		if (prop instanceof Array) {
			prop.map((value_: keyof T) => {
				if (value[value_] && typeof value[value_] == 'number') {
					res += value[value_ as string];
				} else {
					res += defaultValue;
				}
			});
		} else {
			if (value[prop] && typeof value[prop] == 'number') {
				res += value[prop as string];
			} else {
				res += defaultValue;
			}
		}
	});
	return res;
};

export { addProp };
