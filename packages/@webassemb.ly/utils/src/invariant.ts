/**
 * Assert an `assertion` if it's false throw an `error`.
 * 
 * NOTE This is occasionally useful in flow.
 * 
 * @param assertion - An expression which evaluates as "truthy"
 * @param [error='🚫'] - An optional string to return as an error.
 * @return The `assertion` which was passed in.
 */
export default function invariant<T>(
  assertion: T,
  error: string = '🚫'
): T {
  if (!assertion) throw new Error(error);

  return assertion;
}
