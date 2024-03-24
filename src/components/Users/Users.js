"use client"
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>res.json()
      .then((data) => setUsers(data))
    );
  }, []);
  return <div>
    <h1>Total Users : {users.length}</h1>
    {
        users.map(user=>
            <div key={user.id} className="card w-96 bg-primary text-primary-content w-[70%] my-5 mx-auto">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        )
    }
  </div>;
};

export default Users;
