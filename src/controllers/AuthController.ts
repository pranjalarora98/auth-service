import { User } from '../entity/User';
import {AppDataSource} from '../data-source';
import { Request,Response } from 'express';
import {sign} from 'jsonwebtoken';

export class AuthController {
     
    repository;
    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async register(req:Request, res:Response) {
        const { email, firstName, lastName, password } = req.body;
        await this.repository.save({ firstName, lastName, email, password });
        res.status(201).json({ firstName, lastName });
    }

    async login(req:Request, res:Response) {
        const { email } = req.body;
        console.log('dffd');
        const res1:any = await this.repository.findOneBy({email});
        console.log('dffd',res1);
        const payload =  {
            id:res1.id, 
            email:res1.email   
        }
        const token = sign(payload,'dffd');
        console.log('fdfd',token);       
        res.cookie('token',token)
        return res1;
    }

    async getAll(req:Request,res:Response) {
         const res1 = await this.repository.find();
         return res1;
    }

}