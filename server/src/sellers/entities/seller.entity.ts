import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Seller {
    @PrimaryGeneratedColumn({name:'id_seller'})
    id:number

    @Column()
    title:string
    @Column()
    discription:string

    @OneToMany(()=>Product, (product)=>product.seller)
    product:Product
}
