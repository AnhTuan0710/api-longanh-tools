import { Module } from '@nestjs/common';
import { CustomersModule } from './model/customer/customers.module';
import { CategoriesModule } from './model/category/categories.module';

@Module({
  imports: [CustomersModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
