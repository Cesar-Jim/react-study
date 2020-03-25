##### Hooks

Hooks:

- were introduced in React 16.8 as a new feature
- allow the creation of components based on functions with the functionality of a class-based component (handle & update state, the use of context for communications between components, simulate lifecycle methods)
- don't work inside classes

* Hooks are functions that let you “hook into” React state and lifecycle features from function components
* The use of hooks reduces the code base extension
* Using hooks reduces complexity
* Logic separation gets easier with hooks
* With hooks, you can extract stateful logic from a component so it can be tested independently and reused. This makes it easy to share Hooks among many components or with the
  community

useState:

- Provides the capability of creating, managing and updating state inside a functional component
- Code gets more compact and declarative

useEffect:

- Emulates in some way lifecycles methods such as: componentDidMount(), componentDidUpdate(), componentWillUnmount()
- An effect is anything that is not managed inside of React, like an event listener or an API REST call or a subscription
- It is ASYNCHRONOUS
- Gets executed AFTER the DOM is updated

useLayoutEffect:

- Fundamentally does the same as useEffect
- it is SYNCHRONOUS
- It gets executed BEFORE the DOM is updated

useContext:

- fundamentally, the context helps us consume information and trigger events to update that information from different levels within the application, thus avoiding passing data by cascading it from component to component using props
- It's an easy alternative to Redux if we just need to pass the data to the children elements

useRef:

- links or references elements of the DOM
- refs provide a way to access DOM nodes or React elements
- createRef returns a new ref on every render, while useRef returns the SAME ref each time
- useRef can hold a value in its .current property and it can persist after the component rerenders

useReducer:

- is an alternative to useState to contain the state and update it
- React team recommends to have a state for a given value, however, sometimes we need to concentrate all the information inside an object, useReducer serves this use case.
  Especially for components in charge of managing the state of an entire application
- the state will only be updated with the predefined actions of the reducer
- use this hook when the state has a significantly quantity of properties

useImperativeHandle:

- used to trigger events from a parent component into a child component
- It allows you to replace native functions (such as blur, focus, etc) with functions of your own, thus allowing side-effects to the normal behavior, or a different behavior
  altogether. Though, you can call the function whatever you like
- is rarely used

React.memo():

- is a Higher Order Component
- similar to the lifecycle method, shouldComponentUpdate()
- improves the performance of our functional components
- available since React 16.6
- it is like memorizing or keeping information that will not change over time (concept of memoization)
- premise: if a component doesn't change, it shouldn't rerender
- React.memo() is ideal for big lists
- care must be taken since this method will not see nested properties / objects
