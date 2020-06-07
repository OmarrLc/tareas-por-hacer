const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('*****Por Hacer*****'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('*******************'.green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        if (borrar) {
            console.log('Tarea ', argv.descripcion, 'eliminada');
        } else {
            console.log('Error al eliminar');
        }

        break;
    default:
        console.log('Comando incorrecto');
        break;

}