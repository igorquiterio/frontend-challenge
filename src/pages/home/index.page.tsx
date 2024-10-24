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

export default function Home(resp: HomeProps) {
  console.log(resp)

  const products = resp.products
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
                <h3>{product.title}</h3>
                <Image
                  src={product.image}
                  width={128}
                  height={144}
                  alt={product.title}
                  placeholder="blur"
                  blurDataURL="none"
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

  console.log(products)

  return {
    props: {
      products,
      message: message || 'ok',
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
