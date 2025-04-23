let frutas = new Set();

frutas.add("fruta1");
frutas.add("fruta2");
frutas.add("fruta3");
frutas.add("fruta1");

for(let set of frutas){
    console.log(set);
}

console.log(frutas.has("fruta2"));

frutas.delete("fruta3");

console.log(frutas.has("fruta3"));

frutas.clear();

let set1 = new Set();

set1.add(1);
set1.add(2);
set1.add(3);

for(let set of set1){
    console.log(set);
}

let array = ["a", "a", "b", "b", "c", "c"];
let set2 = new Set(array);

for(let set of set2){
    console.log(set)
}
