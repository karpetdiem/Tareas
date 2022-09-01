const {v4: uuidv4} = require('uuid');

class Tarea{
    id= '';
    desc= '';
    completadoEn= null; //q no esta completada

    constructor(desc){ //se ejecuta al crear una nueva instancia de la tarea
        this.id= uuidv4();
        this.desc= desc; //this hace refencia a la instancia de la clase q se este usando
    }
}

module.exports= Tarea; //exporta solo el modelo de tarea sin llaves