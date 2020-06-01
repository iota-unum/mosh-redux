console.log('funzia')

import store from './store'

console.log(store);
store.dispatch({type:'bugAdded', payload:{description: 'bug1'}})
store.dispatch({type:'bugAdded', payload:{description: 'bug2'}})
store.dispatch({type: 'bugRemoved', payload:{id: 1}})
console.log(store.getState());
