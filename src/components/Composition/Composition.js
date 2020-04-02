import React from 'react';
import { Counter, Title, Button } from './components/Counter';

const App = () => {
  return (
    <div>
      <Counter>
        <Title />
        <Button type='increment' />
        <Title>
          {click => (
            <div style={{ color: 'purple' }}>
              <h2>{click}</h2>
            </div>
          )}
        </Title>
        <Button type='decrement' />
      </Counter>
    </div>
  );
};
export default App;
