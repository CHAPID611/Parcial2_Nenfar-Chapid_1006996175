let arrayNum : number[] = [1,2,3,4,5];
let frutas : string[] = ['manzana', 'pera', 'uva'];
let booleanos: boolean[];
let tuples: [number, string];
tuples=[1,'uno'];

//2.1
arrayNum.push(6);
console.log(arrayNum, 'push(6)');

//2.2
arrayNum.pop();
console.log(arrayNum, 'pop(6)');

//2.3
const indexof = arrayNum.indexOf(3);
console.log(indexof, 'indexof(3)');

//2.4
const extraction = arrayNum.slice(1,3);
console.log(extraction, 'extraction(1,3)');

//2.5

//2.6
const filterPar = arrayNum.filter((num)=>num % 2 ===0);
console.log(filterPar, 'filterPar');

//2.7
const sumReduce = arrayNum.reduce((num)=>num += num);
console.log(sumReduce, 'sumReduce');

//2.8
let cadena : string = 'Hola mundo'
const splitString = cadena.split(' ');
console.log(splitString, 'splitString');
const joinArray = splitString.join(',');
console.log(joinArray, 'joinArray');

//2.9
let array : number[] = [10,20,30,40,50];

//2.10
const everyPositive = array.every((num)=> num > 0);
console.log(everyPositive, 'everyPositive');

//2.11
const someMay40 = array.some((num)=> num > 40);
console.log(someMay40, 'SomeMay40');

//2.12
const array1 = [1,2,3];
const array2 = [4,5,6]; 

array1.concat(...array2)
console.log(array1, 'Array1 + arrray2');

//2.13
const array3 = [5,1,4,2,3];
const sortArray = array3.sort((a,b) => a-b);
console.log(sortArray, 'ordenarArray');

//2.14
const arrayNames = ['Juan','Pedro','Andres'];

//2.15
function verificar() : boolean{
    for(let i = 0; i<=array.length;i++){
        if(i === 4) {
            return true
         }return false;
    }
}
