declare class Parent {
    name: string;
    constructor(name: string);
}
declare abstract class A1 {
    abstract age: number;
    sex: string;
    say(): void;
    abstract hi(): void;
    abstract hi2(num: number): number;
}
interface Inter1 {
    name: string;
    hello(): void;
}
interface Inter2 {
    name2: string;
    hello2: () => void;
}
declare class Son extends A1 implements Inter1, Inter2 {
    age: number;
    name: string;
    name2: string;
    hi(): void;
    hi2(num: number): number;
    hello(): void;
    hello2(): void;
}
declare const s1: Son;
declare abstract class A2 {
    abstract info: string;
}
declare class A3 {
}
declare abstract class A4 extends A2 {
}
declare abstract class A5 extends A3 {
}
