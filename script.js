const btnEnter = document.querySelector("#btn-enter");
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");
const resultado = document.querySelector("#resultado");



var dados = [
    "Muito Magro",
    "Normal",
    "Sobrepeso",
    "Obeso grau 1",
    "Obeso grau 2",
    "Obeso grau 3"
]


function calcularImc() {
    let resultadoImc = (Number(peso.value) /(Number(altura.value)**2)*10000)
    console.log(resultadoImc)


    switch (20 < resultadoImc < 23) {
        case resultadoImc < 18.5:
            resultado.innerHTML = "Seu IMC é:"+ " " + resultadoImc.toFixed(1)+"(kg/cm²)"+ " "+ "</br>" + "Sua classificação:" + " "  + dados[0]
            break
        case resultadoImc < 24.9:
            resultado.innerHTML ="Seu IMC é:"+ " " +  resultadoImc.toFixed(1)+ "(kg/cm²)"+" "+ "</br>" + "Sua classificação:" + " "   + dados[1]
            break
        case 25 <resultadoImc < 29.9:
            resultado.innerHTML ="Seu IMC é:"+ " " +  resultadoImc.toFixed(1)+"(kg/cm²)"+ " "+ "</br>" + "Sua classificação:" + " " + dados[2]
            break
        case 30 <resultadoImc < 34.9:
            resultado.innerHTML ="Seu IMC é:"+ " " +  resultadoImc.toFixed(1)+"(kg/cm²)"+ " "+ "</br>" + "Sua classificação:" + " "   + dados[3]
            break
        case 35< resultadoImc < 39.9:
            resultado.innerHTML ="Seu IMC é:"+ " " +  resultadoImc.toFixed(1)+"(kg/cm²)"+ " "+ "</br>" + "Sua classificação:" + " "   + dados[4]
            break
        case 40 < resultadoImc:
            resultado.innerHTML ="Seu IMC é:"+ " " +  resultadoImc.toFixed(1)+"(kg/cm²)"+ " "+ "</br>" + "Sua classificação:" + " "  + dados[5]
            break
        default:
            resultado.innerHTML = 'erro'

    }


}


btnEnter.addEventListener("click", calcularImc)