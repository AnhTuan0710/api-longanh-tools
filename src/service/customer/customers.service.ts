import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerModel } from '../../model/customer/customers.interface';

@Injectable()
export class CustomersService {
  public getAllCustomer(): Array<CustomerModel> {
    return this.customers;
  }
  public getInfoCustomer(id: number): CustomerModel {
    const customer: CustomerModel = this.customers.find(item => item.customer_id === id);
    if (!customer) {
      throw new NotFoundException('Không tìm thấy thông tin khách hàng!');
    }
    return customer
  }
  public createNewCustomer(customer: CustomerModel): CustomerModel {
    const nameExits: boolean = this.customers.some(
      (item) => item.customer_phone === customer.customer_phone
    );
    if (nameExits) {
      throw new NotFoundException('Số điện thoai khách hàng đã tồn tại');
    }
    const maxId: number = Math.max(...this.customers.map(cus => cus.customer_id), 0);
    const id: number = maxId + 1;
    const customerNew: CustomerModel = {
      ...customer,
      customer_id: id,
    };
    this.customers.push(customerNew)
    return customerNew
  }
  private customers: Array<CustomerModel> = []
}
