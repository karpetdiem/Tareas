require('colors'); //se recomienda primero las importaciones de paquetes, desp las nuestras
const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tareas= require('/models/tareas');

const main = async() => {

    let opt= '';
    const tareas= new Tareas(); //creo nueva instancia

    do { //se ejecuta al menos 1 vez y desp evalua la condicion
      opt= await inquirerMenu(); //esperar la respuesta del mostrar menu
      switch (opt){
        case '1': //crear opcion
           const desc= await leerInput('Descripción: ');
           console.log(desc);
        break;

        case '2': //listar opcion
          console.log(tareas._listado);
        break;

      }

      await pausa();
    } 
    while (opt !== '0') //si condicion es true vuelve a ejecutar el ciclo
}

main();