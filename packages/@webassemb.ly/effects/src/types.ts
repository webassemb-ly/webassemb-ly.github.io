import { all, call, promise, race } from './emitters';

export type Signals =
  | ReturnType<typeof all>
  | ReturnType<typeof call>
  | ReturnType<typeof promise>
  | ReturnType<typeof race>