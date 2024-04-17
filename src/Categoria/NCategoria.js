import DCategoria from "./DCategoria.js";
import DEvento from "../Evento/DEvento.js";

export default class NCategoria {
    DCategoria = new DCategoria()
    DEvento = new DEvento()
    constructor() {

    }


    agregarCategoria(nombre,descripcion) {
        try {

            if (nombre.trim() === "") {
                return "El nombre no puede estar vacio";
            }else if(descripcion.trim() === ""){
                return "La descripcion no puede estar vacia";
            }

            this.DCategoria.insert(
                nombre,
                descripcion
            );

            return true;
        } catch (error) {
            console.error(error);
        }
    }

    listarCategoria() {
        try {
            return this.DCategoria.select();
        } catch (error) {
            console.error(error);
        }
    }

    actualizarCategoria(id,nombre,descripcion) {
        try {

            if (id === "") {
                return "El id no puede estar vacio";
            }else if(nombre.trim() === ""){
                return "El nombre no puede estar vacio";
            }else if(descripcion.trim() === ""){
                return "La descripcion no puede estar vacia";
            }

            this.DCategoria.update(
                id,
                nombre,
                descripcion
            );

            return true;
        } catch (error) {
            console.error(error);
        }
    }

    eliminarCategoria(id) {
        try {
            let eventos = this.DEvento.select([], []);
            let eventosCategoria = eventos.filter(evento => evento.fk_categoria === id);
            if (eventosCategoria.length > 0) {
                return "No se puede eliminar la categoria porque tiene eventos asociados";
            }
            this.DCategoria.delete(id);
            return true;
        } catch (error) {
            console.error(error);
        }
    }
}