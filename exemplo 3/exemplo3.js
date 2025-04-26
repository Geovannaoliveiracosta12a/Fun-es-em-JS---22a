function boasVindas(nome, idade){
    return `Seja bem-vindo(a), ${nome}!
${nome}, você é muito especial!
Parabéns pelo seu aniversário de ${idade} anos.
`
}

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));

let mensagem  = boasVindas(nome, idade);

alert(mensagem);
console.log(mensagem);
