import {
  FiltersContainer,
  HomeContainer,
  PageTitle,
  ProductsContainer,
} from '@/pages/home/styles'
import Head from 'next/head'
import { ProductComponent } from './components/Product/index.page'
import type { Product } from '@/reducers/Product/reducer'
import type { GetStaticProps } from 'next'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '@/context/ProductsContext'

interface HomeProps {
  productsList: Product[]
  message: string
}

export default function Home({ message, productsList }: HomeProps) {
  const { products, saveProductsList } = useContext(ProductsContext)

  useEffect(() => {
    saveProductsList(productsList)
  }, [saveProductsList, productsList])

  return (
    <>
      <Head>
        <title>Frontend Challenge</title>
      </Head>
      <HomeContainer>
        <PageTitle>Fake Store</PageTitle>
        <FiltersContainer>todo</FiltersContainer>
        {message === 'ok' ? (
          <ProductsContainer>
            {products?.map(product => {
              return <ProductComponent key={product.id} product={product} />
            })}
          </ProductsContainer>
        ) : (
          <>
            {console.error(message)}
            <h1>Houve um problema, tente novamente mais tarde</h1>
          </>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let message = ''
  const products = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json =>
      json.map((product: Product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
        }
      })
    )
    .catch(err => {
      console.error(err)
      message = err
    })

  return {
    props: {
      productsList: products,
      message: message || 'ok',
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
