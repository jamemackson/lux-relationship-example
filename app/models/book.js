import { Model } from 'lux-framework';

class Book extends Model {
  static belongsTo = {
    author: {
      inverse: 'books',
      // The line above lets Lux know that this relationship is accessible
      // on author instances via `author.books`.
      foreignKey: 'author_id'
    }
  };
}

export default Book;
