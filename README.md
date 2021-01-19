# tyvn

### A collection of TypeScript typed functions.
**NOTE: The functions can be used in JavaScript but I do not recommend it.**

- [Array Functions](#array-functions)
- [Object Functions](#object-functions)

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

# Object Functions

```typescript
import { addProp } from 'tyvn';
addProp<{ one: number, two: number }>(['one', 'two'], 5, { one: 1, two: 2 }); // 3
addProp<{ one: number, two: number }>('one', 5, { one: 1, two: 2 }); // 1
addProp<{ one: number, two: number }>(['one', 'two'], 5, { one: 1, two: 'Hello world!' }); // 6 (you'll also be screamed as two should be a number!)
```
More info:

<details>
<summary>Arguments / Types</summary>

- - - : Typed argument, ie T/R
- - : Param

- addProp:
- - - T: Type of the inputs that will be inputted.
- - prop: string | string[]: Properties to be accounted for when adding up the numbers
- - defaultValue: number: The default value that'll be added to the result if either the value on one of the inputs is not a number / doesn't exist.
- - startValue: number: The base value.
- - ...inputs: Array&lt;T|Readonly&lt;T&gt;&gt; The inputs. It's a sweeper so as many as you'd like can be added. Note that it has to be relatable to T. Either Readonly or an instance of the interface provided.
</details>