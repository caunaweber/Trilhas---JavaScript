let var1 = {};

let pessoa = {
    nome: 'Pedro',
    sobrenome: 'Silva Silva',
    sexo: "Masculino",
    idade: 20,
    peso: 80,
    altura: 175,
    andando: false,
    metrosCaminhados: 0,
};

pessoa.fazerAniversario = function () {
    this.idade += 1;
};

pessoa.fazerAniversario();

console.log(pessoa.idade);

pessoa.caminhar = function (metros) {
    this.andando = true;
    this.metrosCaminhados += metros;
};

pessoa.parar = function () {
    this.andando = false;
}

pessoa.nomeCompleto = function () {
    console.log(`Nome completo: ${this.nome} ${this.sobrenome}.`);
};

pessoa.mostrarIdade = function () {
    console.log(`Idade: ${this.idade}`);
};

pessoa.mostrarPeso = function () {
    console.log(`Peso: ${this.peso}`);
}

pessoa.mostrarAltura = function () {
    console.log(`Altura: ${this.altura}cm`)
}

pessoa.nomeCompleto(); // Nome completo: Caunã Paul Weber.

pessoa.mostrarIdade(); // Idade: 21 (porque já fez 1 aniversário antes)

pessoa.mostrarPeso(); // Peso: 84

pessoa.mostrarAltura(); // Altura: 175cm

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

console.log(pessoa.idade); // 24

pessoa.caminhar(10);
pessoa.caminhar(5);
pessoa.caminhar(20);

console.log(pessoa.andando); // true

pessoa.parar();

console.log(pessoa.andando); // false


console.log(pessoa.metrosCaminhados); // 35

pessoa.apresentacao = function () {

    let artigo = this.sexo === "Feminino" ? "a" : "o";

    let unidadeIdade = this.idade === 1 ? "ano" : "anos";

    let unidadeDistancia = this.metrosCaminhados === 1 ? "metro" : "metros";

    console.log(`Olá, eu sou ${artigo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${unidadeIdade}, ${this.altura}cm, meu peso é ${this.peso}kg e, só hoje, eu já caminhei ${this.metrosCaminhados} ${unidadeDistancia}!`);
};

pessoa.apresentacao();