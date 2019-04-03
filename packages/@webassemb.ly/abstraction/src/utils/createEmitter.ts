import {AnyFunction} from '@webassemb.ly/utils';
import {AbstractionKeys} from '../types';

/**
 * Take a function `func` returning a factory function which produces abstract
 * syntax tree (AST) nodes for calling the recevier for `func`
 * 
 * @param func The function to abstract
 * @return A factory function for producing AST nodes for 
 */
export default function createEmitter<T extends AnyFunction>(func: T) {
  return (...params: Parameters<T>) => ({
    [AbstractionKeys.params]: params,
  })
}