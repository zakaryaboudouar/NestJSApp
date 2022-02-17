import { EntityRepository, Repository } from 'typeorm';
import { Article } from './entity/article.entity';
import { ArticleDto } from './articleDto';
import any = jasmine.any;
@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {

    async createArticle(articleDto: ArticleDto) {
        const article = new Article();
    article.name = articleDto.name;
    article.author = articleDto.author;
    article.text = articleDto.text;
    article.creationDate = articleDto.creationDate;
    article.publicationDate = articleDto.publicationDate;
    await article.save();
    return article;
  }



}
