import React from 'react';

// A user object
const user = {
  name: 'Cesar',
  age: 23,
};

// Afunction that returns interaction with the user object
const getInfo = user => {
  return `Hi, my name is ${user.name} and I am ${user.age} years old.`;
};

// A component that returns an element who calls a function that uses the user object
const JSXSample = () => {
  const name = 'Cesar';
  const element = <p>{getInfo(user)}</p>;

  return element;
};

export default JSXSample;