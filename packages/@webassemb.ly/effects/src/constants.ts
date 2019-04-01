export const TYPE: unique symbol = Symbol.for('webassemb.ly/effects');

export enum SignalType {
  All,
  Call,
  Promise,
  Race,
}
