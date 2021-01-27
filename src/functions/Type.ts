/*
TypeScript Type functions
*/

// These are internal.

/**
 * @ignore
 * @description Get keys from an interface that are equal to a specified type
 * @example
 * keysWithType<{ displayed: number, again: number, not: string }, number>; // ['displayed', 'again']
 */
export type keysWithType<T, U> = {
	[K in keyof T]-?: T[K] extends U ? K : never;
}[keyof T];
