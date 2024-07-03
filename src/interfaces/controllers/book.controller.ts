import { Controller, Get, Post, Body } from "@nestjs/common";
import { AddBookUseCase } from "src/application/use-cases/add-book.use-case";
import { GetBooksUseCase } from "src/application/use-cases/get-books.use-case";
import { CreateBookDto } from "../dto/create-book.dto";
import { Book } from "src/domain/entities/book.entity";

@Controller("books")
export class BookController {
  constructor(
    private readonly addBookUseCase: AddBookUseCase,
    private readonly getBooksUseCase: GetBooksUseCase,
  ) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.getBooksUseCase.execute();
  }

  @Post()
  async addBook(@Body() createBookDto: CreateBookDto): Promise<void> {
    const book = new Book(
      createBookDto.id,
      createBookDto.title,
      createBookDto.author,
      createBookDto.publishedDate,
      createBookDto.status,
    );
    await this.addBookUseCase.execute(book);
  }
}
