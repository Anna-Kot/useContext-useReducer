import React, { useContext } from "react";
import { UsersContext, usersActions } from "./contexts/users";

const Users = () => {
  const [users, dispatch] = useContext(UsersContext);

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.title}{" "}
            <button onClick={() => dispatch(usersActions.removeUser(user))}>
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
