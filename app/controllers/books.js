import { Controller } from 'lux-framework';

class BooksController extends Controller {
  params = [
    'name',
    'authorId'
  ];
}

export default BooksController;
