'use strict';

class mensaje_api {
    //config globals
    static imprimir_logs = true;
    //success
    static mensaje_success = "Consulta exitosa";
    static mensaje_guardar_ok = "Información guardada con éxito";
    static mensaje_guardar_no = "No se pudo guardar la información";
    static mensaje_actualizar_ok = "Información actalizada con éxito";
    static mensaje_actualizar_no = "No se pudo actalizar la información";
    static mensaje_registro_no = "No hay registro";
    static mensaje_error_registros = "No existen registros";
    
    //errors
    static mensaje_error_500 = "Ocurrió un problema, intente más tarde.";
    static mensaje_error_404 = "Ruta no encontrada";
    static mensaje_info = "Mensaje informativo";
    static mensaje_warning = "Mensaje de adventencia";

     //tipo de peticion
    static tipo_success = "success";
    static tipo_error = "error";
    static tipo_info = "info";
    static tipo_warning = "warning";




}
module.exports = mensaje_api;