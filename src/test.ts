import { arrayIfy, limitArray } from '.';
const data: Set<string> = new Set();
data.add('hello');
data.add('world');
console.log(arrayIfy<Set<string>, string>(data));
console.log(limitArray<string>(arrayIfy<Set<string>, string>(data), 1));
