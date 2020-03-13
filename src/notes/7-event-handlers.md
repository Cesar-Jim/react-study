##### Event Handlers

Event Handlers:

- are used to determine what action is to be taken whenever an event is fired
- examples: mouse click (onClick), change in text input (onChange), focusing an element (onFocus), blur of an element (onBlur)
- are written in camelCase format like --> onClick

* The 'event' object variable passed as parameter, is React's standardized synthetic event, and not the native event defined in HTML
* The synthetic event is a standardized one which works on different browsers
* If required, we can still access the browser's native event passing: e.nativeEvent as a parameter
* React cleans the synthetic event right after it occurs. If the event is needed for later use, the event.persist() can be used or the event can be kept in a variable for later use
