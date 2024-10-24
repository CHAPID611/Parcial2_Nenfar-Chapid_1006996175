function calcularFactorial(num : number = 20) : number{

let factorial = 1;
for(let i = 1; i<=num;i++){
if(i % 2 !==0){
    for(let j = 1; j<=i; j++ ){
        factorial = j*i;
        console.log(factorial)
    }
}
}
return
}