import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { UserModule } from './../users/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

import { jwtConstants } from './jwt/constants';
import { LocalStrategy } from './local/local.strategy';
@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '120s' },
        }),
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        LocalStrategy,
    ],

})
export class AuthModule { }
