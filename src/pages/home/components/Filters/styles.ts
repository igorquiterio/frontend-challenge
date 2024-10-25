import { styled } from '@/styles'

export const FiltersContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',

  margin: '1rem',
  paddingTop: '2rem',
  borderRadius: 4,
  width: '90vw',
  backgroundColor: '$gray800',
  borderTop: '2px solid $green300',

  flexWrap: 'wrap',
  gap: '2rem',
  marginBottom: '1rem',

  'input, select': {
    background: 'transparent',
    height: '2.5rem',
    border: 0,
    borderBottom: '2px solid $green300',
    fontWeight: 'bold',
    fontSize: '$lg',
    padding: '0 0.5rem',
    color: '$gray100',
    option: {
      background: '$gray800',
    },
  },

  button: {
    width: '100%',
    border: 0,
    padding: '1rem',
    borderRadius: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    background: '$green300',
    color: '$gray800',

    '&:hover': {
      background: '$green500',
    },
  },
})

export const InputBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
