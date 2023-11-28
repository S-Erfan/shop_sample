
type CallApi<I, O> = (method: string, url: string, body: I) => O;

export type { CallApi };

// type GenericFunction<T> = (arg: T) => T;
