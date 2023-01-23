const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "turns_record",
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("La conexión MongoDB se estableció correctamente...");
}

module.exports = { connect };