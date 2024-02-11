import { createStore } from "redux";
import CounterReducer from "../public/service/reducer/Reducer";

export const Store = createStore(CounterReducer)