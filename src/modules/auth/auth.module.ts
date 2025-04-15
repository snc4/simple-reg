import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';

import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';

import { UserModule } from '@user/user.module';
import { JwtAuthModule } from '@common/jwt-auth/jwt-auth.module';
import { CryptoModule } from '@common/crypto/crypto.module';

@Module({
  imports: [UserModule, JwtAuthModule, CryptoModule],
  controllers: [AuthController],
  providers: [RegisterService, AuthService],
})
export class AuthModule {}
