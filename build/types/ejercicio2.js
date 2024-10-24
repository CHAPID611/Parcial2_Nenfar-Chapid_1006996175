let arrayNum = [1, 2, 3, 4, 5];
let frutas = ['manzana', 'pera', 'uva'];
let booleanos;
let tuples;
tuples = [1, 'uno'];
arrayNum.push(6);
console.log(arrayNum, 'push(6)');
arrayNum.pop();
console.log(arrayNum, 'pop(6)');
const indexof = arrayNum.indexOf(3);
console.log(indexof, 'indexof(3)');
const extraction = arrayNum.slice(1, 3);
console.log(extraction, 'extraction(1,3)');
const filterPar = arrayNum.filter((num) => num % 2 === 0);
console.log(filterPar, 'filterPar');
const sumReduce = arrayNum.reduce((num) => num += num);
console.log(sumReduce, 'sumReduce');
let cadena = 'Hola mundo';
const splitString = cadena.split(' ');
console.log(splitString, 'splitString');
const joinArray = splitString.join(',');
console.log(joinArray, 'joinArray');
let array = [10, 20, 30, 40, 50];
const everyPositive = array.every((num) => num > 0);
console.log(everyPositive, 'everyPositive');
const someMay40 = array.some((num) => num > 40);
console.log(someMay40, 'SomeMay40');
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
array1.concat(...array2);
console.log(array1, 'Array1 + arrray2');
const array3 = [5, 1, 4, 2, 3];
const sortArray = array3.sort((a, b) => a - b);
console.log(sortArray, 'ordenarArray');
const arrayNames = ['Juan', 'Pedro', 'Andres'];
function verificar() {
    for (let i = 0; i <= array.length; i++) {
        if (i === 4) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=ejercicio2.js.map