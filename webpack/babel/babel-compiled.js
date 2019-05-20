'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var a = 1,
    b = 2,
    c = a + b;
console.log(c);

[1, 2, 3].map(function (item) {
    return item + 'item';
});

// es6的大部分功能， 其实es5也能实现
var xlz = { name: '范大妞', hometown: '吉林' };
xlz = _extends({}, xlz, { "company": '渣浪' });
