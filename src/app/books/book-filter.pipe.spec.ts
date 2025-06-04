import { BookFilterPipe } from './book-filter.pipe';

describe('BookFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
