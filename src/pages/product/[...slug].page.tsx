import type { Product } from '@/reducers/Product/reducer'
import { ProductsContext } from '@/context/ProductsContext'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import {
  DescribeBox,
  DescriptionContainer,
  DescriptionText,
  DescriptionTitle,
  ImageBox,
  PriceText,
  ProductBodyBox,
  ProductBox,
  ProductContainer,
  ProductTitleBox,
} from './style'
import Image from 'next/image'

interface ProductPageProps {
  product: Product
  message: string
  slug: string
  isProductSaved: boolean
}

export default function ProductPage({
  slug,
  product,
  message,
  isProductSaved,
}: ProductPageProps) {
  const router = useRouter()

  const { products } = useContext(ProductsContext)

  if (product === undefined && slug) {
    const productArray = products?.filter(prod => prod.id === Number(slug))

    if (!productArray) {
      isProductSaved ? router.push(`/product/${slug}`) : router.push('/home')
    } else {
      product = productArray[0]
    }
  }

  return (
    <>
      <ProductContainer>
        <ProductBox>
          <ProductTitleBox>
            <h3>{product ? product.title : 'Carregando...'}</h3>
          </ProductTitleBox>
          <ProductBodyBox>
            <ImageBox>
              {product ? (
                <Image
                  src={product.image}
                  width={250}
                  height={270}
                  alt={product.title}
                  placeholder="blur"
                  blurDataURL="default"
                />
              ) : (
                <span>Carregando...</span>
              )}
            </ImageBox>
            <DescribeBox>
              <DescriptionContainer>
                <DescriptionTitle>Categoria</DescriptionTitle>
                <DescriptionText>
                  {product ? product.category : 'Carregando...'}
                </DescriptionText>
              </DescriptionContainer>

              <DescriptionContainer>
                <DescriptionTitle>Descrição</DescriptionTitle>
                <DescriptionText>
                  {product ? product.description : 'Carregando...'}
                </DescriptionText>
              </DescriptionContainer>

              <DescriptionContainer>
                <DescriptionTitle>Preço</DescriptionTitle>
                <PriceText>
                  {product
                    ? new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(product.price)
                    : 'Carregando...'}
                </PriceText>
              </DescriptionContainer>
            </DescribeBox>
          </ProductBodyBox>
        </ProductBox>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: ['1'] } },
      { params: { slug: ['2'] } },
      { params: { slug: ['3'] } },
      { params: { slug: ['4'] } },
      { params: { slug: ['5'] } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: { params: { slug: string[] } }) => {
  const isProductSaved = params.slug.length > 1 && params.slug[1] === 'saved'
  const realSlug = params.slug[0]

  if (isProductSaved) {
    return {
      props: {
        slug: realSlug,
        message: 'ok',
        isProductSaved,
      },
    }
  }

  try {
    const url = `https://fakestoreapi.com/products/${realSlug}`
    const product = await fetch(url).then(res => res.json())

    return {
      props: {
        slug: realSlug,
        product,
        message: 'ok',
      },
      revalidate: 60 * 30, // 30 min,
    }
  } catch (error) {
    return {
      props: {
        slug: realSlug || -1,
        message: 'error req',
      },
    }
  }
}
