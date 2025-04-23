class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    falar() {
        console.log(`som do animal: ${this.som}`);
    }
}

let animal = new Animal("cachorro", "au au");
animal.falar();


class Veiculo {
    constructor(marca, modelo, velMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velMaxima = velMaxima;
    }

    descrever() {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nVelocidade Máxima: ${this.velMaxima}`)
    }
}

let veiculo = new Veiculo("Honda", "NSX", "200");
veiculo.descrever();

class Estudante {
    constructor(notas, nome) {
        this.notas = notas;
        this.nome = nome;
    }

    calcularMedia() {
        let soma = 0;
        for (let nota of this.notas) {
            soma += nota;
        }
        return soma / this.notas.length;
    }

}

let luanVieira = new Estudante([4, 3, 2], "Luan");
console.log(luanVieira.calcularMedia());

class Utilitario {
    static celsiusParaFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    }
  }
  console.log(Utilitario.celsiusParaFahrenheit(0));   // 32

  class Jogo {
    static adivinhar(chute) {
      const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      console.log(`Número sorteado: ${numeroAleatorio}`);
      if (chute === numeroAleatorio) {
        return "Parabéns! Você acertou!";
      } else {
        return "Que pena! Você errou.";
      }
    }
  }
  console.log(Jogo.adivinhar(5));
  
class contaBancaria{
    constructor(saldo){
        this.saldo = saldo;
    }

    sacar(valor){
        console.log(`Saldo: ${this.saldo}\nSaque: ${valor}`);

        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log(`Saldo: ${this.saldo}\nSaque efetuado.`);
        }else{
            console.log("Saque inválido");
        }
    }
}

let conta = new contaBancaria(1000);
conta.sacar(500);