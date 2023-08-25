import { Product } from "src/product/entities/product.entity";
import { StatusOrder } from "src/status_order/entities/status_order.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Order {
    @PrimaryGeneratedColumn({name:"id_order"})
    id:number

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @OneToOne(()=>User, (user)=>user.order)
    @JoinColumn({name:'user_id'})
    user:User

    @OneToOne(()=>Product,(product)=>product.order)
    @JoinColumn({name:'product_id'})
    product:Product

    @OneToOne(()=>StatusOrder,(status_order)=>status_order.order)
    @JoinColumn({name:'status_id'})
    status_order:StatusOrder
    
}
