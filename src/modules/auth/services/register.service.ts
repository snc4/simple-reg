import { Injectable } from '@nestjs/common';

import { UserService } from '@user/services/user.service';

@Injectable()
export class RegisterService {
  constructor(private readonly userService: UserService) {}
}
