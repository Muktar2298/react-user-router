import React from "react";
import { useEffect, useState } from "react";
import User from '../User/User';

const Home = () => {
  const [users, setUsers] = useState([]);
  // --data load --//
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
};

export default Home;
