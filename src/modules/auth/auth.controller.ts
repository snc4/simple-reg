import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { RegisterService } from './services/register.service';
import { NewUserDTO } from '@common/dto/new-user.dto';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  async register(@Body() newUser: NewUserDTO) {
    const { email, password } = newUser;
    await this.registerService.registerUser(email, password);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('authorization')
  @Post('login')
  async login(@Req() req: any) {
    console.log(req.user);
    return 'kek';
  }
}
