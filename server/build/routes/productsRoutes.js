"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controllers/productsController"));
class ProductsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productsController_1.default.list);
        this.router.get('/:idproducto', productsController_1.default.getOne);
        this.router.get('/categoria/:idcategoria', productsController_1.default.getCat);
        this.router.post('/', productsController_1.default.create);
        this.router.put('/:idproducto', productsController_1.default.update);
        this.router.delete('/:idproducto', productsController_1.default.delete);
    }
}
const productsRoutes = new ProductsRoutes();
exports.default = productsRoutes.router;
