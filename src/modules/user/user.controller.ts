import { Controller, Get, Logger, UseGuards, Req } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { UserService } from '@user/services/user.service';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';

@Controller()
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('authorization')
  @Get('users')
  async users(@Req() req) {
    const requestingUser = req.user;

    this.logger.log(`User (id: ${requestingUser.id}) requested all users`);

    return await this.userService.getUsers();
  }
}
