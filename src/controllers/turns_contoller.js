const Agency = require("../models/agency_model");
const City = require("../models/city_model");
const Service = require("../models/service_model");

const validar_api = require("./validar_api");


/** @api {get} /list/service Listar Servicios
@apiName  Listar Servicios
@apiGroup Turns
@apiDescription Permite listar los servicios de las diferentes agencias
@apiSuccess {Object} object{}
@apiError {Object} object{}*/
exports.list_service = async function (req, res) {
    try {
        var service = await Service.find();
        console.log(service)
        if (!service) throw { mensaje: "No existen registros" };
        validar_api.succeesServer(req, res, { service });
    } catch (error) {
        validar_api.errorServer(req, res, error);
    }
}

/** @api {get} /list/city Listar Ciudades
@apiName  Listar Ciudades
@apiGroup Turns
@apiDescription Permite listar las ciudades de las diferentes agencias
@apiSuccess {Object} object{}
@apiError {Object} object{}*/
exports.list_city = async function (req, res) {
    try {
        var city = await City.find();
        console.log(city)
        if (!city) throw { mensaje: "No existen registros" };
        validar_api.succeesServer(req, res, { city });
    } catch (error) {
        validar_api.errorServer(req, res, error);
    }
}

/** @api {get} /list/agency/ Listar Agecias
@apiName  Listar Agecias
@apiGroup Turns
@apiDescription Permite listar las Agencias de acuerdo a una ciudad
@apiQuery {String} city id de la ciudad por la que desea buscar
@apiQuery {String} service id del service por el que desea buscar
@apiSuccess {Object} object{}
@apiError {Object} object{}*/
exports.list_agency = async function (req, res) {
    try {
        const {city,service} = req.query;
        validar_api.validarCampos({city,service});
        var agency = await Agency.find({city,service:{$in:service}});
        console.log(agency)
        if (!agency) throw { mensaje: "No existen registros" };
        validar_api.succeesServer(req, res, { agency });
    } catch (error) {
        validar_api.errorServer(req, res, error);
    }
}