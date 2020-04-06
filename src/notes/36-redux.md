##### Redux

Redux:

- is a library that manages and stores the state of an application
- the state is centralized in a single place called Redux Store (all kind of data structures can be stored here)
- the state in the store is immutable. The state can be updated by emitting actions

* Store: is the central storage of the application's state
* Reducer: is a pure function which returns the CURRENT STATE of the application. Whatever the reducer returns, will be saved in the store
  example:  
  const reducer = (a, b) => { return a + b }

* Pure function:
  - is a function that will always return the same output given the same inputs. We cannot return radom values, for example
  - inside a pure function we cannot generate side effects, like modifying a global variable
