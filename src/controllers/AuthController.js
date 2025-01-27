import { User } from '../entity/User.ts';
import AppDataSource from '../data-source.ts';

export class AuthController {

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async register(req, res) {
        const { email, firstName, lastName, password } = req.body;
        await this.repository.save({ firstName, lastName, email, password });
        res.status(201).json({ firstName, lastName });
    }

}