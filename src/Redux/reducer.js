import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionType"

const initial={task:[]}


export const reducer=(state=initial,{type,payload})=>{

    switch(type){
        case ADD_TASK:return {
            ...state,
            task:[...state.task,{id:Date.now(),task:payload,completed:false},

            ]
        };
        case TOGGLE_TASK:return {
            ...state,
            task:state.task.map((el)=>el.id===payload? {...el,completed:!el.completed}:el)
        };
        case DELETE_TASK:return {
            ...state,
            task:state.task.filter((el)=>el.id!==payload)
        };
        default:return state
    }
}