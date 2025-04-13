import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import TokenService from "../services/TokenService";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

export class AuthController {
  repository;
  tokenService;
  constructor() {
    this.repository = AppDataSource.getRepository(User);
    this.tokenService = new TokenService();
  }

  async register(req: Request, res: Response) {
    const { email, firstName, lastName, password, tenantId } = req.body;

    const payload = { email, firstName, lastName, password, tenantId };

    const accessToken = this.tokenService.generateToken(payload);
    console.log(accessToken, "dds");

    res.cookie("accessToken", accessToken);
    await this.repository.save({ firstName, lastName, email, password });
    res.status(201).json({ firstName, lastName });
  }

  async login(req: Request, res: Response) {
    const { email } = req.body;
    console.log("dffd");
    const res1: any = await this.repository.findOneBy({ email });
    console.log("dffd", res1);
    const payload = {
      id: res1.id,
      email: res1.email,
      firstName: res1.firstName,
      lastName: res1.lastName,
    };
    const accessToken = this.tokenService.generateToken(payload);
    res.cookie("token", accessToken, {
      httpOnly: true,
      secure: true,
    });
    return res1;
  }

  async getAll(req: Request, res: Response) {
    const res1 = await this.repository.find();
    return res1;
  }
}
