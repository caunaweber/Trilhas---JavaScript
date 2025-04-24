function soma(a, b) {
    return a + b;
}

let soma1 = soma(1, 1) + 5;
console.log(soma1);

let var1;

function addValor(valor) {
    var1 = valor;
    console.log("O valor da variável agora é "+valor)
}

addValor("valorTeste")

function tresArgs(a, b, c){

    if( a == null || b == null || c == null){
        console.log("Preencha todos os valores corretamente!");
    }else{
        return (a * b * c) + 2;
    }
}

tresArgs(1, 1);
console.log(tresArgs(1, 1, 1));

function funcaoDesafio(a, b, c){
    const args = [a, b, c].filter(valor => valor !== undefined);

    if(args.length === 0){
        return false;
    }
    else if(args.length === 1){
        return a;
    }
    else if(args.length === 2){
        return a + b;
    }
    else if(args.length === 3){
        return (a + b) / c;
    }else{
        return null;
    }
}

console.log(funcaoDesafio());           // false
console.log(funcaoDesafio(7));          // 7
console.log(funcaoDesafio(7, 2));       // 9
console.log(funcaoDesafio(7, 2, 3));    // 3
console.log(funcaoDesafio(7, 2, 3, 5)); // null (extra não afeta porque só usamos a, b, c)