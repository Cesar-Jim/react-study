##### Refs

Refs:

- access DOM elements or a React component instance
- are used in cases where we want to change the value of a child component without making use of props
- can be objects created by React.createRef() function or a callback function
- would return the node we are referencing
- should be used sparingly
- are useful to make third-party library integrations

* Refs are React's preferred way to reference DOM nodes instead of using JavaScript methods such as getElementById() or getElementsByClassName()
* For hooks, refs can be used with useRef()
