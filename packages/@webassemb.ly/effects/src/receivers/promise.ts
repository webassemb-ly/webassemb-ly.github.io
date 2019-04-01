import { error } from '../utils';

export default async function promise<
  T extends AnyFunction,
  U extends Promise<any>
>(
  next: T,
  promise: U
) {
  return await promise
    .then(next)
    .catch(message => next(error(message)));
}
