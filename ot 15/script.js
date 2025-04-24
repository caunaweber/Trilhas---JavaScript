let isTruthy = function(valor) {
    return !!valor;
};

console.log(isTruthy(false));
console.log(isTruthy(0));
console.log(isTruthy(""));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN));

console.log(isTruthy(true));
console.log(isTruthy(1));
console.log(isTruthy(-1));
console.log(isTruthy("alo"));
console.log(isTruthy(" "));
console.log(isTruthy([]));
console.log(isTruthy({}));
console.log(isTruthy(Infinity));
console.log(isTruthy(-Infinity));
console.log(isTruthy(function () { }));

let carro = {
    marca: 'BMW',
    modelo: 'M3',
    placa: 'LZE-1733',
    ano: '1995',
    cor: 'preto',
    qtdPortas: 2,
    qtdAssentos: 4,
    qtdPessoas: 0,

    mudarCor(novaCor) {
        this.cor = novaCor;
    },

    obterCor() {
        return this.cor;
    },

    obterModelo() {
        return this.modelo;
    },

    obterMarca() {
        return this.marca;
    },

    obterMarcaModelo() {
        return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
    },

    adicionarPessoas(qtd) {
        const totalAssentos = this.qtdAssentos;
        const ocupados = this.qtdPessoas;
        const vagas = totalAssentos - ocupados;

        if (ocupados === totalAssentos) {
            return "O carro já está lotado!";
        }

        if (qtd > vagas) {
            let plural = vagas === 1 ? "pessoa" : "pessoas";
            return `Só cabem mais ${vagas} ${plural}!`;
        }

        this.qtdPessoas += qtd;
        return `Já temos ${this.qtdPessoas} pessoas no carro!`;
    },

    removerPessoas(qtd) {
        this.qtdPessoas -= qtd;
        if (this.qtdPessoas < 0) this.qtdPessoas = 0;
    }
};

console.log(carro.obterCor());
carro.mudarCor("vermelho");
console.log(carro.obterCor());
carro.mudarCor("verde musgo");
console.log(carro.obterCor());
console.log(carro.obterMarcaModelo());
console.log(carro.adicionarPessoas(2));
console.log(carro.adicionarPessoas(4));
console.log(carro.adicionarPessoas(2));
carro.removerPessoas(4);
console.log(carro.adicionarPessoas(10));
console.log(carro.qtdPessoas);
