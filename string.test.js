//Объект String - это обёртка вокруг примитивного строкового типа данных.
//Свойства string
let str='Pavlo';
let str1='Pavlo Klopotovskyi Bert';
test('test_string', () => {
    expect(str.length).toEqual(5);
});
//Свойство String.prototype представляет прототип объекта String.Все объекты String наследуются от String.prototype.
// Изменения в прототипе объекта String распространяются на все его экземпляры.

//Статический метод String.fromCharCode() возвращает строку, созданную из указанной последовательности значений Юникода.
test('test_string', () => {
    expect(String.fromCharCode(65, 66, 67)).toEqual('ABC');
});
//Статический метод String.fromCodePoint() возвращает строку, созданную из указанной последовательности кодовых точек.
test('test_string', () => {
    expect(String.fromCodePoint(0x404)).toEqual('\u0404');
});
//Метод charAt() возвращает указанный символ из строки.
test('test_string', () => {
    expect(str.charAt(2)).toEqual('v');
});
//Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу (за исключением кодовых
// точек Юникода, больших 0x10000).
test('test_string', () => {
    expect(str.charCodeAt(2)).toEqual(118);
});
//Метод codePointAt() возвращает неотрицательное целое число, являющееся закодированным в UTF-16 значением кодовой точки.
test('test_string', () => {
    expect(str.codePointAt(2)).toEqual(118);
});
//Метод concat() объединяет текст из двух или более строк и возвращает новую строку.
test('test_string', () => {
    expect(str.concat(', ', 'how', ' ', 'are', ' ', 'you?')).toEqual('Pavlo, how are you?');
});
//Метод endsWith() определяет, заканчивается ли строка символами другой строки, возвращая, соотвественно, true или false.
//Этот метод позволяет вам определять, заканчивается ли или нет строка символами другой строки
test('test_string', () => {
    expect(str1.endsWith('Pavlo')).toEqual(false);
});
//Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.
test('test_string', () => {
    expect(str1.includes('Klopotovskyi')).toEqual(true);
});
//Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван,
// начиная с индекса fromIndex. Возвращает -1, если значение не найдено.
//fromIndex
//Необязательный параметр. Местоположение внутри строки, откуда начинать поиск. Может быть любым целым числом. Значение
// по умолчанию установлено в 0
test('test_string', () => {
    expect(str1.indexOf('pot')).toEqual(9);
});
//Метод lastIndexOf() возвращает индекс последнего вхождения указанного значения в строковый объект String, на котором
// он был вызван, или -1, если ничего не было найдено.
// Поиск по строке ведётся от конца к началу, начиная с индекса fromIndex.
test('test_string', () => {
    expect(str1.indexOf('Pavlo')).toEqual(0);
});
/*Метод padEnd() дополняет текущую строку с помощью заданной строки (в конечном счете повторяя),
так чтобы результирующая строка достигла заданной длины. Дополнение применяется в конце (справа) текущей строки.*/
test('test_string', () => {
    expect(str.padEnd(10, 'pro')).toEqual('Pavlopropr');
});
//
test('test_string', () => {
    expect().toEqual();
});
//
test('test_string', () => {
    expect().toEqual();
});








//
test('test_string', () => {
    expect().toEqual();
});
