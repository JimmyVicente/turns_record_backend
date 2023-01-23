//=================================INICIO DE DECLARACIÓN DE LIBRERIAS==============================
require('dotenv').config();

const config = require('./src/config/enviroment');
const app = require('./app');
var ip = require("ip");
async function main() {
    // Database Connection
    await require('./src/config/database/mongo.connect').connect();   
    // Express Application
    await app.listen(config.PORT);

    console.log(`Server en \x1b[36mhttp://${ip.address()}:${config.PORT}\x1b[0m`);
    console.log(`Server en \x1b[36mhttp://${config.HOST}:${config.PORT}\x1b[0m`);

};

main();