import { AppDataSource } from "../data-source";
import { Tenant } from "../entity/Tenant";

export class TenantService {
    
    repository;
    constructor(){
        this.repository = AppDataSource.getRepository(Tenant);
    }

    create(name:string,address:string) {
        this.repository.save({name,address})
    }
   
    async findById(id:string){
        const res = await this.repository.findBy({id:Number(id)});
        console.log('res',res);
        return res;
    }


}