"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.findOneTask = exports.findAllTasks = exports.findAllDoneTasks = exports.deleteTask = exports.createTask = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Task = _interopRequireDefault(require("../models/Task"));
var _getPagination2 = require("../libs/getPagination");
var findAllTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, title, condition, _getPagination, limit, offset, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //variables de la paginación
          _req$query = req.query, size = _req$query.size, page = _req$query.page, title = _req$query.title; //esta condición permite buscar por titulo
          condition = title ? {
            title: {
              $regex: new RegExp(title),
              $options: 'i'
            }
          } : {};
          _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset; //el async y await se deben usar cuando la tarea o consulta toma tiempo y se desea que se espere a la terminacion de la misma para enviar la respuesta
          _context.next = 6;
          return _Task["default"].paginate(condition, {
            offset: offset,
            limit: limit
          });
        case 6:
          data = _context.sent;
          res.json({
            totalItems: data.totalDocs,
            tasks: data.docs,
            totalPage: data.totalPages,
            currentPage: data.page - 1
          });
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.messsage || "Algo ha salido mal en la consulta de tareas"
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function findAllTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.findAllTasks = findAllTasks;
var createTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newTask, TaskSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          //el req.body permite recibir los datos de la cadena JSON
          newTask = new _Task["default"]({
            title: req.body.title,
            description: req.body.description,
            //mediante el ? decimos que si existe genere la siguiente instruccion y con el : en caso de que no exista la siguiente instrucción
            done: req.body ? req.body.done : false
          }); //el .save permite guardar la tarea dentro de la base de datos  
          _context2.next = 4;
          return newTask.save();
        case 4:
          TaskSaved = _context2.sent;
          console.log(newTask);
          res.json(TaskSaved);
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.messsage || "Algo ha salido mal en la consulta de tareas"
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function createTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createTask = createTask;
var findAllDoneTasks = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _Task["default"].find({
            done: true
          });
        case 3:
          tasks = _context3.sent;
          res.json(tasks);
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.messsage || "Algo ha salido mal en la consulta de tareas"
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function findAllDoneTasks(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.findAllDoneTasks = findAllDoneTasks;
var findOneTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _id, task;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _id = req.params.id;
          _context4.next = 4;
          return _Task["default"].findById(_id);
        case 4:
          task = _context4.sent;
          if (task) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "La tarea con id: ".concat(_id, " no  existe")
          }));
        case 7:
          res.json(task);
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: _context4.t0.messsage || "Algo ha salido mal en la consulta de la tarea ".concat(id)
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function findOneTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.findOneTask = findOneTask;
var deleteTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _id2, data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _id2 = req.params.id;
          _context5.next = 4;
          return _Task["default"].findByIdAndDelete(_id2);
        case 4:
          data = _context5.sent;
          res.json({
            messsage: "".concat(data.title, " ha sido eliminada con \xE9xito")
          });
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: _context5.t0.messsage || "La tarea con id: ".concat(id, " no ah podido ser borrada.")
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function deleteTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteTask = deleteTask;
var updateTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _Task["default"].findByIdAndUpdate(req.params.id, req.body);
        case 3:
          res.json({
            message: "la tarea fue actualizada exitosamente"
          });
          _context6.next = 9;
          break;
        case 6:
          _context6.prev = 6;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            message: _context6.t0.messsage || "Algo ha salido mal en la consulta de tareas"
          });
        case 9:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 6]]);
  }));
  return function updateTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.updateTask = updateTask;