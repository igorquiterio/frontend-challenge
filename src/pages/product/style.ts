import { styled } from '@/styles'

export const ProductContainer = styled('main', {
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

export const ProductBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderRadius: 4,
  width: '90vw',
  backgroundColor: '$gray800',
  borderTop: '2px solid $green300',
  borderBottom: '2rem solid $green300',
})

export const ProductTitleBox = styled('div', {
  display: 'flex',
  flex: 1,

  minHeight: '6rem',
  paddingTop: '1rem',
})

export const ProductBodyBox = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',

  minHeight: 'calc(100vh - 12rem)',
  gap: '2rem',
})

export const ImageBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#fff',
  borderRadius: 4,
  minWidth: '16rem',
  width: '40vw',
  height: '40vh',
  marginTop: '1rem',
  img: {
    objectFit: 'fill',
  },
  span: {
    color: '$gray800',
  },
})

export const DescribeBox = styled('div', {
  flex: 1,

  minWidth: '360px',
  marginBottom: '3rem',
  paddingTop: '1rem',
})

export const DescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  borderBottom: '2px solid $green300',
  borderRadius: 4,
})

export const DescriptionTitle = styled('span', {
  fontSize: '$lg',
  color: '$green300',

  marginTop: '1rem',
})

export const DescriptionText = styled('span', {
  fontSize: '$md',
  color: '$gray100',

  marginBottom: '2rem',
})

export const PriceText = styled('span', {
  fontSize: '$2xl',
  fontWeight: 'bold',

  marginBottom: '2rem',
})
