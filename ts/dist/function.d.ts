declare function fun_1(num1: number, num2: number): number;
declare const fun_2: (num1: number, str1: string) => string;
declare function fun_3(): void;
declare const fun_4: (num1: number, str1: string) => string;
declare const fun_6: () => void;
declare type fun5Type = (num1: number, str1: string) => string;
declare const fun_5: fun5Type;
declare type Add = (x: number, y: number, z?: number) => number;
declare let add: Add;
declare type Add2 = (y: number, x?: number) => number;
declare let add2: Add2;
declare const add3: (x: number | undefined, y: number) => number;
interface Direction {
    top: number;
    bottom?: number;
    left?: number;
    right?: number;
}
declare function assigned(all: number): Direction;
declare function assigned(topAndBottom: number, leftAndRight: number): Direction;
declare function assigned(top: number, right: number, bottom: number, left: number): Direction;
