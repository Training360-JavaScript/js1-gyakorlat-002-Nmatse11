/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

'use strict';

const numericArray = [11, 22, 33];

const brutto  = function (array) { 
    return array.map(item => Math.round(item * 1.27))
    .reduce((previousNumber, currentNumber) => previousNumber + currentNumber)};


console.log(brutto(numericArray));

