import { render, screen, waitFor } from '@testing-library/react'
import Home, { getStaticProps } from './index.page'
import { ProductsContext } from '../../context/ProductsContext'

// jest.mock('../../context/ProductsContext', () => ({
//   ProductsContext: {
//     Consumer: ({ children }) =>
//       children({ products: [], saveProductsList: jest.fn() }),
//   },
// }))

const mockSaveProductsList = jest.fn()

const mockProductsContextValue = {
  products: [],
  saveProductsList: mockSaveProductsList,
}

const mockProductsList = [
  {
    id: 1,
    title: 'Produto 1',
    price: 10,
    description: 'Descrição 1',
    category: 'Categoria 1',
    image: 'imagem1.jpg',
  },
  {
    id: 2,
    title: 'Produto 2',
    price: 20,
    description: 'Descrição 2',
    category: 'Categoria 2',
    image: 'imagem2.jpg',
  },
]

describe('Home Component', () => {
  it('renders the page"', async () => {
    render(
      <ProductsContext.Provider value={mockProductsContextValue}>
        <Home message="ok" productsList={mockProductsList} />
      </ProductsContext.Provider>
    )

    expect(screen.getByText('Fake Store')).toBeInTheDocument()
  })
})

describe('getStaticProps', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('fetches products successfully', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockProductsList))

    const response = await getStaticProps()

    expect(response).toEqual({
      props: {
        productsList: mockProductsList,
        message: 'ok',
      },
      revalidate: 7200,
    })
  })

  it('handles fetch errors', async () => {
    fetch.mockReject(new Error('Fetch error'))

    const response = await getStaticProps()

    expect(response).toEqual({
      props: {
        productsList: undefined,
        message: 'Fetch error',
      },
      revalidate: 7200,
    })
  })
})
