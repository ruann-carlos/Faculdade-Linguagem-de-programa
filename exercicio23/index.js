window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    let opcao;
    do{
        opcao = Number(prompt(`Digite: \n 1.Novo Salário \n 2.Férias \n 3.Décimo Terceiro \n 4.Sair`));
        let salario = 0;
        switch(opcao){
            case 1: 
                salario = Number(prompt("Informe o salário"));
                let aumento = 0;
                if (salario <= 210){
                    aumento =  (salario * 15) / 100;
                }else if(salario <= 600){
                    aumento = (salario * 10) / 100
                }else {
                    aumento = (salario * 5) / 100;  
                }
                alert(`novo salário ${salario + aumento}`);
                break;
            case 2: 
                salario = Number(prompt("Digite o salário"));
                let ferias = salario / 3;
                let salarioFinal = salario + ferias
                alert(`o novo salário será de: ${salarioFinal.toFixed(2)}`);  
                break;
            case 3: 
                salario = Number(prompt("Digite o salário"));
                let meses = Number(prompt("Digite o número de meses trabalhados"));
                if(meses > 12){
                    alert("número de meses não pode ser maior que 12");
                    meses = 12;
                }
                let decimo = (salario * meses) / 12;
                
                alert(`O decimo terceiro será de: ${decimo.toFixed(2)}`);
                break;
            case 4: alert("Fim");
                break;
            default: alert("Opção inválida");
                break;
        }
    }while(opcao != 4);
}
