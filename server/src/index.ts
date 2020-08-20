import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Import Routes
import indexRoutes from './routes/indexRoutes';
import usersRoutes from './routes/usersRoutes';
import productsRoutes from './routes/productsRoutes';
import pedidoRoutes from './routes/pedidoRoutes';
import detallePedidoRoutes from './routes/detallePedidoRoutes';
import categoriasRoutes from './routes/categoriasRoutes';
class Server{

    public app : Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
     
    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/users',usersRoutes);
        this.app.use('/api/products',productsRoutes);
        this.app.use('/api/pedido',pedidoRoutes);
        this.app.use('/api/detallepedido',detallePedidoRoutes);
        this.app.use('/api/categorias',categoriasRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port',this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();