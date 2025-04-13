import { Injectable } from '@nestjs/common';

import { User } from '@user/domain/entities';
import { IUserRepository } from '@user/domain/interfaces/user.repo.interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(userDto: User) {
    const existingUser = await this.userRepository.findByEmail(userDto.email);

    if (existingUser) {
      throw new Error(`user with email: ${userDto.email} exist!`);
    }

    const user = await this.userRepository.create(userDto);
    return user;
  }
}
