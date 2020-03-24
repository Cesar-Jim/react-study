import React from 'react';

// USE STATE HOOK:
import UseStateExample from './components/Hooks/26-useState';

// USE EFFECT HOOK:
import UseEffectExample from './components/Hooks/27-useEffect';

const Hooks = () => {
  return (
    <div>
      <h1>- REACT STUDY (HOOKS) -</h1>
      <hr />
      <h3>useState Hook:</h3>
      <UseStateExample />
      <hr />
      <h3>useEffect Hook:</h3>
      <UseEffectExample />
      <hr />
    </div>
  );
};

export default Hooks;
