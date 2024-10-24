import {
  FiltersContainer,
  HomeContainer,
  PageTitle,
  Product,
  ProductsContainer,
} from '@/styles/pages/home'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Challenge</title>
      </Head>
      <HomeContainer>
        <PageTitle>Fake Store</PageTitle>
        <FiltersContainer>todo</FiltersContainer>
        <ProductsContainer>
          <Product>Product</Product>
          <Product>Product</Product>
          <Product>Product</Product>
          <Product>Product</Product>
          <Product>Product</Product>
          <Product>Product</Product>
          <Product>Product</Product>
          <Product>Product</Product>
        </ProductsContainer>
      </HomeContainer>
    </>
  )
}
