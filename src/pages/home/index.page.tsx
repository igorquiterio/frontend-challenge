import {
  FiltersContainer,
  HomeContainer,
  PageTitle,
  Product,
  ProductsContainer,
} from '@/pages/home/styles'
import Head from 'next/head'
import Image from 'next/image'

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface HomeProps {
  products: Product[]
  message: string
}

export default function Home({ message, products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Frontend Challenge</title>
      </Head>
      <HomeContainer>
        <PageTitle>Fake Store</PageTitle>
        <FiltersContainer>todo</FiltersContainer>
        <ProductsContainer>
          {products?.map(product => {
            return (
              <Product key={product.id}>
                <h4>{product.title}</h4>
                <Image
                  src={product.image}
                  width={128}
                  height={144}
                  alt={product.title}
                  placeholder="blur"
                  blurDataURL="default"
                />
              </Product>
            )
          })}
        </ProductsContainer>
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
      products,
      message: message || 'ok',
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
