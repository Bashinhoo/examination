import React from "react";
import { Routes, Route } from "react-router-dom";

import Users from "./pages/Users";
import UserProfileFullView from "./pages/UserProfileFullView";
import NotFound from "./components/NotFound";

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then(
        (response) => setUsers(response.results)
        );
  }, []);

  return (
    <div>
        <Routes>
          <Route path="/" element={<Users users={users} />} />
          <Route path='*' element={<NotFound />}/>
          <Route path="/profile/:user" element={<UserProfileFullView users={users} />} />
      </Routes>
    </div>
  );
}

export default App;
