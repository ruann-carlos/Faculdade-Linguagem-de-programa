window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0; //faixas de idade (1 até 5)
    let idade, i=0;

    while(i <8){
        idade = Number(prompt("Informe uma idade"));

        if(idade <= 15){
            f1++;
        }else if (idade <=30){
            f2++;
        }else if(idade <= 45){
            f3++;
        }else if (idade <= 60){
            f4++
        }else{
            f5++
        }
        i++;
    }   
    console.log(`faixa 1 ${f1}, faixa 2 ${f2}, faixa 3 ${f3},faixa 4 ${f4},faixa 5 ${f5}`);
    console.log(`% da faixa 1 ${f1/8*100} % da faixa 5 ${f5/8*100}`) 
}