import { IsDateString, IsNotEmpty } from 'class-validator';

export class ArticleDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  author: string;
  @IsNotEmpty()
  text: string;
  @IsNotEmpty()
  @IsDateString()
  creationDate: Date;
  @IsNotEmpty()
  @IsDateString()
  publicationDate: Date;
}
