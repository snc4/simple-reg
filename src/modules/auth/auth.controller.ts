import { Controller, Post, Body } from '@nestjs/common';

import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';

import { RegisterReqDTO } from './dto/register.dto';
import { LoginReqDTO, LoginResDTO } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(
    private readonly registerService: RegisterService,
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() registerReqDto: RegisterReqDTO) {
    await this.registerService.registerUser(registerReqDto);
  }

  @Post('login')
  async login(@Body() loginReqDto: LoginReqDTO): Promise<LoginResDTO> {
    return await this.authService.login(loginReqDto);
  }
}
