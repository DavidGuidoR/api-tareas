"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./database");
//importamos la configuración  del servidor en app

//importamos la configuración y conexión de la base de datos de manera automática

//arranque de la aplicación en el puerto indicado en app
_app["default"].listen(_app["default"].get('port'));
console.log('Server on port', _app["default"].get('port'));