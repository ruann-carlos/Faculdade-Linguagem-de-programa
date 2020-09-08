window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    let tabuada = Number(document.getElementById("tabuada").value), 
        result, i=0, saida= "";

    while(i<=10){
        result = tabuada * i;
        i++;

        saida= saida + `</br> ${tabuada} x ${i-1} = ${result}`;
    }
    document.getElementById("valor").innerHTML = saida;
}