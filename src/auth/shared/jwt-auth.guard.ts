import { AuthGuard } from '@nestjs/passport';

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){



}
