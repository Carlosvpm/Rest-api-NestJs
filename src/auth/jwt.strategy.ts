import { User } from './../users/user.entity';
import { jwtConstants } from './constants';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        })
    }

    async validade(payload: User) {
        return {
            id: payload.id, username: payload.username
        }
    }
}