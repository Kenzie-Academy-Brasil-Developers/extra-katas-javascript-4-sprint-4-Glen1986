

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
let clase = "";

function showResults(a, b) {
  const destiny = document.getElementById("body");
  const actividad = document.createElement("div");
  const titulo = document.createElement("h2");
  const resultado = document.createElement("p");
  resultado.classList.add(clase);

  destiny.appendChild(actividad);
  resultado.innerText = a;
  titulo.innerText = b;
  actividad.appendChild(titulo);
  actividad.appendChild(resultado);
}


const kata1 = () => {
    // implemente aqui o código
     let cits = gotCitiesCSV.toString().split(",").join(" ");
     clase = "kata1"
     showResults(cits, "kata1");
     return cits;
}

 kata1();

// daqui em diante é contigo

const kata2 = () => {
     let frase = bestThing.split(", ");
     clase = "kata2"
     showResults(frase, "kata2");
     return frase;
}
kata2();

const kata3 = () => {
    let frase = gotCitiesCSV.toString().split(",").join("; ");
    clase = "kata3";
    showResults(frase, "kata3");
    return frase;
}
kata3();

const kata4 = () => {
    let CSV = lotrCitiesArray.join(", ");
    clase = "kata4";
    showResults(CSV, "kata4");
    return CSV;
}
kata4();

const kata5 = () => {
  let kat5 = lotrCitiesArray.slice(0, 5).join(", ");
  showResults(kat5, "kata5");
  return kat5;
};
kata5();

const kata6 = () => {
  let kat6 = lotrCitiesArray.reverse().slice(0, 5).reverse().join(", ");
  showResults(kat6, "kata6");
  return kat6;
};
kata6();

const kata7 = () => {
  let kat7 = lotrCitiesArray.reverse().slice(2, 5).join(", ");
  showResults(kat7, "kata7");
  return kat7;
};
kata7();


/***
Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray'
e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também adicionar
os resultados à página.
*/
const kata8 = () => {
  let kat8 = lotrCitiesArray.splice(2, 1)
  let newStr = lotrCitiesArray.join(", ")
  showResults( newStr, "kata8" );
  return newStr;
 //   return kat8;
}
kata8();
/*
Escreva uma função que use 'splice' para remover todas as cidades depois de
'Dead Marshes' de 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray'
modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata9 = () => {
  let kat9 = lotrCitiesArray.splice(5,2);
  showResults(lotrCitiesArray, "kata9" );
  return lotrCitiesArray;
}
kata9();


/*
Escreva uma função que use 'splice' para adicionar 'Rohan' de volta ao 
'lotrCitiesArray' logo depois de 'Gondor' e retorne o novo 'lotrCitiesArray'
modificado. Lembre-se de também adicionar os resultados à página.
*/
const kata10 = () => {
    let kat10 = lotrCitiesArray.splice(2,0,"Rohan").join(", ");
    showResults( lotrCitiesArray, "kata10")
    return  lotrCitiesArray;
}
kata10();

/*
Escreva uma função que use 'splice' para renomear 'Dead Marshes' para 'Deadest Marshes'
em 'lotrCitiesArray' e retorne o novo 'lotrCitiesArray' modificado. Lembre-se de também
adicionar os resultados à página.
*/
const kata11 = () => {
    //let kat11 = lotrCitiesArray.splice(0,0,'Dead Marshes', 'Deadest Marshes') ;
    let kat11 = lotrCitiesArray.splice(5,1,'Deadest Marshes') ;
    lotrCitiesArray.join(", ");
    showResults( lotrCitiesArray, "kata11")
    return  lotrCitiesArray;
}
kata11();


/*
Escreva uma função que usa 'slice' para retornar uma string com os primeiros 14 caracteres
de 'bestThing'. Lembre-se de também adicionar os resultados à página.

Escreva uma função que usa 'slice' para retornar uma string com os 12 últimos caracteres 
de 'bestThing'. Lembre-se de também adicionar os resultados à página.

Escreva uma função que usa 'slice' para retornar uma string com os caracteres entre as
posições 23 e 38 de 'bestThing'. Lembre-se de também adicionar os resultados à página.

Escreva uma função que faz exatamente a mesma coisa que a #13 mas use o método 'substring'
em vez de 'slice'. Lembre-se de também adicionar os resultados à página.

Escreva uma função que faça exatamente a mesma coisa que o #14 mas use o método 'substring' 
em vez de 'slice'. Lembre-se de também adicionar os resultados à página.

Escreva uma função que use 'pop' para remover a última cidade de 'lotrCitiesArray e retorne
o novo array. Lembre-se de também adicionar os resultados à página.

Escreva uma função que usa 'push' para adicionar de volta, no final do array, a cidade de 
'lotrCitiesArray' que foi removida no #17 e retorne o novo array. Lembre-se de também adicionar 
os resultados à página.

Escreva uma função que usa 'shift' para remover a primeira cidade de 'lotrCitiesArray e
retorne o novo array. Lembre-se de também adicionar os resultados à página.

Escreva uma função que use 'unshift' para adicionar de volta, no começo do array, a cidade
de 'lotrCitiesArray' que foi removida no #19 e retorne o novo array. Lembre-se de também adicionar os resultados à página.

 *
 *
 * ****/
