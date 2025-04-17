let idade = 65;

if (idade < 13) {
    console.log("criança");
} else if (idade < 18) {
    console.log("adolescente");
} else if (idade < 65) {
    console.log("adulto");
} else {
    console.log("idoso");
}

let numero = 3;

switch (numero) {
    case 3:
        console.log("voce acertou o número!");
        break;
    default:
        console.log("numero errado, o correto era 3!")
        break;
}

let nota = 8;

if (nota < 6) {
    console.log("reprovado");
} else if (nota < 8) {
    console.log("em recuperação");
} else {
    console.log("aprovado");
}