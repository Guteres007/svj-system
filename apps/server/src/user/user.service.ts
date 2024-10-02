import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserInput } from '@server/auth/inputs/register-user.input';
import * as bcrypt from 'bcryptjs';
import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(input: RegisterUserInput): Promise<User | null> {
    const { email, password } = input;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existedUser = await this.userRepository.findOneBy({ email });

    if (existedUser) {
      throw new GraphQLError('User with this email already exists', {
        extensions: {
          code: 'USER_EXISTS', // Kód chyby pro frontend
        },
      });
    }

    const newUser = this.userRepository.create({
      email,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }

  async findOneByEmail({ email }: { email: string }): Promise<User | null> {
    // plus byty přidat jaké má
    return this.userRepository.findOneBy({ email });
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }
}
