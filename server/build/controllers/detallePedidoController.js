"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class detallePedidoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const detallepedido = yield database_1.default.query('SELECT * FROM detallepedido');
            res.json(detallepedido);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO detallepedido set ?', [req.body]);
            res.json({ message: 'Detalle Pedido Registrado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { iddetallepedido } = req.params;
            const products = yield database_1.default.query('UPDATE detallepedido set ? WHERE iddetallepedido = ?', [req.body, iddetallepedido]);
            res.json({ message: 'Detalle Pedido Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { iddetallepedido } = req.params;
            const products = yield database_1.default.query('DELETE FROM detallepedido WHERE iddetallepedido = ?', [iddetallepedido]);
            res.json({ message: 'Detalle Pedido Eliminado' });
        });
    }
}
const detallepedidoController = new detallePedidoController();
exports.default = detallepedidoController;
