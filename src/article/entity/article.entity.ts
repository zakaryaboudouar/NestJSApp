import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  author: string;
  @Column()
  text: string;
  @Column()
  creationDate: Date;
  @Column()
  publicationDate: Date;
}
