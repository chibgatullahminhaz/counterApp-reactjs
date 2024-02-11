import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementbyamount, reset } from '../public/service/action/Action'

function App(){
const count =useSelector(state =>state.count)
const dispatch = useDispatch()
const IncrementHandle =()=>{
dispatch(increment())
}
const decrementHandle =()=>{
  dispatch(decrement())
}
const ResetHandle =()=>{
  dispatch(reset())
}
const IncrementHandlebyAmount =()=>{
  dispatch(incrementbyamount())
}

  return (
    <>
      
    <h1>Counter App</h1>
    <h2>Count Is: {count} </h2>
    <button onClick={IncrementHandle}>Increment</button>
    <button onClick={decrementHandle}>Decrement</button>
    <button onClick={ResetHandle}>Reset</button>
    <button onClick={IncrementHandlebyAmount} >Increment By Amount</button>


    </>
  )
}

export default App
