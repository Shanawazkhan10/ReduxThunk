import { ADD_CAKE } from "../Type/addCake";

const initialState = {
  numberOfCake: 0,
};

const addCakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake + 1,
      };
    default:
      return state;
  }
};
export default addCakeReducer;
