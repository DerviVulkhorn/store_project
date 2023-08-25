import { Test, TestingModule } from '@nestjs/testing';
import { StatusOrderController } from './status_order.controller';
import { StatusOrderService } from './status_order.service';

describe('StatusOrderController', () => {
  let controller: StatusOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusOrderController],
      providers: [StatusOrderService],
    }).compile();

    controller = module.get<StatusOrderController>(StatusOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
