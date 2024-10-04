//import { type } from "@testing-library/user-event/dist/type"
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./actionType"

export const addtask=(task)=>{
    return {type:ADD_TASK,payload:task}

}

export const toggletask=(id)=>{
    return {type:TOGGLE_TASK,payload:id}

}


export const deletetask=(id)=>{
    return {type:DELETE_TASK,payload:id}
}