console.log('funzia')

import store from './store'

const unsubscribe = store.subscribe(()=>{
    console.log('Store Changed!!!');
    
})
store.dispatch({type:'bugAdded', payload:{description: 'bug1'}})
store.dispatch({type:'bugAdded', payload:{description: 'bug2'}})
unsubscribe()
store.dispatch({type: 'bugRemoved', payload:{id: 1}})
console.log(store.getState());
