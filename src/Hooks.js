import React from 'react';

// USE STATE HOOK:
import UseStateExample from './components/Hooks/26-useState';

// USE EFFECT HOOK:
import UseEffectExample from './components/Hooks/27-useEffect';

// USE CONTEXT HOOK:
import UseContextExample from './components/Hooks/28-useContext';

// USE REF HOOK:
import UseRefExample from './components/Hooks/29-useRef';

// SEARCH SYSTEM WITH HOOKS
import SearchSystemExample from './components/Hooks/30-search-system';

// USE REDUCER HOOK:
import UseReducerExample from './components/Hooks/31-useReducer';

// USE IMPERATIVE HANDLE HOOK:
import UseImperativeHandleExample from './components/Hooks/32-useImperativeHandle';

// REACT.MEMO:
import ReactMemoExample from './components/Hooks/33-reactMemo';

// PERSONALIZED HOOKS:
import PersonalizedHookExample from './components/Hooks/34-personalizedHook';

// PERSONALIZED HTTP:
import PersonalizedHTTPExample from './components/Hooks/35-personalizedHTTP';

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
      <h3>useContext Hook:</h3>
      <UseContextExample />
      <hr />
      <h3>useRef Hook:</h3>
      <UseRefExample />
      <hr />
      <h3>Search System Example using useState, useEffect & useRef:</h3>
      <SearchSystemExample />
      <hr />
      <h3>useReducer Hook:</h3>
      <UseReducerExample />
      <hr />
      <h3>useImperativeHandle Hook:</h3>
      <UseImperativeHandleExample />
      <hr />
      <h3>React.memo():</h3>
      <ReactMemoExample />
      <hr />
      <h3>Personalized Hook:</h3>
      <PersonalizedHookExample />
      <hr />
      <h3>Personalized HTTP:</h3>
      <PersonalizedHTTPExample />
      <hr />
    </div>
  );
};

export default Hooks;
