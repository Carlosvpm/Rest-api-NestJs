import { UserService } from './services/user.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { User } from './dtos/user';


@Controller('api/users')
export class UsersController {


    constructor(
        private userService: UserService
    ) { }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.userService.getAll();
    }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<User> {
        return await this.userService.getById(id);
    }

    @Post()
    /* HttpCode => manipular status code;
     HttpStatus.NO_CONTENT => O NestJs possui um enum com status para facilitar;
    */
    @HttpCode(HttpStatus.NO_CONTENT)
    async create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }


    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.userService.delete(id);
    }
}
