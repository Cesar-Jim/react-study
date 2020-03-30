import React, { useState, useContext, createContext } from 'react';

// {Provider, Consumer}
// Create a context
const MyContext = createContext();

// Traditional CONTEXT CONSUMPTION:
// const GrandChild = () => (
//   <MyContext.Consumer>
//     {context => (
//       <div>
//         <p>GrandChild {context.num}</p>
//         <button onClick={context.addNum}>Grand child dispatcher</button>
//       </div>
//     )}
//   </MyContext.Consumer>
// );

const GrandChild = () => {
  const { num, addNum } = useContext(MyContext);

  return (
    <div>
      <p>GrandChild {num}</p>
      <button onClick={addNum}>Grand child dispatcher</button>
    </div>
  );
};

const Child = () => (
  <div>
    <p>Child</p>
    <GrandChild />
  </div>
);

const App = () => {
  const [num, setNum] = useState(0);

  const addNum = () => {
    setNum(num + 1);
  };

  return (
    <MyContext.Provider
      value={{
        num,
        addNum
      }}
    >
      <div>
        <button onClick={addNum}>App ({num})</button>
        <Child />
      </div>
    </MyContext.Provider>
  );
};

export default App;
