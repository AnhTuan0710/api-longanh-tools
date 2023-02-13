import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CustomerModel } from '../../model/customer/customers.interface';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CustomersService } from '../../service/customer/customers.service';

@Controller('customers')
@ApiTags('Customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }
  @Get()
  @ApiOkResponse({ description: 'Customer retrieved successfully.' })
  public getAllCustomers(): Array<CustomerModel> {
    return this.customersService.getAllCustomer();
  }
  @Get(':id')
  @ApiOkResponse({ description: 'Customer retrieved successfully.' })
  @ApiNotFoundResponse({ description: 'Customer not found.' })
  public getInfoCustomer(@Param('id', ParseIntPipe) id: number): CustomerModel {
    return this.customersService.getInfoCustomer(id)
  }
  @Post()
  public createNewCustomer(@Body() cus: CustomerModel): CustomerModel {
    return this.customersService.createNewCustomer(cus)
  }
}
