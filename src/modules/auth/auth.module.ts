import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { RegisterService } from './services/register.service';
import { UserModule } from '@user/user.module';
import { JwtAuthModule } from '@common/jwt-auth/jwt-auth.module';

@Module({
  imports: [UserModule, JwtAuthModule],
  controllers: [AuthController],
  providers: [RegisterService],
})
export class AuthModule {}
