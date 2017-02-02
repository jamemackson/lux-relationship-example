import { Serializer } from 'lux-framework';

class BooksSerializer extends Serializer {
  attributes = [
    'name',
    'authorId'
  ];
}

export default BooksSerializer;
