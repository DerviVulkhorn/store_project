import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Category {
    @PrimaryGeneratedColumn({name:'id_category'})
    id:number

    @Column()
    name_category:string

    @OneToOne(()=>Product, (product)=>product.category)
    product:Product

}
