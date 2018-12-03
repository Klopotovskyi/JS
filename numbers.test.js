'use strict';
//свойства обьекта NUMBER
//Наибольшее число из возможных для представления
test('test_numbers', () => {
    expect(Number.MAX_VALUE).toEqual(1.7976931348623157e+308);
});
//Наименьшее число из возможных для представления
test('test_numbers', () => {
    expect(Number.MIN_VALUE).toEqual(5e-324);
});
//Специальное "Не числовое" ("not a number") значение
test('test_numbers', () => {
    expect(Number.NaN).toEqual(NaN);
});
//Специальное значение "Минус бесконечность"; возвращается при переполнении
test('test_numbers', () => {
    expect(Number.NEGATIVE_INFINITY).toEqual(-Infinity);
});
//Специальное значение "Плюс бесконечность"; возвращается при переполнении
test('test_numbers', () => {
    expect(Number.POSITIVE_INFINITY).toEqual(+Infinity);
});
//Разница между единицей и наименьшим значением, большим единицы, которое может быть представлено типом Number
test('test_numbers', () => {
    expect(Number.EPSILON).toEqual(2.220446049250313e-16);
});
//Минимальное целое, безопасное число в JavaScript.
test('test_numbers', () => {
    expect(Number.MIN_SAFE_INTEGER).toEqual(-9007199254740991);
});
//Максимальное целое, безопасное число в JavaScript.
test('test_numbers', () => {
    expect(Number.MAX_SAFE_INTEGER).toEqual(9007199254740991);
});
//
//
//Методы обьекта NUMBER
//Принимает строку как аргумент, и возвращает числовое значение с плавающей точкой, которое удалось распознать.
test('test_numbers', () => {
    expect(Number.parseFloat('105.5')).toEqual(105.5);
});
//Принимает строку как аргумент, и возвращает целочисленное значение в заданной системе исчисления, которое удалось распознать.
test('test_numbers', () => {
    expect(Number.parseInt('105.5')).toEqual(105);
});
//Определяет, является ли число, переданное в качестве аргумента, конечным.
test('test_numbers', () => {
    expect(Number.isFinite(-Infinity)).toEqual(false);
});
//Определяет, является ли число, переданное в качестве аргумента, целым.
test('test_numbers', () => {
    expect(Number.isInteger(105.5)).toEqual(false);
});
//Определяет, является ли число, переданное в качестве аргумента, NaN (не числом).
test('test_numbers', () => {
    expect(Number.isNaN(0/0)).toEqual(true);
});
//Определяет, является ли .число, переданное в качестве аргумента, целым и безопасным
test('test_numbers', () => {
    expect(Number.isSafeInteger(-9007199254740991)).toEqual(true);
});

