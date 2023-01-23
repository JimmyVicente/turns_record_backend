const { Schema, model } = require("mongoose");

const agencySchema = new Schema({
    name: { type: String },
    city: { type: Schema.Types.ObjectId, ref: "city_model", },
    service: [{ type: Schema.Types.ObjectId, ref: "service_model", }],
},
    {
        timestamps: true,
        versionKey: false,
    });

module.exports = model("agency_model", agencySchema);
