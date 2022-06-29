declare class People1 {
    name: string;
    private _sex;
    protected count: number;
    readonly num: number;
    constructor(name: string);
    get sex(): string;
    set sex(val: string);
    say(): void;
    say1(): void;
    private say2;
    sayCount(): void;
}
declare class Child1 extends People1 {
    age: number;
    constructor(name: string, age: number);
    sayCount2(): void;
}
declare const p1: People1;
declare const c2: Child1;
