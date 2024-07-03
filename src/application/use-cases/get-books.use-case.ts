import { Injectable } from "@nestjs/common";
import { BookRepository } from "src/domain/repositories/book.repository";
import { Book } from "src/domain/entities/book.entity";

@Injectable()
export class GetBooksUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }
}
