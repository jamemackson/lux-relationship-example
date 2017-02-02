import { Serializer } from 'lux-framework';

class AuthorsSerializer extends Serializer {
  attributes = [
    'firstName',
    'lastName',
    'nickname'
  ];
  hasMany = [
    'books'
  ];
}

export default AuthorsSerializer;
