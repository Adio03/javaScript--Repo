function data (leftOperands, operators,rigthOperands){
    let number1 = Number(leftOperands)
    let number2 = Number(rigthOperands)
    let sum;


if (operators === "+"){
    sum = number1 + number2;
}
if(operators === "-"){
    sum = number2 -number1;
}
if (operators === "/"){
    sum = number1 / number2;

}
if(operators === "*"){
    sum = number1 * number2
}
return data;
 
}
console.log(data)