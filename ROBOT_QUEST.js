//1 stage
north(2);
//2 stage
for (i = 1; i < 17; i++) {
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
//5 stage

    let c;
    c=north(1);
    if (c==true){
        north(1);
    }
    c=east(1);
    if (c==true){
        east(1);
    }
    c=south(1);
    if (c==true){
        south(1);
    }
    c=west(1);
    if (c==true){
        west(1);
    }

//universal code
//north-1
//west-2
//south-3
//east-4
let dir = 1;
for (i = 1; i < 20; i++) {
    alert(dir);
            switch(dir){
                case 1:
                    if(isFree('east')){
                        east();
                        dir = 4;

                        //break;
                    }
                    north();
                    map();
                    break;
                case 2:
                    if(isFree('north')){
                        north();
                        dir = 1;

                        //break;
                    }
                    west();
                    map();
                    break;
                case 3:
                    if(isFree('west')){
                        west();
                        dir = 2;

                        //break;
                    }
                    south();
                    map();
                    break;
                case 4:
                    if(isFree('south')){
                        south();
                        dir = 3;

                        //break;
                    }
                    east();
                    map();
                    break;
            }
            if('Congratulation, you win this level'){
                map();
                break;
            }
}

