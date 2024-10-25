import { ActionTypes } from './actions'

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface ProductsState {
  products: Product[]
}

interface ProductsAction {
  type: string
  payload: ProductsState
}

export function productsReducer(state: ProductsState, action: ProductsAction) {
  switch (action.type) {
    case ActionTypes.SAVE_LIST:
      return {
        ...state,
        products: action.payload.products,
      }

    default:
      return state
  }
}
