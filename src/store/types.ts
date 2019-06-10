/**
 * @template T = Tipo da propriedade "type".
 * @template P = Tipo da propriedade "payload".
 */
export type ActionType<T, P> = {
  type: T,
  payload?: P,
}
