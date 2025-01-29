import { Request,Response } from "express";
import { AppDataSource } from "../data-source";
import { Tenant } from "../entity/Tenant";


export class TenantController {
     service;
    constructor(service:any){
    this.service = service;
    } 
   
    create(req:Request,res:Response){
       const {name,address} = req.body;
       this.service.create(name,address)
    }
    
    async findById(req:Request,res:Response) {
        const {id} = req.body;
        const res1 =  await this.service.findById(id);
        res.status(200).send({json:res1});
    }


}