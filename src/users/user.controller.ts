import { User } from './user.entity';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Users')
@Controller('api/users')
export class UserController extends createBaseController(UserService) {

    constructor(
        private userService: UserService
    ) {
        super()
    }

    @UseGuards(JwtAuthGuard)
    @Get(':username')
    async getByUsername(@Param('username') username: string) {
        return await this.userService.getById(username);
    }
}
