import {Request, Response} from 'express';
import pool from '../database';

class UsersController{
    public async list (req: Request,res:Response): Promise<void> {
        const users = await pool.query('SELECT * FROM usuario');
        res.json(users);
    }

    public async getOne (req: Request,res:Response): Promise<any> {
        const{id} = req.params;
        const users = await pool.query('SELECT * FROM usuario WHERE id = ?',[id]);
        if(users.length > 0){
            return res.json(users[0]);
        }
        res.status(404).json({text:'El Usuario no Existe'});
    }
    
    public async create(req: Request,res:Response): Promise<void>{
        await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({message:'Usuario Registrado'});
    }

    public async update(req: Request,res:Response): Promise<void>{
        const{id} = req.params;
        const users = await pool.query('UPDATE usuario set ? WHERE id = ?',[req.body, id]);
        res.json({message:'Usuario Actualizado'});
    }

    public async delete(req: Request,res:Response): Promise<void>{
        const{id} = req.params;
        const users = await pool.query('DELETE FROM usuario WHERE id = ?',[id]);
        res.json({message:'Usuario Eliminado'});
    }

    
}

const usersController = new UsersController();
export default usersController;