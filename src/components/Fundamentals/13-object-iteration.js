import React, { useState } from 'react';

const ObjectIteration = () => {
  const [user] = useState({
    firstName: 'Cesar',
    lastName: 'Jimenez',
    age: '42',
    country: 'Mexico'
  });

  const keys = Object.keys(user);

  return (
    <div>
      <p>Iterating over the properties of a user object</p>
      <ul>
        {keys.map(key => (
          <li key={key}>
            <strong>{key}:</strong> {user[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjectIteration;
