import { Module } from '@nestjs/common';
import { CategoriesService } from '../../service/category/categories.service';
import { CategoriesController } from '../../controller/category/categories.controller';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
