import { Product } from "src/product/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()

export class Review {
    @PrimaryGeneratedColumn({name:'id_review'})
    id:number

    @Column()
    raiting:number
    @Column()
    discription:string

    @ManyToOne(()=>Product, (product)=>product.review)
    @JoinColumn({name:'product_id'})
    product:Product

    @ManyToOne(()=>User, (user)=>user.review)
    @JoinColumn({name:'user_id'})
    user:User
}
