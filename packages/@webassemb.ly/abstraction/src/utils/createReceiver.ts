import {AnyFunction} from '@webassemb.ly/utils';
import {AbstractionKeys} from '../types';

/**
 * Take a function `func` returning a factory function which will receive the
 * abstract syntax tree (AST) nodes for calling for `func`
 * 
 * @param func The function to abstract
 * @return The return value of func
 */
export default function createReceiver<T extends AnyFunction>(func: T) {
  return ({ [AbstractionKeys.params]: params }) => func(...params);
}