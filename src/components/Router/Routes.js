import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import queryString from 'query-string';

const Hello = () => {
  return <h1>Hello</h1>;
};

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link to='/products/gaming'>Gaming </Link>
      <Link to='/products/liquors'>Liquors </Link>
    </div>
  );
};

const Home = props => {
  console.log(props);
  return <h1>Home</h1>;
};

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
};

const navActive = {
  color: 'orangered'
};

const ProductsCategory = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h2>Category: {match.params.category}</h2>
    </div>
  );
};

const Navigation = () => (
  <nav style={navStyles}>
    <NavLink
      to={{
        pathname: '/',
        search: '?sort=name',
        hash: '#hash-another',
        state: {
          name: 'Cesar Jimenez',
          age: 42
        }
      }}
      activeStyle={navActive}
      exact
    >
      Home{' '}
    </NavLink>
    <NavLink to='/hello' activeStyle={navActive}>
      Hello{' '}
    </NavLink>
    <NavLink to='/products' activeStyle={navActive}>
      Products{' '}
    </NavLink>
    <NavLink to='/clothing' activeStyle={navActive}>
      Clothing{' '}
    </NavLink>
  </nav>
);

const Clothing = ({ location }) => {
  console.log(location);
  const { color, size } = queryString.parse(location.search);

  return (
    <div>
      <h3>Clothing</h3>
      <div>Color: {color}</div>
      <div>Size: {size}</div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path='/' exact render={Home} />
      <Route path='/hello' render={Hello} />
      <Route path='/products' exact render={Products} />
      <Route path='/products/:category/:id?' render={ProductsCategory} />
      <Route path='/clothing' render={Clothing} />
    </BrowserRouter>
  );
};

export default App;
