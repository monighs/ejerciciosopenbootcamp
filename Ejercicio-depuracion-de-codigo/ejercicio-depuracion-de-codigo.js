//Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])


function fibonacci(numero)
    {
        let serie =[0,1];
        for (let i = 2; i < numero; i++) {
            serie[i] = serie[i - 2] + serie[i - 1];
        }
        return serie;
    }
 
    console.log(fibonacci(6)); 
