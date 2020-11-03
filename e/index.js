window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    const order = [];
    var number = [];//array de números
    for(let i = 0; i<5; i++){
        //adicionando números ao array
        numbers(number,i);
        document.getElementById("valor").innerHTML = `Os números lidos são: ${number[0]} ,${number[1]}, ${number[2]}, ${number[3]} `
        //ordenando itens no array
        for(let i = 0; i<=3; i++){
            ordenate(number);
            document.getElementById("valores").innerHTML = `Os números ordenados são: ${number[0]} ,${number[1]}, ${number[2]}, ${number[3]} `
            //ordenando em ordem decrescente
            numberminus(number);
            document.getElementById("valorminus").innerHTML = `Os números ordenados são: ${number[0]} ,${number[1]}, ${number[2]}, ${number[3]} `
        }
    }
}
//função que ordena os itens do array
const ordenate = (arr) => {
    arr.sort(function(a,b){
        return (a - b);
    }
    )}
//função que obtem os números do usuário
const numbers = (arr,cont) => {
    for(let a = 0; a < 4; a++){
        arr.push(window.prompt(`Digite o valor de ${cont + 1}`));
    }
}
const numberminus = (arr) => {
    arr.sort(function(a,b){
        return (b-a);
    }
    )}