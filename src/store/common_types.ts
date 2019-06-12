/**
 * @template T = Tipo da propriedade "type".
 * @template P = Tipo da propriedade "payload".
 */
export interface ActionShape<T extends object, P> {
  type: keyof T,
  payload?: P,
}
