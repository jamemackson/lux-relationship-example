import { Model } from 'lux-framework';

class Author extends Model {
  static hasMany = {
    books: {
      inverse: 'author'
      // The line above lets Lux know that this relationship is accessible
      // on book instances via `book.author`.
    }
  };
}

export default Author;
