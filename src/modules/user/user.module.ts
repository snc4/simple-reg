import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './services/user.service';
import { IUserRepository } from './domain/interfaces/user.repo.interface';
import { USER_REPOSITORY_DI_TOKEN, TypeOrmUserRepository } from './domain/repositories/user';
import { UserTypeormEntity } from 'src/infrastructure/typeorm/entities/user.typeorm.entity';
import { User } from './domain/entities';
// import { TypeOrmUserRepository } from './domain/repositories/user.typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeormEntity])],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY_DI_TOKEN,
      useClass: TypeOrmUserRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
