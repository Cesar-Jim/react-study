##### Portals

Portals:

- are an API for rendering components outside of your app's DOM hierarchy
- are recommended to be used for modals, tooltips, floating menus/elements, widgets, that might need to overflow from the root component.
- behave like a normal React child. Pass it props and they will react to updates
- usage is a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component

* Instead of returning an element in a component's render method, return a portal
* A component rendered in a portal acts as if it is in the React tree
* Portals can be mounted outside of the root tag which is the main entry for the application
* Modals are a great example of where we may need to render a component outside of the current DOM structure
