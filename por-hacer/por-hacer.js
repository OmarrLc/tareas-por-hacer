const fs = require('fs');

let listado = [];
const guardarDB = () => {
    let data = JSON.stringify(listado);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Err('No se pudo grabar');
    });
}

const cargarDB = () => {
    try {
        listado = require('../db/data.json');
    } catch {
        listado = [];
    }

    // console.log(listado);
}

const getListado = () => {
    cargarDB();
    return listado;

}
const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listado.push(porHacer);
    guardarDB();
    return porHacer;
}
const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listado.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listado[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false;
    }

}
const borrar = (descripcion) => {
    cargarDB();
    let index = listado.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        // console.log(index);
        listado.splice(index, 1);
        guardarDB();
        return true
    } else {
        return false;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}