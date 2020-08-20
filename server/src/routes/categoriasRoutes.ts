import {Router} from 'express';
import categoriasController from '../controllers/categoriasController';

class CategoriasRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',categoriasController.list);
        this.router.get('/:idcategoria',categoriasController.getCat);
    }
}

const categoriasRoutes = new CategoriasRoutes();  
export default categoriasRoutes.router;