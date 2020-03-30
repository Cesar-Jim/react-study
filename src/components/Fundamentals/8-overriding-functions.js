import React from 'react';

const Greet = () => {
  const sayHello = () => console.log('Hello');

  return (
    <div>
      <p>
        Click each button and see the output in the console. Button on the left
        has an overriding function{' '}
      </p>
      <Button handleClick={sayHello}>Overriding</Button>
      <Button />
    </div>
  );
};

const Button = ({ handleClick, name, children }) => (
  <button onClick={handleClick}>{children ? children : name}</button>
);

Button.defaultProps = {
  handleClick: () => {
    console.log('Default');
  },
  name: 'Default'
};

export default Greet;
