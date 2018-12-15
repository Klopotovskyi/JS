//1 stage
north(2);
//2 stage
for (i = 1; i < 16; i++) {
    east(i);
}
//3 stage
for (i = 1; i <= 7; i++) {
    south(1);
    east(1);
}
//4 stage
south(1);
for (i = 1; i <= 3; i++) {
    east(i)
}
south(2);
east(1);
for (i = 1; i <= 3; i++) {
    south(i);
}
east(2);
south(1);
