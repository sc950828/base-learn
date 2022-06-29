declare let num1: number;
declare let str1: string;
declare let bool1: boolean;
declare let null1: null;
declare let undef1: undefined;
declare let symbol1: symbol;
declare let bigint1: bigint;
declare let v2: void;
declare let fun1: () => void;
declare let arr1: number[];
declare let arr2: string[];
declare let arr3: (string | number)[];
declare let arr4: Array<number>;
declare let arr5: Array<string>;
declare let arr6: Array<string | number>;
declare let value: any;
declare let value2: unknown;
declare let value3: any;
declare let value4: unknown;
declare type Flag1 = {
    x: number;
};
declare type Flag2 = Flag1 & {
    y: string;
};
declare let flag3: Flag2;
interface User1 {
    name: string;
}
interface User2 {
    age: number;
}
declare type User3 = User1 & User2;
declare const user: User3;
declare let flag1: "hello";
declare let flag2: 1;
declare let flag4: true;
declare let flag: null | undefined | string;
