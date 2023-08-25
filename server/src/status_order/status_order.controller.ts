import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusOrderService } from './status_order.service';
import { CreateStatusOrderDto } from './dto/create-status_order.dto';
import { UpdateStatusOrderDto } from './dto/update-status_order.dto';

@Controller('status-order')
export class StatusOrderController {
  constructor(private readonly statusOrderService: StatusOrderService) {}

  @Post()
  create(@Body() createStatusOrderDto: CreateStatusOrderDto) {
    return this.statusOrderService.create(createStatusOrderDto);
  }

  @Get()
  findAll() {
    return this.statusOrderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusOrderDto: UpdateStatusOrderDto) {
    return this.statusOrderService.update(+id, updateStatusOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusOrderService.remove(+id);
  }
}
