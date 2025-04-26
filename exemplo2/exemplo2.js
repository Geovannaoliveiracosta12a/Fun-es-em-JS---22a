function raizQuadrada(numero){
    console.log(Math.sqrt(numero))
}

function potenciacao(valor1, valor2){
    console.log(Math.pow(valor1, valor2))
}

function multiplicacao(valor1, valor2){
    console.log(valor1 * valor2)
}

let numero1 = Number(prompt("Digite o número 1: "))
let numero2 = Number(prompt("Digite o número 2: "))

raizQuadrada(numero1)
potenciacao(numero1, numero2)
multiplicacao(numero2, numero1)