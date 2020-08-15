import {Router} from 'express';
import  pedidoController from '../controllers/pedidoController';
class PedidoRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',pedidoController.list);
    }
}
const pedidoRoutes = new PedidoRoutes();  
export default pedidoRoutes.router;