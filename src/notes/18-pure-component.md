##### PureComponent

Pure React Function Component:

- is a similar class to Component but the fundamental difference is that it takes advantage of the shouldComponentUpdate(), which automatically revises props and state of upper levels. (this is for class components)
- decides when the render() method should be executed and when it shouldn't

* Component and Pure Component have one difference: PureComponent handles the shouldComponentUpdate() method for you
* When props or state changes, PureComponent will do a shallow comparison (will not dig into nested values) on both props and state
* Care should be taken with nested props, since a PureComponent only checks the first level of props
* React memo (which is one of React's top level APIs), can be used to prevent a re-render when the incoming props of this component haven't changed (using hooks)
