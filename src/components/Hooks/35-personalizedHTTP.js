import React, { useState, useEffect } from 'react';

const useFetch = (url, initialState = []) => {
  const [data, setData] = useState(initialState);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setIsFetching(false);
      });
  }, [url]);

  // Hook data can be returned in the form of an object OR
  // return {
  //   data,
  //   isFetching
  // };

  // In the form of an array so that data and isFetching can be renamed if the user wants to (likewise useState)
  return [data, isFetching];
};

// <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>

const App = () => {
  const [clicks, setClicks] = useState(1);
  const url = `https://jsonplaceholder.typicode.com/users/${clicks}`;
  const [user, isLoading] = useFetch(url, {});

  const add = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      <h3>{user.name}</h3>
      <p>{user.phone}</p>
      <button onClick={add}>Clicks ({clicks})</button>
    </div>
  );
};

export default App;
