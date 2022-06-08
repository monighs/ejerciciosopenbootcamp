let nombre = "Mónica";
console.log(nombre);

let apellido = "García";
console.log(apellido);

let estudiante = nombre.concat(" ", apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numeroLetras = (estudiante.length);
console.log(numeroLetras);

let primeraLetraNombre = (nombre.charAt(0));
console.log(primeraLetraNombre);


let ultimaLetraApellido = (apellido[apellido.length-1]);
console.log(ultimaLetraApellido);

let eliminaEspacios = (estudiante.replace(/ /g, ""));
console.log(eliminaEspacios);

let contieneNombre = (estudiante.includes(nombre));
console.log(contieneNombre)