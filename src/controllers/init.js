const Agency = require("../models/agency_model");
const City = require("../models/city_model");
const Service = require("../models/service_model");
const validar_api = require("./validar_api");
exports.init = async function (req, res) {
    try {
        //services
        const service1 = await Service.create({ name: "NUEVOS PRODUCTOS" });
        const service2 = await Service.create({ name: "SERVICIO AL CLIENTE" });
        const service3 = await Service.create({ name: "SOLUCIÓN DE PROBLEMAS" });
        const service4 = await Service.create({ name: "CASOS EN INSTANCIAS LEGALES" });
        const service5 = await Service.create({ name: "CONSULTAS" });
        const service6 = await Service.create({ name: "CONVENIOS" });
        const service7 = await Service.create({ name: "PAGOS" });

        //cities
        const city1 = await City.create({ name: "LOJA" });
        const city2 = await City.create({ name: "QUITO" });
        const city3 = await City.create({ name: "CUENCA" });
        const city4 = await City.create({ name: "GUAYAQUIL" });

        var services_type1 = [service1._id, service2._id, service3._id, service4._id, service5._id, service6._id, service7._id,];
        var services_type2 = [service1._id, service2._id, service3._id,];
        var services_type3 = [service5._id, service6._id, service7._id,];
        var services_type4 = [service3._id, service4._id, service5._id,];

        //agencies
        //LOJA
        await Agency.create({ name: "Agencia 1", city: city1._id, service: services_type1 });
        await Agency.create({ name: "Agencia 2", city: city1._id, service: services_type2 });
        //QUITO
        await Agency.create({ name: "Agencia 3", city: city2._id, service: services_type3 });
        await Agency.create({ name: "Agencia 4", city: city2._id, service: services_type1 });
        //CUENCA
        await Agency.create({ name: "Agencia 5", city: city3._id, service: services_type2 });
        await Agency.create({ name: "Agencia 6", city: city3._id, service: services_type4 });
        //GUAYAQUIL
        await Agency.create({ name: "Agencia 7", city: city4._id, service: services_type3 });
        await Agency.create({ name: "Agencia 8", city: city4._id, service: services_type4 });
        validar_api.succeesServer(req, res, "Sincronización exitosa");
    } catch (error) {
        validar_api.errorServer(req, res, error);

    }
}