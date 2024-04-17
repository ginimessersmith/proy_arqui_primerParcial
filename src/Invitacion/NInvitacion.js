import DInvitacion from "./DInvitacion.js";

export default class NInvitacion {
    DInvitacion = new DInvitacion()

    constructor() { }

    agregarInvitacion(
        nombre,
        descripcion,
        estado,
        idInvitado,
        idEvento
    ) {
        try {
            if (nombre.trim() === "") {
                return "El nombre es requerido"
            } else if (descripcion.trim() === "") {
                return "La descripcion es requerida"
            } else if (estado === undefined || estado === null) {
                return "La estado es requerida"
            } else if (isNaN(idInvitado) || idInvitado.trim() === "" || idInvitado === null) {
                return "Debe elegir un Invitado"
            } else if (isNaN(idEvento) || idEvento.trim() === "" || idEvento === null) {
                return "Debe elegir una Evento"
            }

            this.DInvitacion.insert(
                nombre,
                descripcion,
                estado,
                idInvitado,
                idEvento
            )

            return true
        } catch (error) {
            console.log(error)
        }
    }

    listaInvitacion(listaInvitados, listaEventos) {
        try {
            return this.DInvitacion.select(listaInvitados, listaEventos)
        } catch (error) {
            console.log(error)
        }
    }

    actualizarInvitacion(
        id,
        nombre,
        descripcion,
        estado,
        idInvitado,
        idEvento
    ) {

        try {
            
            if (nombre.trim() === "") {
                return "El nombre es requerido"
            } else if (descripcion.trim() === "") {
                return "La descripcion es requerida"
            } else if (estado === undefined || estado === null) {
                return "La estado es requerida"
            } else if (isNaN(idInvitado) || idInvitado.trim() === "" || idInvitado === null) {
                return "Debe elegir un Invitado"
            } else if (isNaN(idEvento) || idEvento.trim() === "" || idEvento === null) {
                return "Debe elegir una Evento"
            }

            this.DInvitacion.update(
                id,
                nombre,
                descripcion,
                estado,
                idInvitado,
                idEvento
            )

            return true

        } catch (error) {
            console.log(error)
        }
    }

    eliminarInvitacion(id) {
        try {
            this.DInvitacion.delete(id)
        } catch (error) {
            console.log(error)
        }
    }
}