import { Order } from "src/order/entities/order.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Role } from "src/role/entities/role.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    first_name:string
    @Column({nullable:true})
    surname:string
    @Column({nullable:true})
    patronymic:string
    @Column({nullable:true})
    phone:string
    @Column({nullable:true})
    email:string
    @Column()
    password:string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @OneToOne(()=>Role, (role)=>role.user)
    @JoinColumn({name:'role_id'})
    role:Role

    @OneToMany(()=>Review, (review)=>review.user)
    review:Review

    @OneToOne(()=>Order, (order)=>order.user)
    order:Order
}
