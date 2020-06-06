import reducer from './reducer'
const createStore = () => {
  let state
  let listeners = []
  const getState = () => state
  const subscribe = (listener) => {
   
    listeners.push(listener)
    return () => {
      console.log('UNSUBSCRIBED!');
      
      listeners = listeners.filter(lis => lis !== listener)
    }
  }
  const dispatch = (action) => {
    state = reducer(state, action)
    for(let i = 0; i < listeners.length; i++) {
      listeners[i]()
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}

const store = createStore()
export default store
