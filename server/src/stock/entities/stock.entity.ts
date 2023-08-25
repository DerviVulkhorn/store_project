import { Product } from "src/product/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Stock {
    @PrimaryGeneratedColumn({name:'id_stock'})
    id:number

    @Column()
    name_stock:string
    @Column()
    discount:number

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @ManyToOne(()=>Product, (product)=>product.stock)
    @JoinColumn({name:'product_id'})
    product:Product
}
