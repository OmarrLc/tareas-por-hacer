const descripcion = {
    demand: true,
    alias: 'd'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado', { descripcion, completado: { alias: 'c', default: true } })
    .command('borrar', 'Elimina la tarea', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}