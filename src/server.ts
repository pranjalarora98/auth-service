import express,{Request,Response} from 'express';
import "reflect-metadata"
import { AuthController } from './controllers/AuthController';
import { TenantController } from './controllers/TenantController';
import cors from 'cors';
import { AppDataSource } from './data-source';
import { Tenant } from './entity/Tenant';
import { TenantService } from './services/TenantService';

const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize().then(()=>{

    const authController = new AuthController();


    const tenantService = new TenantService();
    const tenantController = new TenantController(tenantService);

    router.post('/api/auth/auth/register', (req:any, res:any) => {
        console.log('register');
        authController.register(req, res);
    })

    router.post('/api/auth/auth/login', async (req:any, res:any) => {
        console.log('login');
        const res1 = await authController.login(req, res);
        return res.status(200).json(res1);
    })
    
    router.post('/auth/tenant/create',async (req:Request,res:Response)=>{
        await tenantController.create(req,res);
        res.status(200).json({data:req.body});
    })

    router.get('/auth/tenant/getById',async (req:Request,res:Response)=>{
        await tenantController.findById(req,res);
        res.status(200).json({data:req.body});
    })

    router.get('/api/auth/users', async (req:any, res:any) => {
        console.log('get users');
        const res1 = await authController.getAll(req, res);
        return res.status(200).json({data:res1});
    })

    
    app.use(router);
    
        app.listen(3002, () => {
            console.log('running');
        })
        
})
