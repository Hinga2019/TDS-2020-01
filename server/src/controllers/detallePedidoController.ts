import {Request, Response} from 'express';

import pool from '../database';

class detallePedidoController{
    
    public async list (req: Request,res:Response): Promise<void> {
        const detallepedido = await pool.query('SELECT * FROM detallepedido');
        res.json(detallepedido);
    }

    public async create(req: Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO detallepedido set ?', [req.body]);
        res.json({message:'Detalle Pedido Registrado'});
    }

    public async update(req: Request,res:Response): Promise<void>{
        const{iddetallepedido} = req.params;
        const products = await pool.query('UPDATE detallepedido set ? WHERE iddetallepedido = ?',[req.body, iddetallepedido]);
        res.json({message:'Detalle Pedido Actualizado'});
    }

    public async delete(req: Request,res:Response): Promise<void>{
        const{iddetallepedido} = req.params;
        const products = await pool.query('DELETE FROM detallepedido WHERE iddetallepedido = ?',[iddetallepedido]);
        res.json({message:'Detalle Pedido Eliminado'});
    }
}


const detallepedidoController = new detallePedidoController();
export default detallepedidoController;