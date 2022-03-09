import { createResourceService } from 'src/shared/services/base-resource.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { Controller, Get, Param, Post, UseGuards, Body } from '@nestjs/common';
import { createBaseController } from 'src/shared/controller/base-resource.controller';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

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


    @UseGuards(JwtAuthGuard)
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        return await this.userService.create(createUserDto);
    }

    
}
