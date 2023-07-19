"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _taskRoutes = _interopRequireDefault(require("./routes/task-routes"));
//importamos el modulo de express el cual devuelve un objeto

//morgan permite ver la petición de las rutas por consola debe ir antes de las rutas

//CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado en los navegadores web para controlar las solicitudes de recursos (como archivos JavaScript, imágenes o datos) que se hacen entre diferentes dominios.

//importamos nuestro archivo de rutas

//guardamos este objeto en la variable APP
var app = (0, _express["default"])();

//establecemos el puerto de escucha
app.set('port', process.env.PORT || 3000);

//middleware
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
//permite la lectura y ejecución de métodos JSON                  
app.use(_express["default"].json());
//La función express.urlencoded() es un middleware de Express que analiza los datos en formato URL-encoded y los convierte en un objeto JavaScript que se puede utilizar en el manejo de las solicitudes
app.use(_express["default"].urlencoded({
  extended: false
}));

//rutas
app.get('/', function (req, res) {
  res.json('Welcome to my application');
});

//uso de la rutas del archivo, agregar el primer  dato permite establecer la ruta mas compleja /api/tasks
app.use('/api/task', _taskRoutes["default"]);
var _default = app;
exports["default"] = _default;