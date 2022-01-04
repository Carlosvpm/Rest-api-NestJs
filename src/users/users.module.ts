import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from './shared/user.service';
import { UsersController } from './users.controller';
import { UserProviders } from './users.providers';


@Module({
    imports: [DatabaseModule],
    providers: [...UserProviders, UserService],
    controllers: [UsersController],
    exports: [UserService]
})
export class UsersModule { }
