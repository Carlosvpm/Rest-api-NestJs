import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { UsersModule } from './users/users.module';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule { }
