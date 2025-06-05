import { CanActivateFn } from '@angular/router';

export const bookDetailGuard: CanActivateFn = (route, state) => {
  const isbn = route.params['isbn'] || '';
  console.log(`Guard activated for ISBN: ${isbn}`);
  return isbn !== '123456791';
};
