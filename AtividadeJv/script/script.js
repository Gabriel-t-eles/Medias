let numero_Um = document.querySelector("#numero_Um");
let numero_Dois = document.querySelector("#numero_Dois");
let numero_Tres = document.querySelector("#numero_Tres");
let botao = document.querySelector("#botao");

let resultado_Aritimetico = document.querySelector("#resultado_Aritimetico");
let resultado_Ponderada = document.querySelector("#resultado_Ponderada");
let resultado_Soma = document.querySelector("#resultado_Soma")
let resultado_Medias = document.querySelector("#resultado_Medias")

function somaAritimetica(){
    let num1 = Number(numero_Um.value);
    let num2 = Number(numero_Dois.value);
    let num3 = Number(numero_Tres.value);
    let aritimetica = (num1 + num2 + num3) / 3;
    let ponderada = (num1*3 + num2*2 + num3*5) / 3;



    resultado_Aritimetico.innerHTML = aritimetica;
    resultado_Ponderada.innerHTML = ponderada;
    resultado_Soma.innerHTML = (aritimetica + ponderada);
    resultado_Medias.innerHTML = (aritimetica + ponderada) / 2;
  

}

botao.onclick = function(){
    somaAritimetica();
};