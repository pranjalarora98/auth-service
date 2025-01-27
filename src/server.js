import express from 'express';
import { AuthController } from './controllers/AuthController.js';

const router = express.Router();

const app = express();
const authController = new AuthController();

router.post('/auth/register', (req, res) => {
    authController.register(req, res);
})

app.listen(3002, () => {
    console.log('running');
})