//
test('test_equality_comparison_algorithm', () => {
    expect(String(123)).toEqual('123');
});
//
test('test_equality_comparison_algorithm', () => {
    expect(123+'333').toEqual('123333');
});
/*Boolean('')           // false
Boolean(0)            // false
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
Остальное - true
*/
test('test_equality_comparison_algorithm', () => {
    expect(Boolean('mark')).toEqual(true);
});
//
test('test_equality_comparison_algorithm', () => {
    expect(123&&Boolean(-0)).toEqual(false);
});
//Численное преобразование
/*Для явного преобразования к числу нужно применить функцию Number()
Неявное преобразование несколько запутаннее, так как оно вызывается
операторы сравнения (>, <, <=,>=)
бинарные операторы (| & ^ ~)
арифметические операторы (- + * / % ).
унарный оператор +
оператор нестрогого равенства == (включая !=)
 */
test('test_equality_comparison_algorithm', () => {
    expect('35'/7).toEqual(5);
});

test('test_equality_comparison_algorithm', () => {
    expect(Number('35')/5).toEqual(7);
});

test('test_equality_comparison_algorithm', () => {
    expect('123'==321).toEqual(false);
});

test('test_equality_comparison_algorithm', () => {
    expect('123'=='321').toEqual(false);
});
test('test_equality_comparison_algorithm', () => {
    expect(Number(null)).toEqual(0);
});
test('test_equality_comparison_algorithm', () => {
    expect(Number('12s')).toEqual(NaN);
});
test('test_equality_comparison_algorithm', () => {
    expect(Number('-11.58')).toEqual(-11.58);
});
test('test_equality_comparison_algorithm', () => {
    expect(Number(true)).toEqual(1);
});
//При применении == к null или undefined, численное преобразование не происходит, так как null может равняться
// только null или undefined, и ничему другому
test('test_equality_comparison_algorithm', () => {
    expect(null == 0).toEqual(false);
});
test('test_equality_comparison_algorithm', () => {
    expect(null == undefined).toEqual(true);
});
//NaN не равен ничему, даже самому себе.

//Преобразование типов для объектов
test('test_equality_comparison_algorithm', () => {
    expect(true + false).toEqual(1);
});
test('test_equality_comparison_algorithm', () => {
    expect(12 / "6").toEqual(2);
});
test('test_equality_comparison_algorithm', () => {
    expect('number' + 15 + 3 ).toEqual('number153');
});
test('test_equality_comparison_algorithm', () => {
    expect('foo' + + 'bar').toEqual('fooNaN');
});
test('test_equality_comparison_algorithm', () => {
    expect('true' == true).toEqual(false);
});
test('test_equality_comparison_algorithm', () => {
    expect(false == 'false').toEqual(false);
});
test('test_equality_comparison_algorithm', () => {
    expect(null == '').toEqual(false);
});
test('test_equality_comparison_algorithm', () => {
    expect(!!"false" == !!"true").toEqual(true);
});
test('test_equality_comparison_algorithm', () => {
    expect(['x'] == 'x').toEqual(true);
});
test('test_equality_comparison_algorithm', () => {
    expect([] + null + 1).toEqual('null1');
});
test('test_equality_comparison_algorithm', () => {
    expect([1,2,3] == [1,2,3]).toEqual(false);
});
test('test_equality_comparison_algorithm', () => {
    expect({}+[]+{}+[1]).toEqual("[object Object][object Object]1");
});
test('test_equality_comparison_algorithm', () => {
    expect(!+[]+[]+![]).toEqual("truefalse");
});



