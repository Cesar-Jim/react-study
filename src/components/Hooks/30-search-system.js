import React, { useState, useEffect, useRef } from 'react';
import { useDebounce } from 'use-debounce';

const App = () => {
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);
  const [search] = useDebounce(name, 600);

  // const entry = useRef();

  useEffect(() => {
    // API call
    fetch(
      `https://universidad-react-api-test.luxfenix.now.sh/products?name=${name}`
    )
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [search]); // re-run this effect every time name changes

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3>Search System</h3>
      <input type='text' onChange={handleChange} />
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
