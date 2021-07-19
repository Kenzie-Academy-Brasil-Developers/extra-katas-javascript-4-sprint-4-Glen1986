

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
