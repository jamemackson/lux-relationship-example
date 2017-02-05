import Author from '../app/models/author';
import Book from '../app/models/book';

export default async function seed(trx) {

  await Author.transacting(trx).create({
    firstName: 'tommy',
    lastName: 'bahama',
    nickname: 'tommy b',
    writerId: 999
  });

  await Book.transacting(trx).create({
    name: 'the good book',
    authorId: 999
  });

}
