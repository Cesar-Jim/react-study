import React, { useState, useEffect } from 'react';

const ApiCallFetchSample = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const urlUsers = 'https://jsonplaceholder.typicode.com/users';

  const hookUsers = () => {
    fetch(urlUsers)
      .then(res => res.json())
      .then(users => {
        //console.log(users);
        setUsers([...users]);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch(error => {
        console.log(error);
        // error handling
      });
  };

  useEffect(hookUsers, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Name: {user.name} -- <strong>{user.username}</strong> (
            <a href={`http://${user.website}`}>website</a>)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCallFetchSample;
