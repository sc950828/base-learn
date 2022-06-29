declare function returnItem<T>(para: T): T;
declare function swap<T, U>(tuple: [T, U]): [U, T];
declare type Gen1 = {
    name: string;
};
declare function genfun1(): Promise<void>;
declare class Stack<T> {
    private arr;
    push(item: T): void;
    pop(): void;
}
declare const stack1: Stack<number>;
declare type Union1 = string | number;
declare class Stack2<T extends Union1> {
    private arr;
    push(item: T): void;
    pop(): void;
}
declare const stack2: Stack2<string>;
declare const stack3: Stack2<number>;
