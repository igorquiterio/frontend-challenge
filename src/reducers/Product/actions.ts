import type { Product } from './reducer'

export enum ActionTypes {
  SAVE_LIST = 'SAVE_LIST',
}

export function saveList(products: Product[]) {
  return {
    type: ActionTypes.SAVE_LIST,
    payload: {
      products,
    },
  }
}
