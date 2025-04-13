import { Controller, Post, Body } from '@nestjs/common';

import { RegisterService } from './services/register.service';

@Controller()
export class AuthController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  async register(@Body() body: any) {
    // await this.registerService
  }
}
