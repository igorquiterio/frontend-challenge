import { ProductDiv } from '@/pages/home/components/Product/styles'
import type { Product } from '@/reducers/Product/reducer'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  product: Product
}

export function ProductComponent({ product }: ProductProps) {
  const brPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price)

  const linkUrl = `/product/${product.id}/saved`

  return (
    <Link href={linkUrl}>
      <ProductDiv>
        <h4>{product.title}</h4>
        <h5>{product.title}</h5>
        <Image
          src={product.image}
          width={128}
          height={144}
          alt={product.title}
          placeholder="blur"
          blurDataURL="default"
        />
        <span>{brPrice}</span>
      </ProductDiv>
    </Link>
  )
}
