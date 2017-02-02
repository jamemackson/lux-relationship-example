import { Serializer } from 'lux-framework';

class BooksSerializer extends Serializer {
  attributes = [
    'name',
    'authorId'
  ];

  hasOne = [
    'author'
  ];
}

export default BooksSerializer;
