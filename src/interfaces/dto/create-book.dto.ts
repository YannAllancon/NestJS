import { IsString, IsDate } from "class-validator";

export class CreateBookDto {
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsDate()
  publishedDate: Date;

  @IsString()
  status: "TO_READ" | "READING" | "READ";
}
