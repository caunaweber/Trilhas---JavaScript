let frutas = ["fruta 1 ", "fruta 2"];
let carne = ["carne 1 ", "carne 2"];

let listaCompras = [...frutas, ...carne];
console.log(listaCompras);

let usuario = { nome: "Caunã", email: "cauna@example.com" };

let usuarioAtualizado = { ...usuario, status: "ativo" };
console.log(usuarioAtualizado);

function festaDeAniversario(...convidados) {
    console.log("Lista de Convidados:");
    for (let convidado of convidados) {
        console.log(convidado);
    }
}

festaDeAniversario("Ana", "Bruno", "Carlos");

let musicas = ["rock", "metal", "numetal"];

let musicasCopia = [...musicas];
musicasCopia[0] = "blackmetal";

console.log(musicas);
console.log(musicasCopia);

let filmeBasico = { titulo: "Interestelar", diretor: "Christopher Nolan" };
let filmeExtra = { ano: 2014, genero: "Ficção Científica" };

let filmeCompleto = { ...filmeBasico, ...filmeExtra };
console.log(filmeCompleto);

function criarMenu(entradas, pratosPrincipais, sobremesas) {
    let menu = [...entradas, ...pratosPrincipais, ...sobremesas];
    return menu;
}

let entradas = ["entrada1", "entrada2"];
let pratosPrincipais = ["principal1", "principal2"];
let sobremesas = ["sobremesa1", "sobremesa2"];

console.log(criarMenu(entradas, pratosPrincipais, sobremesas));
