import { User } from './../users/user.entity';
import { UserService } from './../users/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }


    async validateUser(username: string, password: string) {
        const user = await this.userService.getByUserName(username);
        if (user && password === user.password) {
            return user
        }
        return null
    }

    async login(user: User) {
        const payload =  { username: user.username, id: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
