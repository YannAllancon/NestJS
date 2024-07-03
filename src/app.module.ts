import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { BookController } from "./interfaces/controllers/book.controller";
import { AddBookUseCase } from "./application/use-cases/add-book.use-case";
import { GetBooksUseCase } from "./application/use-cases/get-books.use-case";
import { BookRepositoryImpl } from "./infrastructure/repositories/book.repository.impl";
import { BookOrmEntity } from "./infrastructure/orm/book.orm-entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [BookOrmEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([BookOrmEntity]),
  ],
  controllers: [BookController],
  providers: [
    AddBookUseCase,
    GetBooksUseCase,
    { provide: "BookRepository", useClass: BookRepositoryImpl },
  ],
})
export class AppModule {}
