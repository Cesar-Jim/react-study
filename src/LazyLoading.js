// Example of code splitting and lazy loading
import React, { useState, lazy, Suspense } from 'react';
//import Image from './components/LazyLoading/Image';

import { MoonLoader } from 'react-spinners';

// Code splitting and asynchronous importing / dynamic importing
const Image = lazy(() => import('./components/LazyLoading/Image'));

const App = () => {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };

  return (
    <div style={styles}>
      <button onClick={toggle}>{show ? 'Hide' : 'Show'}</button>
      {show && (
        <Suspense fallback={<MoonLoader color='orangered' />}>
          <Image />
        </Suspense>
      )}
    </div>
  );
};
export default App;
