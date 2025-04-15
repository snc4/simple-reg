import { ConflictException, Injectable } from '@nestjs/common';

import { UserService } from '@user/services/user.service';
import { CryptoService } from '@common/crypto/crypto.service';

import { RegisterReqDTO } from '../dto/register.dto';

@Injectable()
export class RegisterService {
  constructor(
    private readonly userService: UserService,
    private readonly cryptoService: CryptoService,
  ) {}

  async registerUser(registerDto: RegisterReqDTO) {
    const { email, password } = registerDto;

    if (await this.userService.findByEmail(email)) {
      throw new ConflictException(`user with email: ${email} exist!`);
    }

    const passwordHash = await this.cryptoService.hash(password);

    return await this.userService.createUser({ email, passwordHash });
  }
}
