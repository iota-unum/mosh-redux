import reducer from './reducer'
const createStore = () => {
  let state
  const getState = () => state
  const subscribe = () => {}
  const dispatch = (action) => {
    state = reducer(state, action)
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}

const store = createStore()
export default store
