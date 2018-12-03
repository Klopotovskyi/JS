//Приоритет операторов
let x = 5+25/5-21%10;
let y = (5+25/5-21%10)>5&&(6>10);
test('test_compare_operators', () => {
    expect(x).toEqual(9);
});
test('test_compare_operators', () => {
    expect(++x).toEqual(10);
});
test('test_compare_operators', () => {
    expect(y).toEqual(9);
});
