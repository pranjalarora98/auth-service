import express from 'express';
import "reflect-metadata"
import { AuthController } from './controllers/AuthController';
import { AppDataSource } from './data-source';

const router = express.Router();

const app = express();
app.use(express.json());

AppDataSource.initialize().then(()=>{

    const authController = new AuthController();

    router.post('/auth/register', (req:any, res:any) => {
        console.log('register');
        authController.register(req, res);
    })
    
    app.use(router);
    
        app.listen(3002, () => {
            console.log('running');
        })
        
})
