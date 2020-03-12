Hooks

* Hooks embrace JS closures and avoid introducing React-specific APIs where JS already provides a solution
* useState:
  - 
* useEffect: 
  - In React classes we put side effects into componentDidMount and componentDidUpdate
  - you tell React that a component needs to do something after render, React will remember the effect and call it after performing the DOM updates
  - useEffect, by default, runs after every render (including the first one) and after every update
  - React guarantees the DOM has been updated by the time it runs the effects
  - The majority of effects don't need to happen synchronously
  - There are effects with and without cleanups
  - Every effect may return a function that cleans up after it
  - React performs the clean up when the component unmounts
  - Use multiple effects to separate concerns
  - React will apply every effect used by the component, in the order they were specified
  - React can skip applying an effect if certain values haven't changed between re-renders. To do so, pass an array as an optional second argument to useEffect
  - A [] can be passed to run an effect and clean it up only once (on mount and unmount)

* Rules of Hooks
  - ONLY call hooks at the top level
    - Don't call hooks inside loops, conditions, or nested functions, instead, create these inside the Hooks!
    - This ensures Hooks are called in the same order each time a component renders
  - ONLY call hooks from React functions
    - Call hooks from React function components
    - Call hooks from custom Hooks
    - This ensures that all stateful logic in a component is clearly visible from its source code
  - React relies on the order in which Hooks are called

* Building own Hooks
  - Building own hooks lets you extract component logic into reusable functions
  - Traditionally in React there are 2 popular ways to share stateful logic between components: render props and higher-order components.
  - A custom hook is a JavaScript function whose name starts with "use" and that may call other Hooks
  - Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature
  - Custom Hooks are a mechanism to reuse stateful logic, but every time you use a custom Hook, all state and effects inside of it are fully isolated
  - Since Hooks are functions, we can pass information between them

* Hooks API reference
  - Basic:
    - useState: returns a stateful value, and a function to update it
    - useEffect
    - useContext: a component calling useContext will always re-render when the context value changes.
  - Additional:
    - useReducer
    - useCallback
    - useMemo
    - useRef
    - useImperativeHandle
    - useLayoutEffect
    - useDebugValue


 

