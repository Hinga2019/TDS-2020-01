import {Request, Response} from 'express';

import pool from '../database';
class CategoriasController{
    public async list (req: Request,res:Response): Promise<void> {
        const categorias = await pool.query('SELECT * FROM categoria');
        res.json(categorias);
    }
    public async getCat (req: Request,res:Response): Promise<any> {
        const{idcategoria} = req.params;
        const categorias = await pool.query('SELECT * FROM categoria WHERE idcategoria = ?',[idcategoria]);
        if(categorias.length > 0){
            return res.json(categorias[0]);
        }
        res.status(404).json({text:'No existe esta Categoria'});
    }

}
const categoriasController = new CategoriasController();
export default categoriasController;