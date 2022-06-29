"use strict";
var SomeNameSpace1;
(function (SomeNameSpace1) {
    SomeNameSpace1.a1 = 1;
    SomeNameSpace1.str1 = "randy";
    SomeNameSpace1.say = () => {
        console.log("SomeNameSpace1");
    };
})(SomeNameSpace1 || (SomeNameSpace1 = {}));
var SomeNameSpace2;
(function (SomeNameSpace2) {
    SomeNameSpace2.a1 = 1;
    SomeNameSpace2.str1 = "randy";
    SomeNameSpace2.say = () => {
        console.log("SomeNameSpace2");
    };
})(SomeNameSpace2 || (SomeNameSpace2 = {}));
console.log(SomeNameSpace2.a1);
