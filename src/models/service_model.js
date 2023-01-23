const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  name: { type: String },
},
  {
    timestamps: true,
    versionKey: false,
  });

module.exports = model("service_model", serviceSchema);
