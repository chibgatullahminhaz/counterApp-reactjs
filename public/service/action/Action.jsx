import { DICREMENT, INCREMENT, INCREMENTBYAMOUNT, RESET } from "../constans/constans"
export const increment=()=>{
    return {
        type:INCREMENT
    }
}

export const decrement=()=>{
    return {
        type:DICREMENT
    }
}
export const reset=()=>{
    return {
        type:RESET
    }
}
export const incrementbyamount=(value)=>{
    return {
        type:INCREMENTBYAMOUNT,
        payloade:value
    }
}

