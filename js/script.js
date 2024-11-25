function exibir() {
    const gal=document.querySelector("#gal")
    //gal.innerHTML = '<h1>hellu o lord</h1>'
   // gal.innerHTML = '<img src="../img/13.jpg">'
    //const numero = Math.floor(Math.random() *25) +1
    //gal.innerHTML = numero
    //gal.innerHTML = '<img scr="../img/" + numero + .jpg>'

    let listaImagem = ""
    let numeros = new Set()
    while (numeros.size < 15){
        let numero = Math.floor(Math.random() * 25) +1
        numeros.add(numero)
    }
    let listaNumeros = Array.from(numeros)
    listaNumeros.forEach(numero => {
        listaImagem = listaImagem + '<img src="../img/' + numero +'.jpg">'
    })

    gal.innerHTML = listaImagem

}

window.onload = exibir
