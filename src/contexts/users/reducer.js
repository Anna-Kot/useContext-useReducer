import { ADD_USER, REMOVE_USER } from "./types";
export const initialState = [];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user];
    case REMOVE_USER:
      return state.filter((user) => user.id !== action.user.id);
    default:
      throw new Error();
  }
}
