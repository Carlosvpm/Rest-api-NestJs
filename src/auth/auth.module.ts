import { UserService } from './../users/shared/user.service';
import { UsersModule } from './../users/users.module';
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        UsersModule,
        
    ],
    controllers: [],
    providers: [
        AuthService,
    ],
})
export class AuthModule { }
