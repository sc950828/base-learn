interface User {
    name: string;
    age?: number;
    readonly isMale: boolean;
    hi: (num: number) => number;
    say?: (str: string) => string;
    readonly say2: (str: string) => string;
    hi2(): void;
    hi3: () => void;
    [prop1: string]: any;
}
declare let user1: User;
interface Say {
    (words: string): string;
}
declare const say: Say;
interface User2 {
    name: string;
}
interface User2 {
    age: number;
}
declare const user2: User2;
