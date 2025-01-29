import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm"

@Entity()
export class Tenant {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @UpdateDateColumn()
    updatedAt: number

    @CreateDateColumn()
    createdAt: number

}
