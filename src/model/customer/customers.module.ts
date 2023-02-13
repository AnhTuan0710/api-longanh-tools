import { Module } from '@nestjs/common';
import { CustomersController } from '../../controller/customer/customers.controller';
import { CustomersService } from '../../service/customer/customers.service';

@Module({
  providers: [CustomersService],
  controllers: [CustomersController],
  exports: [CustomersService],
})
export class CustomersModule { }
