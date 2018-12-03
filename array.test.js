//Массив (Array) в JavaScript является глобальным объектом, который используется для создания массивов; которые
// представляют собой высокоуровневые спископодобные объекты.

let arr = [1, 2, 3, 5, 8];
//Свойства
//Length свойство объекта, который является экземпляром вида Array , устанавливает или возвращает число элементов в
// этом массиве. Значение безнаковое 32 битное целое число, которое всегда численно больше чем самый наибольший индекс
// в массиве.
test('test_arrays', () => {
    expect(arr.length).toEqual(5);
});
//Методы
//Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
test('test_arrays', () => {
    expect(Array.from('Pavlo')).toEqual(["P", "a", "v", "l", "o"]);
});
//
//Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
test('test_arrays', () => {
    expect(Array.isArray(arr)).toEqual(true);
});
//
//Метод Array.of() создаёт новый экземпляр массива Array из произвольного числа аргументов,
// вне зависимости от числа или типа аргумента.
test('test_arrays', () => {
    expect(Array.of(1, 2, 3)).toEqual([1, 2, 3]);
});
//Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с
// другими массивами и/или значениями, переданными в качестве аргументов.
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
test('test_arrays', () => {
    expect(array1.concat(array2)).toEqual(["a", "b", "c", "d", "e", "f"]);
});
//Метод copyWithin() копирует последовательность элементов массива внутри него в позицию, начинающуюся
// по индексу target. Копия берётся по индексам, задаваемым вторым и третьим аргументами start и end.
// Аргумент end является необязательным и по умолчанию равен длине массива.
//arr.copyWithin(target, start[, end = this.length])
test('test_arrays', () => {
    expect([1, 2, 3, 4, 5].copyWithin(0, 3, 4)).toEqual([4, 2, 3, 4, 5]);
});
//Метод entries() возвращает новый объект итератора массива Array Iterator, содержащий пары ключ /
// значение для каждого индекса в массиве.
let earr = ['a', 'b', 'c'].entries();
test('test_arrays', () => {
    expect(earr.next().value).toEqual([0, "a"]);
});
//Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.
//fill with 0 from position 2 until position 4
test('test_arrays', () => {
    expect(arr.fill(0, 2, 4)).toEqual([1, 2, 0, 0, 8]);
});
// fill with 5 from position 1
test('test_arrays', () => {
    expect(arr.fill(5, 1)).toEqual([1, 5, 5, 5, 5]);
});
//Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
//
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

test('test_arrays', () => {
    expect(words.filter(word => word.length > 6)).toEqual(["exuberant", "destruction", "present"]);
});
//Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции.
// В противном случае возвращается -1.
//Следующий пример находит в массиве индекс элемента, являющийся простым числом (либо возвращает -1,
// если в массиве нет простых чисел).
function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}
test('test_arrays', () => {
    expect([4, 6, 7, 12].findIndex(isPrime)).toEqual(2);
});
//Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
//
let pets = ['cat', 'dog', 'bat'];
//Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
test('test_arrays', () => {
    expect(pets.includes('cat')).toEqual(true);
});
//Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
let elements = ['Fire', 'Wind', 'Rain'];
test('test_arrays', () => {
    expect(elements.join('-')).toEqual("Fire-Wind-Rain");
});
test('test_arrays', () => {
    expect(elements.join()).toEqual("Fire,Wind,Rain");
});
//Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1,
// если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса fromIndex.
let animals = ['Dado', 'Tiger', 'Penguin', 'Dodo'];
test('test_arrays', () => {
    expect(animals.lastIndexOf('Dodo')).toEqual(3);
});
//Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
// отображение, когда функция требует один аргумент. Аргумент будет автоматически присваиваться каждому элементу
// массива, когда map проходит по оригинальному массиву.
let numbers = [1, 4, 9];
let doubles = numbers.map(function(num) {
    return num * 2;
});
test('test_arrays', () => {
    expect(doubles).toEqual([2, 8, 18]);
});
//Метод pop() удаляет последний элемент из массива и возвращает его значение.
let myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];
test('test_arrays', () => {
    expect(myFish.pop()).toEqual("хирург");
});
test('test_arrays', () => {
    expect(myFish).toEqual(["ангел", "клоун", "мандарин"]);
});
//Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
let arr3=['A', 'B', 'C'];
test('test_arrays', () => {
    expect(arr3.push('D')).toEqual(4);
    expect(arr3).toEqual(["A", "B", "C", "D"]);
});
//Метод reverse() на месте обращает порядок следования элементов массива.
// Первый элемент массива становится последним, а последний — первым.
test('test_arrays', () => {
    expect(["A", "B", "C", "D"].reverse()).toEqual(["D", "C", "B", "A"]);
});
//Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
test('test_arrays', () => {
    expect(["A", "B", "C", "D"].shift()).toEqual("A");
});
//Метод slice() возвращает новый массив, содержащий копию части исходного массива
test('test_arrays', () => {
    expect(["A", "B", "C", "D"].slice(2,4)).toEqual(["C", "D"]);
});
//Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно
// устойчива (англ.). Порядок cортировки по умолчанию соответствует порядку кодовых точек Unicode.
test('test_arrays', () => {
    expect([1, 2, 10, 21, 18, 55].sort()).toEqual([1, 10, 18, 2, 21, 55]);
});
//Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
//array.splice(start, deleteCount[, item1[, item2[, ...]]])
test('test_arrays', () => {
    expect([1, 2, 10, 21, 18, 55].splice(2, 1)).toEqual([10]);
});
//Метод toString() возвращает строковое представление указанного массива и его элементов.
test('test_arrays', () => {
    expect([1, 2, 10, 21, 18, 55].toString()).toEqual("1,2,10,21,18,55");
});
//Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
test('test_arrays', () => {
    expect([1, 2, 10, 21, 18, 55].unshift(33)).toEqual(7);
});

