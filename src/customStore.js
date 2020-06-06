const createStore = () => {
  let state = 0
  const getState = () => state
  const dispatch = () => {}
  const subscribe = () => {}
  return {
    getState,
    dispatch,
    subscribe
  }
}

const store = createStore()
export default store
