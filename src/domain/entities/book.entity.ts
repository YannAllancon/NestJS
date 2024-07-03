export class Book {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public publishedDate: Date,
    public status: 'TO_READ' | 'READING' | 'READ',
  ) {}
}