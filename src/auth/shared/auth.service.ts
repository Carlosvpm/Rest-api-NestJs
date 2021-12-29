/*
https://docs.nestjs.com/providers#services
*/
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/shared/user.service';


@Injectable()
export class AuthService {

    constructor(private userService: UserService) {

    }



}
