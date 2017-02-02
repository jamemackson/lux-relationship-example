import { Controller } from 'lux-framework';

class AuthorsController extends Controller {
  params = [
    'firstName',
    'lastName',
    'nickname'
  ];
}

export default AuthorsController;
