const inquirer= require('inquirer'); //trabaja en base a promesas
require('colors');

const preguntas= [
    {   type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [ //se puede mandar como objeto o array de string
            {value: '1', name: '1.Crear tarea'},
            {value: '2', name: '2.Listar tarea'},
            {value: '3', name: '3.Listar tareas completadas'},
            {value: '4', name: '4.Listar tareas pendientes'},
            {value: '5', name: '5.Completar tarea(s)'},
            {value: '6', name: '6.Borrar tarea'},
            {value: '0', name: '0.Salir'}                         
        ] 
    }
];

const inquirerMenu= async () => {
    
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción');
    console.log('=========================\n'.green);

    const {opcion}= await inquirer.prompt(preguntas); // para hacer preg, se recibe un array con cada preg q queremos
    //almacena en opcion lo q devuelva el array de preguntas
    return opcion; //no necesito retornar un objeto, solo el valor x eso desestructura
}  

 const pausa= async ()=> { 
    const question= [
        {type: 'input', name:'Enter',
         message: `Presione ${'Enter'.green} para continuar`
        }
    ]
    console.log('\n');
    await inquirer.prompt(question); //con el await espera q se presione enter para continuar
 };
    
  const leerInput= async (mensaje) =>{
   const question =[ {type: 'input',
                      name: 'desc',
                      message: mensaje,
                      validate(value) { if (this.length===0) {return 'Por favor ingrese un valor'};
                       return true; } //fn; si el valor es = a cero retorna error, para forzar para q ingrese un valor
                     }
                   ];
  
  const {desc}= await inquirer.prompt(question);  //mostrara eso al usuario regresando la desc desestr.
    return desc;
}

module.exports = {inquirerMenu, pausa, leerInput};