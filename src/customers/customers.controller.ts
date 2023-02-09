import { CustomersService } from './customers.service';
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CustomerModel } from './customers.interface';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }
  @Get()
  public getAllCustomers(): Array<CustomerModel> {
    return this.customersService.getAllCustomer();
  }
  @Get(':id')
  public getInfoCustomer(@Param('id', ParseIntPipe) id: number): CustomerModel {
    return this.customersService.getInfoCustomer(id)
  }
  @Post()
  public createNewCustomer(@Body() cus: CustomerModel): CustomerModel{
    return this.customersService.createNewCustomer(cus)
  }
}
