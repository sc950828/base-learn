declare class Animal {
    type: string;
    say: () => void;
    constructor(type: string);
    walk(): void;
}
declare const a1: Animal;
declare class Animal2 {
    type: string;
    static count: number;
    constructor(type: string);
    static say(): void;
}
declare const a2: Animal2;
