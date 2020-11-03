window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    let total, parcela,
    codigo,
    vista= [], 
    prazo= [];
    resultado = `<table class = tabela style = "width:100%" border:1> <tr> <th border="1"> Total das compras á Vista </th> <th> Total das compras a prazo  </th> <th> Valor Total  </th> <th>  Primeira Prestação</th> `;
    //utilizando função de pegar dados para pegar os dados do usuário
    dados(codigo,vista,prazo);

    //soma todos os itens dentro do array vista
    let totalVista = vista.reduce((vista, totalVista) =>   (vista + totalVista),0);

    //soma de todos os itens dentro do array prazo
    let totalPrazo = prazo.reduce((prazo, totalPrazo) => prazo + totalPrazo,0);

    total =totalVista + totalPrazo;//total de todas as vendas
   
    parcela = totalPrazo / 3;//primeira parcela de todas as vendas a prazo

    resultado+= `<tr class="valores">`//montando final tabela
    resultado+= `<td>` + `R$${totalVista.toFixed(2)} </td> <td>R$${totalPrazo.toFixed(2)} </td> <td>${total.toFixed(2)} </td> <td>${parcela.toFixed(2)}</td> </tr>`
    resultado+= `</table>`
    
    document.getElementById("result").innerHTML = resultado;//atribuindo ela ao elemento result
}
function dados (cod,vista,prazo){//função para pegar dados do usuário e adicionar ao array certo
    for(let i =0; i <15; i++){
        cod = window.prompt('Digite o código da transação (V/P)');
        cod = cod.toUpperCase();//Captura o código
        if(cod== 'V'){
            vista[i]=Number(window.prompt("Digite o valor da transação "));//Captura valor da transação a vista
        }else if(cod == 'P'){
            prazo[i]= Number(window.prompt("Digite o valor da transação."));//captura valor da transação a prazo
        }
    }
}
