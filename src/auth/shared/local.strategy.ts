import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        /* Isso faz com que a nomenclatura email e password sejam aceitas como parâmetro para o método validate */
        super({
            usernameField: 'email',
            passwordField: 'password'
        });
    }


    /* Esse método vai ser chamado automaticamente pelo PassportStrategy */
    async validate(email: string, password: string) {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}