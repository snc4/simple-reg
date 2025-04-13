import { Module } from '@nestjs/common';

import { UserService } from './services/user.service';

@Module({
  imports: [],
  providers: [UserService],
})
export class UserModule {}
