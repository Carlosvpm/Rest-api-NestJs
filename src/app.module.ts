import { ControlerModule } from './shared/controller/controler.module';
import { ServiceModule } from './shared/services/service.module';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { EntryModule } from './entry/entry.module';
import { CategoryModule } from './category/category.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { Connection } from 'typeorm';

@Module({
  imports: [
    SharedModule,
    AuthModule,
    EntryModule,
    CategoryModule,
    TypeOrmModule.forRoot(config)
  ],
  controllers: [
    AppController
  ],
})
export class AppModule {

  constructor(private connection: Connection) {

  }
}


