import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BookOrmEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  publishedDate: Date;

  @Column()
  status: "TO_READ" | "READING" | "READ";
}
