class Estudiante {
    nombre = 'Mónica'
    asignaturas = ['Javascript', 'HTML', 'CSS']

    get obtenDatos(){
        return {
            nombre: this.nombre, 
            asignaturas: this.asignaturas}
    }
}
const estudiante_1 = new Estudiante()
console.log(estudiante_1);