
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local-auth.guard';
import { Controller, UseGuards, Post, Request } from '@nestjs/common';

@Controller('api/auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }



    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }
}
