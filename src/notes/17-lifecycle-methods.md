##### Lifecycle Methods

The 3 main phases are:

- Mount - is executed only once when the component is created
- Update - can be executed several times when:
  - new props are received by a component
  - setState()
  - forceUpdate()
- Unmount

Functional Components Life cycle methods:

- there is the mounting life cycle for React components when they are rendered for the first time
- Mount: the useEffect() hook is used to execute something when a React component **did mount**
- Update: every time upcoming props or state of the component change, the component triggers a re-render to display the latest status which is often derived from the props and  
  state
- if you want to act upon a re-render, the Effect Hook can be used to do something after the component **did update**
- by using the second argument of the Effect Hook, it can be decided whether it runs:
  - every time (no argument)
  - only on mount and un-mount ([] argument)
  - only when a certain variable changes (example: [count] argument)
- Class life cycle methods do not exist in function components

Class Components Life cycle Methods:

The most common are:

1. constructor()

- is the first method that gets executed in the mounting phase
- used to initialize values
- passes the context to different methods of the class

2. render()

- always required in class components
- inside this method the component's markup is returned which will eventually be injected in the application
- props and state can be accessed from the render() method
- never call setState() or forceUpdate() inside render() since this will cause an infinite loop
- an array can also be returned inside render

3. componentDidMount()

- Only executes once for each component
- HTTP requests should be done inside this method
- event listeners should also be used inside this method (shall be cleaned up after the component is unmounted)

4. shouldComponentUpdate()

- acts like a switch that dictates if the component renders or not
- usually used for performance reasons

5. componentDidUpdate()

- it's the last method that gets executed in the update phase
- it gets every time a component suffers an update
- prevProps and prevState can be accessed in this method
- this method is used to make subsequent API calls after the initial one made in componentDidMount()

6. componentWillUnmount()

- used to eliminate listeners or intervals
- executed in the unmount phase
- ideal for cleaning intervals, event listeners, or cleaning something of the parent component.
