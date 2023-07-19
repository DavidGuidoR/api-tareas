"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
//definimos el nombre de los datos, su tipo y propiedades del esquema a crear
var taskSchema = new _mongoose.Schema({
  //dato titulo
  title: {
    //establecemos el tipo de dato
    type: String,
    //definimos la obligatoriedad
    required: true,
    //funcion trim que remueve espacios
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    //establecemos que si no pasan el dato por defecto sera false.
    "default": false
  }
}, {
  //mongoose por defecto agrega un __v al dato, estableciendo la versionkey por defecto en false evitamos esto
  versionKey: false,
  //timestamps no ayuda agregando las propiedades createdAt de la fecha de creación y updatedAt del momento de actualización 
  timestamps: true
});
taskSchema.plugin(_mongoosePaginateV["default"]);
var _default = (0, _mongoose.model)('Task', taskSchema);
exports["default"] = _default;