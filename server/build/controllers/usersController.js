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
class UsersController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM usuario');
            res.json(users);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * FROM usuario WHERE id = ?', [id]);
            if (users.length > 0) {
                return res.json(users[0]);
            }
            res.status(404).json({ text: 'El Usuario no Existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            res.json({ message: 'Usuario Registrado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('UPDATE usuario set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Usuario Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('DELETE FROM usuario WHERE id = ?', [id]);
            res.json({ message: 'Usuario Eliminado' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mail = req.body.mail;
            const pass = req.body.password;
            const result = yield database_1.default.query(`SELECT * FROM usuario WHERE correo = '${mail}' AND pass ='${pass}'`);
            res.json(result);
        });
    }
}
const usersController = new UsersController();
exports.default = usersController;
