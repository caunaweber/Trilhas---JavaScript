let carro = {
    marca: "BMW",
    ano: 95,
    modelo: "M3"
}

console.log(carro.modelo);

carro.cor = "preto";

console.log(carro.cor);

let calculadora = {
    soma: function (num1, num2) {
        return num1 + num2;
    }
}

console.log(calculadora.soma(1, 1))

for (let chave in carro) {
    console.log(chave + ": " + carro[chave]);
}

let livro = {
    autor: "autor1",
    titulo: "titulo1"
}

let livro2 = livro;

livro2.titulo = "titulo2";
console.log("livro 1:" + livro.titulo);
console.log("livro 2:" + livro2.titulo);

console.log(Object.keys(carro));
console.log(Object.values(carro));