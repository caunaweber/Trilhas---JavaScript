let animais = [];
animais.push("galinha");
animais.push("cachorro");
animais.push("cavalo");

for(let i = 0; i <animais.length; i++ ){
    console.log(animais[i]+" ");
}

animais.shift();

for(let i = 0; i <animais.length; i++){
    console.log(animais[i]+" ");
}

animais.unshift("galinha");

for(let i = 0; i <animais.length; i++ ){
    console.log(animais[i]+" ");
}

animais[1] = "girafa";

for(let i = 0; i <animais.length; i++){
    console.log(animais[i]+" ");
}

let frutas = ["fruta","fruta","fruta","fruta","fruta",];

console.log("Numero de casas no array frutas: "+frutas.length);

for(let i = 0; i< frutas.length; i++ ){
    console.log(frutas[i]+" ");
}