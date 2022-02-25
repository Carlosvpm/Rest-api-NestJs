import { UserService } from './services/user.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { User } from './dtos/user';


@Controller('api/users')
export class UsersController {


    constructor(
        private userService: UserService
    ) { }

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: number): Promise<User> {
        return this.userService.getById(id);
    }

    @Post()
    /* HttpCode => manipular status code;
     HttpStatus.NO_CONTENT => O NestJs possui um enum com status para facilitar;
    */
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }


    @Delete(':id')
    delete(@Param('id') id: number) {
        this.userService.delete(id);
    }
}
