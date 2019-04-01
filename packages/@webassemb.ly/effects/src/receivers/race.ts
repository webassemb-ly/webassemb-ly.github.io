import { error } from '../utils';

export default async function race<
  T extends AnyFunction,
  U extends Array<Promise<any>>
>(
  next: T,
  contestants: U
) {
  return await Promise.race(contestants)
    .then(next)
    .catch(message => next(error(message)));
}

