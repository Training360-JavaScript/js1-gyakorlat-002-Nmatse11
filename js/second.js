/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/
'use strict';

const array = ['cica', 'fa', 8, true, 'házikó'];
const value = 'fa';


const checker = function (array, value) {
    const exists = array.includes(value);     
    const index = array.indexOf(value);    
    const allElementsAreNumbers = array.every(item => typeof item === 'number');    
    const someElementsAreNumbers = array.some(item => typeof item === 'number');
    
    return {exists: exists,
        index: index,
        allElementsAreNumbers: allElementsAreNumbers,
        someElementsAreNumbers: someElementsAreNumbers}
    }
    
    /*
    const exists = array.includes(value);     
    const index = array.indexOf(value);    
    const allElementsAreNumbers = array.every(item => typeof item === 'number');    
    const someElementsAreNumbers = array.some(item => typeof item === 'number');
    
    console.log(exists);
    console.log(index);
    console.log(allElementsAreNumbers);
    console.log(someElementsAreNumbers);
    */
    
    