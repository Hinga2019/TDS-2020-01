import {Router} from 'express';
import detallepedidoController from '../controllers/detallePedidoController';


class DetallePedidoRoutes {
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/',detallepedidoController.list);
        this.router.post('/',detallepedidoController.create);
        this.router.put('/:iddetallepedido',detallepedidoController.update);
        this.router.delete('/:iddetallepedido',detallepedidoController.delete);
    }
}
const detallepedidoRoutes = new DetallePedidoRoutes();  
export default detallepedidoRoutes.router;