window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
   let ingresso = 5, qtd = 120, despesas = 200,maiorlucro = 0,
        ingressoLucro = 0, resultado = `<table border='1'> <tr> <th> Ingresso  </th> <th> Qtde. Ingressos   </th> <th> Valor Total  </th> <th>  Despesas  </th> <th> Lucro Líquido  </th>`;
   for(ingresso; ingresso>=1; ingresso -= 0.5){ 
        let lucro = (ingresso * qtd) - 200;
        if(lucro> maiorlucro){
            maiorlucro = lucro;
            ingressoLucro= ingresso;
        }
        resultado+= `<tr>`
        resultado += `<td>` + `${ingresso} </td> <td> ${qtd} </td> <td>${ingresso * qtd}</td> <td>${despesas}</td> <td>${(ingresso * qtd) - 200}</td>`;
        resultado += `</tr>`
        qtd += 26;
    }
    resultado+= `</table>`
    resultado +=`<br/>` + `Maior lucro: ${maiorlucro} com ingresso custando: ${ingressoLucro}`;
    document.getElementById('result').innerHTML = resultado;
}
