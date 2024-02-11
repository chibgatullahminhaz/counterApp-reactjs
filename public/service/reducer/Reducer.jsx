import { DICREMENT, INCREMENT, INCREMENTBYAMOUNT, RESET } from "../constans/constans";

const initiatstate ={
    count: 0,
    Byamount: 5
}

 const  CounterReducer = (state=initiatstate,action)=>{
switch (action.type) {
    case INCREMENT:
        return{
            ...state,
            count: state.count + 1
        };
        case DICREMENT:
            return{
                ...state,
                count: state.count - 1
            };
         case RESET:
                return{
                    ...state,
                    count:0
                };
        case INCREMENTBYAMOUNT:
                    return{
                        ...state,
                        count: state.count + action.payload
                    };
    default:
        return state;
}
}

export default CounterReducer;