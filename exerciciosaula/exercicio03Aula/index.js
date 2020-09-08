window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    let resp = 's', i = 0, soma=0;
    

    while(resp === 's'){
        let numero = Number(prompt("Informe um número"));
        soma = soma + numero;
        i++;
        resp = prompt("Deseja continuar?").toLowerCase();
    }
    document.getElementById("valor").innerHTML = `Média = ${soma / i}`
}