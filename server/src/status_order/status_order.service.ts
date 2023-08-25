import { Injectable } from '@nestjs/common';
import { CreateStatusOrderDto } from './dto/create-status_order.dto';
import { UpdateStatusOrderDto } from './dto/update-status_order.dto';

@Injectable()
export class StatusOrderService {
  create(createStatusOrderDto: CreateStatusOrderDto) {
    return 'This action adds a new statusOrder';
  }

  findAll() {
    return `This action returns all statusOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statusOrder`;
  }

  update(id: number, updateStatusOrderDto: UpdateStatusOrderDto) {
    return `This action updates a #${id} statusOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} statusOrder`;
  }
}
