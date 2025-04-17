
function calcularArea(largura, altura) {
    return largura * altura;
}

function verificarPar(parImpar) {
    if (parImpar % 2 === 0) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}

function converterPolCm(polegadas) {
    console.log(polegadas * 2.54);
}

function calcularImc(peso, altura) {
    console.log(peso / (altura * altura));
}


function toLowerCase(texto) {
    console.log(texto.toLowerCase());
}

const x10 = (num) => num * 10;