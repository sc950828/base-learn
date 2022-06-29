declare type Foo = {
    baz: [number, "randy"];
    bar: true;
};
declare const test1: Foo;
declare function isString(test: any): test is string;
declare function example(foo: number | string): void;
