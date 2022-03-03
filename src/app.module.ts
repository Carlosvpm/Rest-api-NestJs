import { ControlerModule } from './shared/controller/controler.module';
import { ServiceModule } from './shared/services/service.module';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { EntryModule } from './entry/entry.module';
import { CategoryModule } from './category/category.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    SharedModule,
    AuthModule,
    EntryModule,
    DatabaseModule,
    CategoryModule
  ],
  controllers: [
    AppController
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders,
  ],
})
export class AppModule { }
