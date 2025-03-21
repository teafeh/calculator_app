let saveNum1 = '';
let saveNum2 = '';
let canClear = false;
let operator = '';

function num(number){
document.getElementById('displaySelected').value += number; 
}
function clearNum(){
document.getElementById('displaySelected').value = ''; 

}
function deletaNum(){
document.getElementById('displaySelected').value = document.getElementById('displaySelected').value.slice(0, -1); 
}
function numMethod(method) {
operator = method;
saveNum1 = document.getElementById('displaySelected').value;
console.log(saveNum1, operator);
document.getElementById('displaySelected').value = '';

}
function enterAction(){
saveNum2 = document.getElementById('displaySelected').value;
if(operator==='+'){
    document.getElementById('displaySelected').value = Number(saveNum1) + Number(saveNum2);
}
if(operator==='-'){
    document.getElementById('displaySelected').value = Number(saveNum1) - Number(saveNum2);
}
if(operator==='*'){
    document.getElementById('displaySelected').value = Number(saveNum1) * Number(saveNum2);
}
if(operator==='/'){
    document.getElementById('displaySelected').value = Number(saveNum1) / Number(saveNum2);
}
}