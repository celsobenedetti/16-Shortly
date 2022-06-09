import { Body, Controller, Delete, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { JoiValidationPipe } from 'src/common/validation/joi-validation.pipe';
import { shortenUrlSchema } from './urls.validation';

type urlBody = {
  url: string;
};

@Controller('urls')
export class UrlsController {
  @Post('shorten')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new JoiValidationPipe(shortenUrlSchema))
  async shortenUrl(@Body() body: urlBody) {
    return 'shortenUrl handler';
  }

  @Get(':id')
  async findOne() {
    return 'findOne url handler';
  }

  @Get('open/:shortUrl')
  async redirectToUrl() {
    return 'redirectToUrl handler';
  }

  @Delete(':id')
  async deleteOne() {
    return 'deleteOne url handler';
  }
}
