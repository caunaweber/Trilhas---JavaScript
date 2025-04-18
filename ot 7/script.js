let map = new Map();

map.set("titulo1", "autor1");
map.set("titulo2", "autor2");
map.set("titulo3", "autor3");

console.log(map.get("titulo2"));

for(let [titulo, autor] of map){
    console.log(`Titulo: ${titulo}, Autor:${autor}`);
}

console.log("Size: "+map.size);

map.delete("titulo2");
console.log(map.has("titulo2"))

let colecao = new Map();
map.set("String", "aaaaaa");
map.set("int", 1);
map.set("double", 1.1);
map.set("Boolean: ", true);


for(let [Tipo, Valor] of map){
    console.log(`Tipo: ${Tipo} Valor:${Valor}`);
}