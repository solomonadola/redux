import * as action from './actionTypes'
export function bugAdded(desc){
    return {
        type: action.bugAdded,
        payload:{
            description: desc
        }
    }
}
export function bugRemoved(id){
    return {
        type:action.bugRemoved,
        payload:{
            id:id
        }
    }
}
export function bugResolved(id){
    return{
        type:action.bugResolved,
        payload:{
            id:id
        }
    }
}