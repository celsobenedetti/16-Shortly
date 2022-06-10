import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserUrlInfo } from 'src/common/types';
import { UserService } from './user.service';

type userIdParam = {
  id: number;
};

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('users/:id')
  async findOne(@Param() { id }: userIdParam): Promise<UserUrlInfo> {
    return this.userService.findUserInfo(id);
  }
}
