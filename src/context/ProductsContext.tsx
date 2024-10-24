import { saveList } from '@/reducers/Product/actions'
import { productsReducer, type Product } from '@/reducers/Product/reducer'
import { loadState, saveState } from '@/services/localStorage'
import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
  type ReactNode,
} from 'react'

interface Filter {
  term: string | null
  category: string | null
  priceMin: number | null
  priceMax: number | null
}

interface ProductsContextType {
  products: Product[]
  filter: Filter
  saveProductsList: (products: Product[]) => void
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [productsState, dispatch] = useReducer(
    productsReducer,
    {
      products: [],
    },
    initailState => {
      const storedState = loadState()
      return storedState ? storedState : initailState
    }
  )

  let { products } = productsState

  const [filter, setFilter] = useState<Filter>({
    term: null,
    category: null,
    priceMin: null,
    priceMax: null,
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(products)
    saveState(stateJSON)
  }, [products])

  const { term, category, priceMin, priceMax } = filter

  products = products?.filter(product => {
    const isTitleValid =
      term === null || product.title.toLowerCase().includes(term.toLowerCase())

    const isCategoryValid = category === null || category === product.category

    const priceMinParse = priceMin === null ? 0 : priceMin

    const priceMaxParse =
      priceMax === null ? Number.POSITIVE_INFINITY : priceMax

    const isPriceRangeValid =
      priceMinParse <= product.price && priceMaxParse >= product.price

    return isTitleValid && isCategoryValid && isPriceRangeValid
  })

  const saveProductsList = useCallback((products: Product[]) => {
    dispatch(saveList(products))
  }, [])

  return (
    <ProductsContext.Provider value={{ products, filter, saveProductsList }}>
      {children}
    </ProductsContext.Provider>
  )
}
