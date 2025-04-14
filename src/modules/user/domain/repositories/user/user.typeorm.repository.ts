import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@user/domain/entities';
import { UserTypeormEntity } from 'src/infrastructure/typeorm/entities/user.typeorm.entity';
import { IUserRepository } from '@user/domain/interfaces/user.repo.interface';

@Injectable()
export class TypeOrmUserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserTypeormEntity)
    private readonly userRepository: Repository<UserTypeormEntity>,
  ) {}

  async create(user: User): Promise<User> {
    console.log('create user');
    console.log(user);
    return await this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    console.log('find by email');
    console.log(email);
    return await this.userRepository.findOne({ where: { email } });
  }
}
