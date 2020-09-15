window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    const order = [];
    var number = [];//array de números
    //adicionando números ao array
    numbers(number);
    document.getElementById("valor").innerHTML = `Os números lidos são: ${number[0]} ,${number[1]}, ${number[2]}, ${number[3]} `
    //ordenando itens no array
    ordenate(number);
    document.getElementById("valores").innerHTML = `Os números ordenados são: ${number[0]} ,${number[1]}, ${number[2]}, ${number[3]} `
}
//função que ordena os itens do array
const ordenate = (arr) => {
    arr.sort();
}
//função que obtem os números do usuário
const numbers = (arr) => {
    for(let a = 0; a < 4; a++){
        arr.push(window.prompt("Digite um número"));
    }
}