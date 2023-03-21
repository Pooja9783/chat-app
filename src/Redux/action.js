import { ADD_ALL_USER, SELECT_USER } from "./actionType";

export const addAllUser = (payload) => ({
  type: ADD_ALL_USER,
  payload: payload,
});

export const selectUser = (data) => ({
  type: SELECT_USER,
  payload: data,
});


export const getData = () => async(dispatch) => {
  await fetch("https://panorbit.in/api/users.json")
  .then((res)=> res.json())
  .then((res)=> dispatch(addAllUser(res.users)))
}