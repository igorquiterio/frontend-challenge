import { render, screen } from '@testing-library/react'
import { ProductComponent } from './index.page'
import type { Product } from '@/reducers/Product/reducer'

describe('ProductComponent', () => {
  const mockProduct: Product = {
    id: 1,
    title: 'Produto 1',
    price: 10,
    description: 'Descrição 1',
    category: 'Categoria 1',
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  }

  it('renders product details', () => {
    render(<ProductComponent product={mockProduct} />)

    const titles = screen.getAllByText('Produto 1')
    expect(titles).toHaveLength(2)
    expect(titles[0]).toBeInTheDocument()

    expect(screen.getByText('R$ 10,00')).toBeInTheDocument() // Assumindo que o formato de moeda está correto

    const image = screen.getByRole('img', { name: 'Produto 1' })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F81Zt42ioCgL._AC_SX679_.jpg&w=256&q=75'
    )
  })
})
