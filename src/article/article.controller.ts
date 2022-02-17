import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ArticleDto } from './articleDto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  persistArticle(@Body() articleDto: ArticleDto) {
    return this.articleService.createArticle(articleDto);
  }

  @Get()
  getAllArticles() {
    return this.articleService.getAllArticles();
  }

  @Put(':id')
  updateArticle(
    @Body() articleDto: ArticleDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.articleService.updateArticle(articleDto, id);
  }

  @Delete(':id')
  async deletArticleById(@Param('id', ParseIntPipe) id: number) {
    await this.articleService.deletArticleById(id);
  }
}
