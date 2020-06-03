console.log('funzia')
import {bugAdded , bugRemoved} from './actions'
import store from './store'

const unsubscribe = store.subscribe(()=>{
    console.log('Store Changed!!!');
    
})
console.log('0',store.getState());
store.dispatch(bugAdded('Bug1'))
console.log('1',store.getState());
store.dispatch(bugAdded('Bug2'))
console.log('2',store.getState());
unsubscribe()
store.dispatch(bugRemoved(1))
console.log('3',store.getState());
