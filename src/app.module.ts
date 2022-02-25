import { EntryModule } from './entries/entry.module';
import { CategoryModule } from './category/category.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { UsersModule } from './users/users.module';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    EntryModule,
    DatabaseModule,
    AuthModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule { }
