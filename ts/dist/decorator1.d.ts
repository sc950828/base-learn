declare function addAge(constructor: Function): void;
declare function logParameter(target: Object, propertyKey: string, index: number): void;
declare function method(target: any, propertyKey: string, descriptor: PropertyDescriptor): void;
declare function prop2(target: any, key: string): any;
declare function prop(target: any, key: string): any;
declare class Person10 {
    greet(message: string, name: string): string;
    name: string;
    constructor();
    say(): string;
    static run(): string;
}
declare const person2: Person10;
