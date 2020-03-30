##### Higher-Order Components

Higher Order Components

- is an advanced technique for reusing component logic
- are not part of the React API, per se
- they are a pattern that emerges from React's compositional nature
- is a function that takes a component and returns a new component
- are JavaScript functions used for adding functionalities to the existing component
- are pure, which means they are receiving data and returning values according to that data
- receive as parameter another component and return a new component

* HOC should not make any modifications
* Do not use HOCs in the render() method
* If the data changes,higher order functions are re-run with different data input
* The information flows bi-directionally between parent and child
* This type of pattern is used by a lot of libraries like Redux or Router
