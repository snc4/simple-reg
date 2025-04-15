import { Injectable, Inject } from '@nestjs/common';

import { UserDTO } from '@common/dto/user.dto';
import { User } from '@user/domain/entities';
import { IUserRepository } from '@user/domain/interfaces/user.repo.interface';
import { USER_REPOSITORY_DI_TOKEN } from '@user/domain/repositories/user';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY_DI_TOKEN)
    private readonly userRepository: IUserRepository,
  ) {}

  async createUser(userDto: UserDTO): Promise<User> {
    return await this.userRepository.create(userDto);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findByEmail(email);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
