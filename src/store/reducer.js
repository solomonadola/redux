import { INCREAMENT_COUNTER } from "./action";

const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};
export default counterReducer;
