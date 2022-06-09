import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Request,
  Response,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { Response as ExpressRes } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { IUrlResult, ReqWithUser, ShortUrlObj } from 'src/common/types';
import { JoiValidationPipe } from 'src/common/validation/joi-validation.pipe';
import { UrlsService } from './urls.service';
import { shortenUrlSchema } from './urls.validation';

type urlBody = {
  url: string;
};

type urlId = {
  id: number;
};

type shortUrlParam = {
  shortUrl: string;
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
  async findOne(@Param() { id }: urlId): Promise<IUrlResult> {
    return this.urlsService.findOne(id);
  }

  @Get('open/:shortUrl')
  async visitUrl(
    @Param() { shortUrl }: shortUrlParam,
    @Response() res: ExpressRes,
  ): Promise<void> {
    const url = await this.urlsService.updateVisitCount(shortUrl);
    res.redirect(url);
  }

  @Delete(':id')
  @HttpCode(204)
  @UseGuards(JwtAuthGuard)
  async deleteOne(@Param() { id }: urlId, @Request() req: ReqWithUser): Promise<void> {
    await this.urlsService.deleteOne(id, req.user.id);
  }
}
