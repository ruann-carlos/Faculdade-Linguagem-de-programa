window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    let opcao;
    let valor, rendimento, valorFinal = 0,totalinvestido=0,totalrendimento=0, 
    codigo= Number(prompt("Digite o código do cliente"));
    do{
        opcao = Number(prompt(`Digite o Tipo de investimento `));
        valor = Number(prompt(`Digite o valor do investimento`));
        totalinvestido += valor;
        switch(opcao){
            case 1: 
                rendimento = (valor * 0.015);
                totalrendimento+= rendimento;
                break;
            case 2: 
                rendimento = (valor * 0.02);
                totalrendimento+= rendimento;
                break;
            case 3: 
                rendimento = (valor * 0.04);
                totalrendimento+= rendimento;
                break;
            default: alert("Opção inválida");
                break;
        }
        codigo= Number(prompt("Digite o código do cliente ou 0 para encerrar"));
    }while(codigo != 0);
    alert(`o valor final do investimento foi de ${totalinvestido} e o total de rendimentos foi ${totalrendimento}`);
}
