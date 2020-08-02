import {Request, Response} from 'express';

import pool from '../database';

class ProductsController{
    public async list (req: Request,res:Response): Promise<void> {
        const products = await pool.query('SELECT * FROM producto');
        res.json(products);
    }

    public async getOne (req: Request,res:Response): Promise<any> {
        const{id} = req.params;
        const products = await pool.query('SELECT * FROM producto WHERE id = ?',[id]);
        if(products.length > 0){
            return res.json(products[0]);
        }
        res.status(404).json({text:'El Producto no Existe'});
    }
    
    public async create(req: Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO producto set ?', [req.body]);
        res.json({message:'Producto Registrado'});
    }

    public async update(req: Request,res:Response): Promise<void>{
        const{id} = req.params;
        const products = await pool.query('UPDATE producto set ? WHERE id = ?',[req.body, id]);
        res.json({message:'Producto Actualizado'});
    }

    public async delete(req: Request,res:Response): Promise<void>{
        const{id} = req.params;
        const products = await pool.query('DELETE FROM producto WHERE id = ?',[id]);
        res.json({message:'Producto Eliminado'});
    }
}

const productsController = new ProductsController();
export default productsController;