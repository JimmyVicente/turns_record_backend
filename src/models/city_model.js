const { Schema, model } = require("mongoose");

const citySchema = new Schema({
  name: { type: String },
},
  {
    timestamps: true,
    versionKey: false,
  });

module.exports = model("city_model", citySchema);
