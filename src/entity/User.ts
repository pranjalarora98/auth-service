import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Tenant } from "./Tenant"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @ManyToOne(()=>Tenant)
    tenant: Tenant

}
