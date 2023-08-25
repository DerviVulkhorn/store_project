import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusOrderDto } from './create-status_order.dto';

export class UpdateStatusOrderDto extends PartialType(CreateStatusOrderDto) {}
