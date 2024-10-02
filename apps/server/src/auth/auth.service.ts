import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@server/user/user.entity';
import { UserService } from '@server/user/user.service';
import * as bcrypt from 'bcryptjs';
import { LoginUserInput } from './inputs/login-user.input';
import { LoginResponse } from './login.response';

const ACCESS_TOKEN_EXPIRATION = process.env.ACCESS_TOKEN_EXPIRATION || '1h';
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION || '1d';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginUserInput): Promise<any> {
    const user = await this.userService.findOneByEmail({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<LoginResponse> {
    const payload = { email: user?.email, sub: user?.id };
    return {
      user,
      accessToken: this.jwtService.sign(
        {
          ...payload,
          type: 'access',
        },
        { expiresIn: ACCESS_TOKEN_EXPIRATION, secret: JWT_SECRET },
      ),
      refreshToken: this.jwtService.sign(
        {
          ...payload,
          type: 'refresh',
        },
        { expiresIn: REFRESH_TOKEN_EXPIRATION, secret: JWT_SECRET },
      ),
    };
  }
}
