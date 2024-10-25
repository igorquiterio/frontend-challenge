import { saveList } from '@/reducers/Product/actions'
import { productsReducer, type Product } from '@/reducers/Product/reducer'
import { loadState, saveState } from '@/services/localStorage'
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from 'react'

interface Filter {
  term?: string | undefined
  category?: string | undefined
  priceMin?: number | undefined
  priceMax?: number | undefined
}

interface ProductsContextType {
  products: Product[]
  filter: Filter
  categories: string[]
  saveProductsList: (products: Product[]) => void
  receiveFilterData: (filter: Filter) => void
}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [categories, setCategories] = useState<string[]>([])

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

  const { products } = productsState

  const [filter, setFilter] = useState<Filter>({
    term: undefined,
    category: undefined,
    priceMin: undefined,
    priceMax: undefined,
  })

  useEffect(() => {
    if (products) {
      const stateJSON = JSON.stringify(products)
      saveState(stateJSON)

      const allCategories = products?.map(prod => prod.category)
      const uniqueCategories = [...new Set(allCategories)]
      setCategories(uniqueCategories)
    }
  }, [products])

  const { term, category, priceMin, priceMax } = filter

  const saveProductsList = useCallback((products: Product[]) => {
    dispatch(saveList(products))
  }, [])

  const receiveFilterData = useCallback((filter: Filter) => {
    setFilter(filter)
  }, [])

  const productsAfterFilter = useMemo<Product[]>(() => {
    return products?.filter(product => {
      const isTitleValid =
        term === undefined ||
        term === '' ||
        product.title.toLowerCase().includes(term.toLowerCase())

      const isCategoryValid =
        category === undefined ||
        category === '' ||
        category === product.category

      const priceMinParse = priceMin === undefined ? 0 : priceMin

      const priceMaxParse =
        priceMax === undefined ? Number.POSITIVE_INFINITY : priceMax

      const isPriceRangeValid =
        priceMinParse <= product.price && priceMaxParse >= product.price

      return isTitleValid && isCategoryValid && isPriceRangeValid
    })
  }, [term, category, priceMin, priceMax, products])

  return (
    <ProductsContext.Provider
      value={{
        products: productsAfterFilter,
        filter,
        categories,
        saveProductsList,
        receiveFilterData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
