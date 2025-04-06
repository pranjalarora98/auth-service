import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Tenant } from "../entity/Tenant";

export class TenantController {
  service;
  constructor(service: any) {
    this.service = service;
  }

  create(req: Request, res: Response) {
    const { name, address } = req.body;
    console.log("control", name, address);
    this.service.create(name, address);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.body;
    const res1 = await this.service.findById(id);
    res.status(200).send({ json: res1 });
  }

  async findAll(req: Request, res: Response) {
    const res1 = await this.service.findAll();
    res.status(200).send({ data: res1 });
  }
}
