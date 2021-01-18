# tyvn

### A collection of TypeScript typed functions.
**NOTE: The functions can be used in JavaScript but I do not recommend it.**

- [Array Functions](#array-functions)

# Array Functions

```ts
import { arrayIfy, limitArray } from 'tyvn';

// arrayIfy:
const data: Set<string> = new Set();
data.add('hello');
data.add('world');
console.log(arrayIfy<Set<string>, string>(data)); // ['hello', 'world'];
// limitArray (known as chunk)
console.log(limitArray<string>(arrayIfy<Set<string>, string>(data), 1)); // [ [ 'hello' ], [ 'world' ] ]
```

More info:

<details>
<summary>Arguments / Types</summary>

- - - : Typed argument, ie T/R
- - : Param

- arrayIfy:
- - - T: Type that will be expected for the input argument
- - - R: Type that the array should expect to return.
- - input: T: Something inputted. Must have same type as T.

- limitArray
- - - R: Expected type for the Array. Do not wrap inside Array<> unless the input is an Array inside an Array.
- - arr: Array&lt;R&gt;: Input. Must be an array of the type you specified.
- - length: number: What the max length of each sub array is.
</details>
