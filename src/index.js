import {bugAdded , bugRemoved, bugResolved} from './store/bugs'
import store from './store/store'

console.log(store.getState());


 const unsubscribe = store.subscribe(()=>{
    console.log('Store Changed!!!');
    console.log('STORE',store.getState());
    
})
store.dispatch(bugAdded('Bug1'))
store.dispatch(bugAdded('Bug2'))
store.dispatch(bugResolved(2))
store.dispatch(bugRemoved(1))
store.dispatch(bugAdded('Bug3'))
unsubscribe()
