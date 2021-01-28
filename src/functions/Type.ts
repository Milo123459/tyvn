/*
TypeScript Type functions
*/

// These are internal.

export type keysWithType<T, U> = {
	[K in keyof T]-?: T[K] extends U ? K : never;
}[keyof T];
