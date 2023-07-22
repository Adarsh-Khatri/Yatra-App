import { createStore } from "redux";


const isOut = false;

const isIn = false;


const reducer = (state = { isOut, isIn }, action) => {
  if (action.type === "OUT") return ({ ...state, isOut: !state.isOut });
  else if (action.type === "IN") return ({ ...state, isIn: !state.isIn });
  else if (action.type === "RESET") return ({ isOut: false, isIn: false })
  return state;
}


export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())