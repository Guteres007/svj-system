import { AuthenticationError } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@server/user/user.entity';
import { UserService } from '@server/user/user.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<User | null> {
    if ('access' !== payload.type) {
      throw new AuthenticationError('Wrong token type', {
        extensions: { code: 'UNAUTHORIZED_TOKEN_INVALID' },
      });
    }
    if (Date.now() > payload.exp * 1000) {
      throw new AuthenticationError('Token expired.', {
        extensions: { code: 'UNAUTHORIZED_TOKEN_EXPIRED' },
      });
    }
    const user = await this.userService.findById(Number(payload.sub));

    return user;
  }
}
