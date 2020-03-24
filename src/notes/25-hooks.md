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

useLayoutEffect

- Fundamentally does the same as useEffect
- it is SYNCHRONOUS
- It gets executed BEFORE the DOM is updated
