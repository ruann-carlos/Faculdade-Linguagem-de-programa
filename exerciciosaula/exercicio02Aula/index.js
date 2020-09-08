window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    let i=0, soma = 0, numeros = Number(prompt(`Dsigite a quantidade de números para soma`));

    while(i < numeros ){

        let numero = Number(prompt("Informe um número"));
        soma = soma + numero;
        i++;
    }
    document.getElementById("valor").innerHTML = `Média = ${soma / numeros}`
}