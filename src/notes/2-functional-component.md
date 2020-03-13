##### Functional Components

A functional component:

- is a plain JavaScript function which accepts props as an argument and returns JSX (a React element).
- is a function that takes props and returns JSX.
- don't have state or life cycle methods
- is easier to read, debug, and test
- is a React Component without the render function render()

* everything defined in the function's body is the render function which returns JSX in the end
* defining React components and rendering them within each other makes Composition in React possible
* arrow functions inherit 'this' from their parent
* STATELESS FUNCTIONAL components don't manage state and don't have any side-effects (like accessing the browser's local storage)
* REACT HOOKS made it possible to have state in FUNCTIONAL COMPONENTS
* you can create or add as many functions inside the Functional Component as you want to act as explicit event handlers or to encapsulate other business logic

##### Example of a functional component

function FunctionalComponent() {
const greeting = 'Hi, I am a functional component'

return <p>{greeting}</p>
}

export default FunctionalComponent;

##### Example of a functional component using fat arrow

const functionalComponent = () => <p>{greeting}</p>

##### Rendering a React Component inside a Functional Component

Function App() {

return <FunctionalComponent />
}

export default App;
