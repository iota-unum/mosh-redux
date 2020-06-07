import {bugAdded , bugRemoved, bugResolved} from './actions'
import store from './store'

console.log(store.getState());


 const unsubscribe = store.subscribe(()=>{
    console.log('Store Changed!!!');
    console.log('STORE',store.getState());
    
})
store.dispatch(bugAdded('Bug1'))
store.dispatch(bugAdded('Bug2'))
unsubscribe()
store.dispatch(bugResolved(2))
store.dispatch(bugRemoved(1))
