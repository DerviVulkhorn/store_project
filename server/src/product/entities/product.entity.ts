import { Category } from "src/category/entities/category.entity";
import { City } from "src/citys/entities/city.entity";
import { Order } from "src/order/entities/order.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Seller } from "src/sellers/entities/seller.entity";
import { Stock } from "src/stock/entities/stock.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Product {
    @PrimaryGeneratedColumn({name:'id_product'})
    id:number 
    //Для сохранения картинки
    @Column()
    image:string
    @Column('bytea',{nullable:true})
    data:Buffer

    @Column()
    name_product:string
    @Column()
    discription:string
    @Column()
    cust:number

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @OneToOne(()=>City, (city)=>city.product)
    @JoinColumn({name:'city_id'})
    city:City

    @OneToOne(()=>Category, (category)=>category.product)
    @JoinColumn({name:'category_id'})
    category:Category

    @OneToMany(()=>Stock, (stock)=>stock.product)
    stock:Stock

    @ManyToOne(()=>Seller,(seller)=>seller.product)
    @JoinColumn({name:'seller_id'})
    seller:Seller

    @OneToOne(()=>Order,(order)=>order.product)
    order:Order

    @OneToMany(()=>Review, (review)=>review.product)
    review:Review
}
