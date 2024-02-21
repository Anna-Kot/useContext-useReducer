import { useReducer } from "react";

import { UsersContext } from "./context";
import { reducer, initialState } from "./reducer";

export const UsersProvider = ({ children }) => {
  const [users, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={[users, dispatch]}>
      {children}
    </UsersContext.Provider>
  );
};
