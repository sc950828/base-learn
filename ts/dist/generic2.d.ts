declare class User6 {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare type objKeys = keyof User6;
declare type objValues = User6[objKeys];
declare const user8: {
    username: string;
    id: number;
    token: string;
    avatar: string;
    role: string;
};
declare function pick<T, K extends keyof T>(o: T, names: K[]): T[K][];
declare const res: number[];
interface User7 {
    username: string;
    id: number;
    token: string;
    avatar: string;
    role: string;
}
declare type partial<T> = {
    [K in keyof T]?: T[K];
};
declare type partialUser = partial<User7>;
