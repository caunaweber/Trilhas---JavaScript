for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

console.log("Numeros impares");

for (let i = 0; i < 20; i++) {
    if ((i + 1) % 2 !== 0) {
        console.log(i+1);
    }
}

console.log("1 a 10 while");

let i = 0; while (i < 10) {
    console.log(i + 1);
    i++
}

console.log("1 a 100 parando no 50");

for (let i = 0; i < 100; i++) {
    console.log(i + 1);
    if (i == 49) {
        break;
    }
}


console.log("pulando o 13");

for (let i = 0; i < 20; i++) {
    if (i === 12) continue;
    console.log(i + 1);
}

let nomes = ["nome1","nome2","nome3","nome4","nome5"];

for(let nome of nomes){
    console.log(nome)
}