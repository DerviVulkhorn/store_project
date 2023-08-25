import { User } from "src/users/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";

@Entity()

export class Role {
    @PrimaryGeneratedColumn({name:'id_role'})
    id:number

    @Column()
    name_role:string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @OneToOne(()=>User, (user)=>user.role)
    user:User
}
