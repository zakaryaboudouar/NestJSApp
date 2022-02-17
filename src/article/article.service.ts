import { Injectable } from '@nestjs/common';
import { ArticleRepository } from './article.repository';
import { ArticleDto } from './articleDto';
import { Article } from './entity/article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import any = jasmine.any;
import {lastValueFrom, map} from "rxjs";

@Injectable()
export class ArticleService {

  constructor(
    @InjectRepository(ArticleRepository)
    private readonly articelRepository: ArticleRepository,
    private httpService: HttpService,
  ) {}

  async createArticle(articleDto: ArticleDto): Promise<Article> {
    return this.articelRepository.createArticle(articleDto);
  }

  private getSentim() {

    }

  async getAllArticles() {

    return this.articelRepository.query(
      'SELECT name,author,creationDate,publicationDate FROM `article` ',
    );
  }

  async getOneArticle(id: number) {
    const article = await this.articelRepository.findOne(id);
    return article;
  }

  async updateArticle(articleDto: ArticleDto, id: number) {
    const article = await this.getOneArticle(id);
    article.name = articleDto.name;
    article.author = articleDto.author;
    article.text = articleDto.text;
    article.creationDate = articleDto.creationDate;
    article.publicationDate = articleDto.publicationDate;
    await article.save();
    return article;
  }

  async deletArticleById(id: number) {
    const article = await this.getOneArticle(id);
    return await this.articelRepository.remove(article);
  }
}
