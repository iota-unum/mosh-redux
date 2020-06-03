import * as actions from './actionTypes'


export const bugAdded = description => ({type:actions.BUG_ADDED, payload:{description: description}})

export const bugRemoved = id => ({type: 'bugRemoved', payload:{id: id}})