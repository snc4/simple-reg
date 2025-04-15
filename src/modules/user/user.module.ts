import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtAuthModule } from '@common/jwt-auth/jwt-auth.module';

import { UserService } from './services/user.service';
import { USER_REPOSITORY_DI_TOKEN, TypeOrmUserRepository } from './domain/repositories/user';
import { UserTypeormEntity } from 'src/infrastructure/typeorm/entities/user.typeorm.entity';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeormEntity]), JwtAuthModule],
  controllers: [UserController],
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
