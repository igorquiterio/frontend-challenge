import { styled } from '@/styles'

export const ProductDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  borderRadius: 4,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  padding: '2px',

  alignItems: 'center',
  justifyContent: 'flex-start',

  width: '10rem',
  borderBottom: '5px solid transparent',

  '@media(max-width: 600px)': {
    width: '100%',
  },

  img: {
    marginTop: '0.5rem',
    objectFit: 'contain',
    width: '8rem',
    height: '9rem',
  },

  h4: {
    fontSize: '$sm',
    color: '$gray900',
    overflow: 'hidden',
    height: '2rem',
    width: '100%',
    padding: '2px',
    fontWeight: 'normal',
  },

  h5: {
    display: 'none',
    padding: '2px',
  },

  span: {
    color: '$gray900',
    marginTop: '0.5rem',
  },

  '&:hover': {
    borderBottom: '5px solid $green300',
    h5: {
      display: 'block',
      position: 'absolute',
      color: '$gray900',
      background: '#fff',
      border: '2px solid $green300',
      borderRadius: 4,
      width: '100%',
      marginTop: '-2px',
      fontWeight: 'normal',
    },
    span: {
      fontWeight: 'bold',
    },
  },
})
