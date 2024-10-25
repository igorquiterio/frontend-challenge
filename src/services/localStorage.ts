export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(
      '@front-challenge-igor:products-state-1.0.0'
    )
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(
      '@front-challenge-igor:products-state-1.0.0',
      serializedState
    )
  } catch {}
}
