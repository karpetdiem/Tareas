require('colors');

const inquirerMenu = () => {

    return new Promise (resolve => {

        console.clear();
        console.log('========================='.green);
        console.log('  Seleccione una opción');
        console.log('=========================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readline = require('readline').createInterface({ //pack ya propio de node para inputs de teclado
            input: process.stdin, //espera caracter y enter
            output: process.stdout //mostrar mensaje en consola cuando pido q ingresen algo
        });  
        
        readline.question('Seleccione una opción:', (respuesta) => { //si se ocupa el stdout para mostrar info al usuario con la pregunta
        readline.close(); //cierra el readline cuando no se usa mas xq sino se va a quedar
                          //solicitando info del usuario
        resolve(respuesta);
        });
    });
    
}


const pausa= () => {
   
    return new Promise (resolve => {
     
      const readline = require('readline').createInterface({ 
        input: process.stdin, //espera caracter y enter
        output: process.stdout //mostrar mensaje en consola cuando pido q ingresen algo
      });  
       
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (respuesta)=>{
          readline.close(); //al apretar enter es donde se va a seguir ejecutando
          resolve();
        });
    });    
}

module.exports = {mostrarMenu, pausa
}