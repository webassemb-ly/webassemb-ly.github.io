import { error } from '../utils';

export default async function all<
  T extends AnyFunction,
  U extends Array<Promise<any>>
>(
  next: T,
  entries: U
) {
  return await Promise.all(entries)
    .then(next)
    .catch(message => next(error(message)));
}
