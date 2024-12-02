//Variáveis

//Antigo
//oi = comprimento

//num=2
//recomendado:
//var letra = "E"
//let palavra = "etec"
//const PI = 3.14

//Diferencça do let e do const, o const tem um valor próprio, constante, ja o 
//let pode ser mudado

let par = document.getElementById("msg")
let cliqueme= document.getElementById("clique-me")

//FUNCOES
function exibirMensagem(){
    if (par.textContent!="Mensagem"){
        par.innerText="Mensagem"
    }
    else{
        par.innerHTML="seja bem vindu!"
    }
}

cliqueme.addEventListener('click', exibirMensagem)

function exibirNome(){
    par.innerHTML = nome
}

const parametros = new URLSearchParams(window.location.search)
const nome = parametros.get("nomeInput")
if (nome != "msg" && nome != null){
    exibirNome()
} 