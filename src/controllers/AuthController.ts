import { User } from '../entity/User';
import {AppDataSource} from '../data-source';
import { Request,Response } from 'express';

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

}