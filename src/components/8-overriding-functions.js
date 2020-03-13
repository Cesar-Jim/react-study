import React from 'react';

const Greet = () => {
  const sayHello = () => console.log('Hello');

  return (
    <div>
      <p>
        Click each button and see the output in the console. Button on the left
        has an overriding function{' '}
      </p>
      <Button handleClick={sayHello} />
      <Button />
    </div>
  );
};

const Button = ({ handleClick }) => (
  <button onClick={handleClick}>Button</button>
);

Button.defaultProps = {
  handleClick: () => {
    console.log('Default');
  }
};

export default Greet;
