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

export const FiltersContainer = styled('div', {
  margin: '1rem',
  borderRadius: 4,
  width: '100%',
  height: '6rem',
  backgroundColor: '$gray100',

  '@media(max-width: 600px)': {
    backgroundColor: '$green300',
  },
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

export const Product = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  borderRadius: 4,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  alignItems: 'center',
  justifyContent: 'center',

  width: '9rem',

  img: {
    objectFit: 'contain',
    width: '8rem',
    height: '9rem',
  },

  h4: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
})