export class BookNotFoundException extends Error {
  constructor(id: string) {
    super(`Book with ID ${id} not found`);
  }
}
