import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "src/domain/entities/book.entity";
import { BookRepository } from "src/domain/repositories/book.repository";
import { BookOrmEntity } from "../orm/book.orm-entity";

@Injectable()
export class BookRepositoryImpl implements BookRepository {
  constructor(
    @InjectRepository(BookOrmEntity)
    private readonly bookRepository: Repository<BookOrmEntity>,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findById(id: string): Promise<Book | null> {
    return this.bookRepository.findOne({
      where: { id: id },
    });
  }

  async save(book: Book): Promise<void> {
    await this.bookRepository.save(book);
  }

  async update(book: Book): Promise<void> {
    await this.bookRepository.save(book);
  }

  async delete(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
