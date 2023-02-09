import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [PostsModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
