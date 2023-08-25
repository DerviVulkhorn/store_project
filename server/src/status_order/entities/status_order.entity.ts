import { Order } from "src/order/entities/order.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class StatusOrder {
    @PrimaryGeneratedColumn({name:"id_status"})
    id:number

    @Column()
    name_status:string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @OneToOne(()=>Order, (order)=>order.status_order)
    order:Order

}
