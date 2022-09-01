const Tarea= require('./tarea');
class Tareas{
    _listado= {};  //manejo el listado como un objeto, el uuid va a apuntar a la tarea con id tal y desc tal
 
    constructor(desc){ //se ejecuta al crear una nueva instancia de la tarea
        this._listado= {}; //solo inicializa listado en obj vacio 
     }

     crearTarea(desc= '') {  //primer metodo, string vacio
        const tarea= new Tarea(desc);
        this._listado[tarea.id]= tarea;  //el id generado por uuid apunta a la tarea
       
        //si fuera array se pone this._listado().push para insertar
     }
}

module.exports= Tareas; //exporta solo el modelo de tareas sin llaves