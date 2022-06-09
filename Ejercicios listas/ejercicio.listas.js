// Una variable que contenga la lista de la compra (mínimo 5 elementos)

let listaCompra = ["pan", "leche", "huevos", "queso", "mermelada"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("aceite de girasol");
console.log(listaCompra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [
    { titulo: "Azul Profundo", director:"Luc Besson", fecha: new Date(1988, 04, 11)},
    { titulo: "Avatar", director:"James Cameron", fecha: new Date(2009, 11, 17)},
    { titulo: "Dune", director:"Denis Villeneuve", fecha: new Date(2021, 09, 22)},
];

const peliculasNuevas = listaPeliculas.filter(obj => obj.fecha > new Date(2021,0,1));
console.log(peliculasNuevas);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)


const directores = listaPeliculas.map(obj => obj.director);
console.log(directores);

//  Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = listaPeliculas.map(obj => obj.titulo);
console.log(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const listaDirectorTitulo = directores.concat(titulos);
console.log(listaDirectorTitulo);


// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaDirectorTitulo2 = [...directores, ...titulos];
console.log(listaDirectorTitulo2);




