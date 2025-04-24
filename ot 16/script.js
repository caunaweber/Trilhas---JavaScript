function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

let array = [rand(1,10),rand(1,10),rand(1,10),rand(1,10),rand(1,10)];

function retornarArray(array){
    return array;
}

let arr = retornarArray(array);

console.log(arr[1]);

function retornaArrayIndex(array, i){
    if(i <= array.length && i >= 0){
        return array[i];
    }else{
        return "Número inválido";
    }
}

console.log("Deve retornar: "+arr[0]);
console.log(retornaArrayIndex(arr, 0));

let variados = [42, "texto", true, null, { nome: "nome" }];

console.log(retornaArrayIndex(variados, 0)); // 42
console.log(retornaArrayIndex(variados, 1)); // "texto"
console.log(retornaArrayIndex(variados, 2)); // true
console.log(retornaArrayIndex(variados, 3)); // null
console.log(retornaArrayIndex(variados, 4)); // { nome: "Caunã" }

function book(nomeLivro) {
    const livros = {
      "O Hobbit": {
        quantidadePaginas: 310,
        autor: "J.R.R. Tolkien",
        editora: "HarperCollins"
      },
      "Dom Casmurro": {
        quantidadePaginas: 256,
        autor: "Machado de Assis",
        editora: "Editora Ática"
      },
      "1984": {
        quantidadePaginas: 328,
        autor: "George Orwell",
        editora: "Companhia das Letras"
      }
    };
  
    if (!nomeLivro) {
      return livros;
    }
  
    return livros[nomeLivro];
  }

  console.log(book());

  console.log(`O livro tem ${book("1984").quantidadePaginas} páginas`);
  console.log(`O livro é da editora: ${book("1984").editora}`);
  console.log(`O autor do livro 1984 é ${book("1984").autor}.`);
