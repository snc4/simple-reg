import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '@user/services/user.service';
import { CryptoService } from '@common/crypto/crypto.service';
import { LoginReqDTO, LoginResDTO } from '../dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly cryptoService: CryptoService,
  ) {}

  async login(credentials: LoginReqDTO): Promise<LoginResDTO> {
    const { email, password } = credentials;

    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email: ${email} does not exists!`);
    }

    const isCorrectPassword = await this.cryptoService.compare(password, user.passwordHash);

    if (!isCorrectPassword) {
      throw new ForbiddenException('Password is not correct!');
    }

    const jwtToken = await this.jwtService.sign({ id: user.id });
    return { jwtToken };
  }
}
