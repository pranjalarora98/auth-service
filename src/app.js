import express from 'express';
import "reflect-metadata"


const app = express();

app.get('/', (req, res) => {
    res.send('welcome to auth');
})