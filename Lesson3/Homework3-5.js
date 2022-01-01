'use strict';

function showNumber(number){
    console.log(number);
    return ++number;
}

for(let i = 0; i<=9; i = showNumber(i)){}