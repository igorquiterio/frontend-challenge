import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { ProductsContextProvider } from '@/context/ProductsContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsContextProvider>
      <Component {...pageProps} />
    </ProductsContextProvider>
  )
}
