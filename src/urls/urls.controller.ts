import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ReqWithUser, ShortUrlObj } from 'src/common/types';
import { JoiValidationPipe } from 'src/common/validation/joi-validation.pipe';
import { UrlsService } from './urls.service';
import { shortenUrlSchema } from './urls.validation';

type urlBody = {
  url: string;
};

@Controller('urls')
export class UrlsController {
  constructor(private urlsService: UrlsService) {}

  @Post('shorten')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new JoiValidationPipe(shortenUrlSchema))
  async createShortenedUrl(
    @Body() body: urlBody,
    @Request() req: ReqWithUser,
  ): Promise<ShortUrlObj> {
    return this.urlsService.createShortenedUrl(req.user.id, body.url);
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
