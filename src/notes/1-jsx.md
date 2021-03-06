##### Intro to JSX

JSX:

- is an expression like: const element = <h1>Hello there</h1>;
- is a mix of HTML and JavaScript
- is not understandable to any browser. Is neither a string nor HTML.
- can reminds us as a template language but it also comes with the full power of JavaScript.
- produces React elements!
- is not mandatorily required to run React, but it is so helpful, that most people opt to use it.

* The aforementioned expression, will get translated into: const element = React.createElement("h1", null, "Hello there");

Where:
h1 = the type of tag we want to add
null = the props "element" contains (none in this case). Props are
also known as input data
"Hello there" = internal elements (in this case just a string)

##### JSX to Vanilla JSX

JSX:
const title = <h1>Hello React</h1>;
const section = <section><Title /></section>;

Vanilla JS:
var title = React.createElement("h1", null, "Hello React");
var section = React.createElement(
"section",
null,
React.createElement(Title, null)
);

It is obviously way much cleaner to write JSX instead of Vanilla JS

##### Interpolating variable in JSX

const name = 'Cesar';
const element = <h1>Hello, {name}</h1>

Note the use of curly braces... Where any valid JavaScript can be placed
