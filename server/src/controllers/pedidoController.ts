import {Request, Response} from 'express';

import pool from '../database';

class PedidoController{
    public async list (req: Request,res:Response): Promise<void> {
        const pedido = await pool.query('SELECT * FROM pedido');
        res.json(pedido);
    }
}

const pedidoController = new PedidoController();
export default pedidoController;