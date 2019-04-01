export default function invariant<T>(
  assertion: T,
  error: string = '🚫'
): T {
  if (!assertion) throw new Error(error);

  return assertion;
}
