import { User } from '../users/dto/user';
import { AuthService } from './shared/auth.service';

import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller()
export class AuthController {


    constructor(
        private authService: AuthService
    ) {}



    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }


}
