import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UserController {
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req) {
    console.log(req.user);
    return 'Jwt restricted route example';
  }
}
