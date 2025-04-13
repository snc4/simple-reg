import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { RegisterService } from './services/register.service';
import { UserModule } from '@user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [RegisterService],
})
export class AuthModule {}
