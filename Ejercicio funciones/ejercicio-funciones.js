// Una función sin parámetros que devuelva siempre "true"

function siempreTrue(){
    return true
};

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const asyncFunc = promesa()=>{
    setTimeout(()=>{
        console.log("Hola soy una promesa");
    },5000)
}

asyncFunc();

//  Una función generadora de índices pares automáticos

function* generadora(){
    let i = 0;
    while(true)
      yield i +=2;
  }
  
  let funcionGeneradora = generadora();
  
  console.log(funcionGeneradora.next().value); 
  console.log(funcionGeneradora.next().value); 
  console.log(funcionGeneradora.next().value);
  console.log(funcionGeneradora.next().value);