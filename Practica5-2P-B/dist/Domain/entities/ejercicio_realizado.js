"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EjercicioRealizadoEntity = void 0;
class EjercicioRealizadoEntity {
    constructor(id, estado, idTipoEjercicio, idDeportista, fecha, hora, tiempoTranscurrido, caloriasQuemadas) {
        this.id = id;
        this.estado = estado;
        this.idTipoEjercicio = idTipoEjercicio;
        this.idDeportista = idDeportista;
        this.fecha = fecha;
        this.hora = hora;
        this.tiempoTranscurrido = tiempoTranscurrido;
        this.caloriasQuemadas = caloriasQuemadas;
    }
    static fromObject(object) {
        const { id, estado, idTipoEjercicio, idDeportista, fecha, hora, tiempoTranscurrido, caloriasQuemadas } = object;
        if (!id)
            throw 'Id is required';
        if (!estado)
            throw 'Estado is required';
        if (!idTipoEjercicio)
            throw 'IdTipoEjercicio is required';
        if (!idDeportista)
            throw 'IdDeportista is required';
        if (!fecha)
            throw 'Fecha is required';
        if (!hora)
            throw 'Hora is required';
        if (!tiempoTranscurrido)
            throw 'TiempoTranscurrido is required';
        if (!caloriasQuemadas)
            throw 'CaloriasQuemadas is required';
        return new EjercicioRealizadoEntity(id, estado, idTipoEjercicio, idDeportista, fecha, hora, tiempoTranscurrido, caloriasQuemadas);
    }
}
exports.EjercicioRealizadoEntity = EjercicioRealizadoEntity;
