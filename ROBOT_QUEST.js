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
    if (c===true){
        north(1);
    }
    c=east(1);
    if (c===true){
        east(1);
    }
    c=south(1);
    if (c===true){
        south(1);
    }
    c=west(1);
    if (c===true){
        west(1);
    }

//universal code
//north-1
//west-2
//south-3
//east-4
let dir = 1;
for (i = 1; i < 226; i++) {
    //alert(dir);
    alert(i);
    switch(dir){
                case 1:
                    if(isFree('east')){
                        east();
                        dir = 4;
                        break;
                    }else {
                        north();
                        map();
                        break;
                        }
                case 2:
                    if(isFree('north')){
                        north();
                        dir = 1;
                        break;
                    }else {
                       west();
                        map();
                        break;
                        }
                case 3:
                    if(isFree('west')){
                        west();
                        dir = 2;
                        break;
                    }else {
                        south();
                        map();
                        break;
                        }
                case 4:
                    if(isFree('south')){
                        south();
                        dir = 3;
                        break;
                    }else {
                        east();
                        map();
                        break;
                        }
            }
//повороты налево при тупике впереди и справа
    if(isFree('north')===false && isFree('east')===false && isFree('west')===true && dir===1){dir=2;}
    if(isFree('north')===false && isFree('west')===false && isFree('south')===true && dir===2){dir = 3;}
    if(isFree('south')===false && isFree('west')===false && isFree('east')===true && dir===3){dir = 4;}
    if(isFree('east')===false && isFree('south')===false && isFree('north')===true && dir===4){dir = 1;}
    //проверка та тупик
    if(isFree('north')===false && isFree('east')===false && isFree('west')===false && dir===1){dir = 3;}
    if(isFree('north')===false && isFree('west')===false && isFree('south')===false && dir===2){dir = 4;}
    if(isFree('south')===false && isFree('west')===false && isFree('east')===false && dir===3){dir = 1;}
    if(isFree('east')===false && isFree('south')===false && isFree('north')===false && dir===4){dir = 2;}
    //не понял как правильно сделать осталеживание сообщений консоли по по окончанию
    // if(console.log('Congratulation, you finish all levels. Wait for updates')===true){alert('Победа'); break;}
}

