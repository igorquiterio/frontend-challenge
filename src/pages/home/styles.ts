import { styled } from '../../styles'

export const HomeContainer = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '0.5rem',
  width: '100%',
  maxWidth: 'calc(100vw - 2rem)',
  minHeight: 'calc(100vh - 2rem)',
  margin: '1rem',
})

export const FilterBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
})

export const PageTitle = styled('h1', {
  fontSize: '$2xl',
  color: '$green300',
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '1rem',
  gap: '2rem',
  justifyContent: 'center',
  width: '100%',
})
