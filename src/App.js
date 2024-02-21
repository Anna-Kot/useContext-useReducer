import "./App.css";
import { UsersProvider } from "./contexts/users";
import Users from "./Users";
import AddUser from "./AddUser";

function App() {
  return (
    <UsersProvider>
      <AddUser />
      <Users />
    </UsersProvider>
  );
}

export default App;
