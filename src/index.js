// Crie um objeto que receba ao menos três propriedades sobre você.
let eu = {
    nome: "Wallace",
    Aniversário: "26 julho",
    idade: 20, }
  console.log(eu)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.signo = "Leão"
eu.cor = "preto"

// Remova uma propriedade desse objeto.
delete eu.idade

//Mostre no console todas as propriedades desse objeto.
console.log(eu)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro =[{
    nome: "Wallace",
    idade: 20,
    telefone: "(xx) xxxxx-xxxx",
    amigos: ["Wallace", "Breno", "Vitória", "Kaique",]
},

{
    nome: "Vitória",   
    idade: 19,
    telefone: "(xx) xxxxx-xxxx",
    amigos: ["André", "Italo", "Julia", "Wallace"]
},
{
    nome: "Iago",
    idade: 27,
    telefone: "(xx) xxxxx-xxxx",
    amigos: ["Alfahin", "Thiago", "Wallace", "Marcio"]
},
{
    nome: "Italo",
    idade: 23,
    telefone: "(xx) xxxxx-xxxx", 
    amigos: ["Lohan", "Tatiana", "Rafael", "André"]
},
{
    nome: "Daniel",
    idade: 10,
    telefone: "(xx) xxxxx-xxxx",
    amigos: ["Kaique", "Pedro", "Carlos", "Lucas", ]
}
]

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos)
console.log(cadastro[2].amigos)
console.log(cadastro[3].amigos)
console.log(cadastro[1].amigos)
console.log(cadastro[0].amigos)
