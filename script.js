//your code here
let input = document.getElementById("input")
let expression = '';
function solve(e){
// console.log(e)
if(e === 'clear'){
    expression = "";
    // console.log(expression)
    input.value = expression
}
else if(e === 'ans'){
    let result = eval(expression)
    input.value = result
}
else{
    expression = expression + e
    input.value = expression;
}
}