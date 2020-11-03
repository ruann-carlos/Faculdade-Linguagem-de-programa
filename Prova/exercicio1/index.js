window.onload = () => {
    document.getElementById("calcular").onclick = calcular;
}
function calcular(){
    do{
        option=menu();
        verificar(option);
    }while(option !== 4);
        
}
function menu(){
    let option
    do{
        option=Number(prompt('Menu De Opções \n 1.Valor Total \n 2.Acréscimo em função do andar \n 3.Acréscimo em função da posição do Sol \n 4.sair'));
    }while(option <= 0 || option > 4);

    return option;
}

function verificar(opt){
    let apartamento,
        garagem,
        andar,
        valor = 0,
        resultado,
        sol
        if (opt === 1){
            apartamento = Number(prompt(`Digite a quantidade de metros do apartamento)`))
            garagem = Number(prompt(`Digite a quantidade de garagens`))
            
            switch (garagem) {
                case 1 :
                    if (apartamento <= 80) {
                        valor = parseFloat(valor) + 300000
                    } else if (apartamento <= 120){
                        valor = parseFloat(valor) + 400000
                    } else {
                        valor = parseFloat(valor) + 500000
                    }
                    break;
                case 2 :
                    if (apartamento <= 80) {
                        valor = parseFloat(valor) + 320000
                    } else if (apartamento <= 120){
                        valor = parseFloat(valor) + 420000
                    } else {
                        valor = parseFloat(valor) + 520000
                    }
                    break;
                case 3 :
                    if (apartamento <= 80) {
                        valor = parseFloat(valor) + 340000
                    } else if (apartamento <= 120){
                        valor = parseFloat(valor) + 440000
                    } else {
                        valor = parseFloat(valor) + 540000
                    }
                    break;
            }
            resultado = `Seu apartamento tem o valor de ${valor}`
            alert(resultado)
        } else if (opt === 2){
            andar = Number(prompt(`Informe o andar do seu apartamento \n 1 - Primeio andar \n 2 - Segundo Andar \n 3 - Terceiro Andar`))

            if (andar === 1){
                valor = parseFloat(valor) + 10000
            } else if (andar === 2){
                valor = parseFloat(valor) + 20000
            } else {
                valor = parseFloat(valor) + 30000
            }

            resultado = `Seu apartamento tem o valor de ${valor}`
            alert(resultado)
        } else if (opt === 3) {
            sol = Number(prompt(`Informe quando o sol atinge o apartamento \n 1 - de Manhã \n 2 - de Tarde`))
            if (sol === 1){
                valor = parseFloat(valor) * 1.05
            } else {
                valor = parseFloat(valor) * 1.08
            }
            resultado = `Seu apartamento tem o valor de ${valor}`
            alert(resultado)
        } else if (opt === 4) {
            resultado = `Seu apartamento tem o valor de ${valor}`
            alert(resultado)
            
        } else {
            alert("Opção inválida")
        }
}
