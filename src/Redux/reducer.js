import { ADD_ALL_USER, SELECT_USER } from "./actionType";

const initialState = {
  data: [],
  selectedUser: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_USER:
      return {
        ...state,
        data: [...action.payload],
      };
    case SELECT_USER:
      return action.payload
    default:
      return state;
  }
};
