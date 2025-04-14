import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '@user/services/user.service';

@Injectable()
export class RegisterService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(email: string, password: string) {
    const user = await this.userService.createUser({ id: 0, email, passwordHash: password });
    const userAuthToken = await this.jwtService.sign({ id: user.id });
    console.log(userAuthToken);
    return { userAuthToken };
  }
}
