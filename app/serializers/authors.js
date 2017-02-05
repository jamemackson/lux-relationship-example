import { Serializer } from 'lux-framework';

class AuthorsSerializer extends Serializer {
  attributes = [
    'firstName',
    'lastName',
    'nickname',
    'writerId'
  ];
  hasMany = [
    'books'
  ];
}

export default AuthorsSerializer;
