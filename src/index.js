console.log('funzia')
import * as actions from './actionTypes'
import store from './store'

const unsubscribe = store.subscribe(()=>{
    console.log('Store Changed!!!');
    
})
store.dispatch({type:actions.BUG_ADDED, payload:{description: 'bug1'}})
store.dispatch({type: actions.BUG_REMOVED, payload:{description: 'bug2'}})
unsubscribe()
store.dispatch({type: 'bugRemoved', payload:{id: 1}})
console.log(store.getState());
