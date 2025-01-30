import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Tenant } from "./Tenant"

enum roles {CUSTOMER='customer',ADMIN='admin'}

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

    @Column({
      type:'enum',
      enum: roles,
      default: roles.CUSTOMER
    })
    role: roles

}
