##### Children Prop

The Children prop (this.props.children OR props.children):

- is a special property of React Components which contains any child elements defined within the component
- is used to render content in our component
- is used to add the data between the opening and closing JSX tags
- can be passed in several ways such as:
  - String Literals: <MyComponent>Hello world!</MyComponent> --> props.children in MyComponent will simply be the string "Hello world!".
  - JSX children: useful for displaying nested components
    <MyContainer>
    <MyFirstComponent />
    <MySecondComponent />
    </MyContainer>
  - JavaScript Expressions As Children --> <MyComponent>foo</MyComponent> OR <MyComponent>{'foo'}</MyComponent>
    function Hello(props) {
    return <div>Hello {props.addressee}!</div>;
    }
  - Functions As Children

* In React, a component can have one, many or no children.
* It is mandatory to define a component with opening and closing tags to use props.children

- Example:

function Sidebar(props) {

    return (
        <div className="sidebar">
            {props.children}
        </div>
    )

}
