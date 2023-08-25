import { Module } from '@nestjs/common';
import { StatusOrderService } from './status_order.service';
import { StatusOrderController } from './status_order.controller';

@Module({
  controllers: [StatusOrderController],
  providers: [StatusOrderService]
})
export class StatusOrderModule {}
