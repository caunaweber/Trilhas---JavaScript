let championship = "Campeonato Catarinense";
console.log(championship);

let teams = ["Joinville", "Brusque", "Figueirense", "Criciúma", "Avaí"];
console.log(`Times participantes: ${teams}`);

function showTeamPosition(i) {
    if (i < 5) {
        return `O time ${teams[i]} está no ${i + 1}º lugar`;
    } else {
        return `Não temos a informação do time que está nessa posição.`
    }
}

console.log(showTeamPosition(0));
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(5));

let i = 20;
while (i < 31) {
    console.log(i)
    i += 1;
}

function convertToHex(cor) {
    let hexadecimal;

    switch (cor.toLowerCase()) {
        case "vermelho":
            hexadecimal = "#FF0000";
            break;
        case "verde":
            hexadecimal = "#00FF00";
            break;
        case "azul":
            hexadecimal = "#0000FF";
            break;
        case "amarelo":
            hexadecimal = "#FFFF00";
            break;
        case "preto":
            hexadecimal = "#000000";
            break;
        default:
            return `Não temos o equivalente hexadecimal para ${cor}.`;
    }

    return `O hexadecimal para a cor ${cor} é ${hexadecimal}.`;
}

console.log(convertToHex("vermelho")); // válido
console.log(convertToHex("verde"));    // válido
console.log(convertToHex("azul"));     // válido
console.log(convertToHex("amarelo"));  // válido
console.log(convertToHex("preto"));    // válido

console.log(convertToHex("rosa"));     // inválido
console.log(convertToHex("cinza"));    // inválido
console.log(convertToHex("branco"));   // inválido
