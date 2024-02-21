import React, { useContext } from "react";
import { UsersContext, usersActions } from "./contexts/users";

const AddUser = () => {
  const [, dispatch] = useContext(UsersContext);

  const addUserClick = () => {
    const id = Math.random();

    dispatch(usersActions.addUser({ id, title: "bob-" + id }));
  };

  return <button onClick={addUserClick}>add user</button>;
};

export default AddUser;
