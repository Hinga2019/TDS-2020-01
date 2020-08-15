"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallePedidoController_1 = __importDefault(require("../controllers/detallePedidoController"));
class DetallePedidoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', detallePedidoController_1.default.list);
        this.router.post('/', detallePedidoController_1.default.create);
        this.router.put('/:iddetallepedido', detallePedidoController_1.default.update);
        this.router.delete('/:iddetallepedido', detallePedidoController_1.default.delete);
    }
}
const detallepedidoRoutes = new DetallePedidoRoutes();
exports.default = detallepedidoRoutes.router;
