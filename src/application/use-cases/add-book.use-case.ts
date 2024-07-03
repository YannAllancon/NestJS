import { Injectable } from "@nestjs/common";
import { BookRepository } from "src/domain/repositories/book.repository";
import { Book } from "src/domain/entities/book.entity";

@Injectable()
export class AddBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(book: Book): Promise<void> {
    await this.bookRepository.save(book);
  }
}
