import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://db-user:12345@cluster0.tvsyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    TasksModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
