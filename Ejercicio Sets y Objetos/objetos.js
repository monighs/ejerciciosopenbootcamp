// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const misDatos = {
    nombre: "Mónica",
    apellido: "Garcia",
    edad: 42,
    altura: 1.61,
    isDeveloper: true,
}

// Una variable que obtenga tu edad a partir del objeto anterior

const edad = misDatos.edad
console.log(edad);

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const datosAmigos = [
    { nombre: "Mónica",
    apellido: "Garcia",
    edad: 42,
    altura: 1.61,
    isDeveloper: true,
    },
    {nombre: "Janeth",
    apellido: "Montoya",
    edad: 48,
    altura: 1.70,
    isDeveloper: false,
    },
    {nombre: "Sandra",
    apellido: "Pinzón",
    edad: 45,
    altura: 1.63,
    isDeveloper: false,
    }
];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const ordenarDatos = datosAmigos.sort((a, b) => a.edad - b.edad);
console.log(ordenarDatos);