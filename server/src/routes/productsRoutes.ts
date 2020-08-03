import {Router} from 'express';
import productsController from '../controllers/productsController';

class ProductsRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',productsController.list);
        this.router.get('/:idproducto',productsController.getOne);
        this.router.get('/:idcategoria',productsController.getCat);
        this.router.post('/',productsController.create);
        this.router.put('/:idproducto',productsController.update);
        this.router.delete('/:idproducto',productsController.delete);
    }
}

const productsRoutes = new ProductsRoutes();  
export default productsRoutes.router;