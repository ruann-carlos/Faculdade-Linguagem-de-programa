window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    let idade, peso, altura, funcao,departamento, qtdidade = 0,qtdaltura = 0,idademenor=0,media,cortador=0,acabador=0;
    let porcentagem;
    for(i = 0; i <2; i++){
        idade= Number(prompt('Digite a idade'));
        peso= Number(prompt('Digite o peso'));
        altura= Number(prompt('Digite a altura'));
        funcao= prompt('Digite a função (C - corte/A- Aparar/X-Chanfrar)').toUpperCase;
        departamento= prompt('Digite o departamento (A -Acabamento/C- Criação/P- Produção)').toUpperCase;

        if(idade > 3 && peso < 10){qtdidade++};
        if(altura < 8.5){
            qtdaltura++;
            idademenor+= idade;
            media = (idademenor / qtdaltura);
        }
        if(funcao === 'C'){cortador++};

        if(funcao !== 'x' && departamento === 'A'){acabador++}

        porcentagem = cortador / 20
    }    

    alert(`A quantidade de máquinas com idade superior a 3 anos e peso inferior a 10.5 quilos é ${qtdidade} \n
    A média das idades das máquinas com altura inferior a 8.5 é ${media} \n
    A percentagem de máquinas com função para corte entre todas as máquinas analisadas é de ${porcentagem}% \n
    A quantidade de máquinas do departamento de acabamento e que não são utilizadas para chanfração é de ${acabador}.`)
}
