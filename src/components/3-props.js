import React from 'react';

// Newspaper is the main Functional Component
function Newspaper() {
  const news = 'Coronavirus Hits Hard!';
  const newsTwo = 'The Oil Prices Battle';

  return (
    <div>
      <Headline value={news} />
      <HeadlineTwo value={newsTwo} />
    </div>
  );
}

// Extract data using the props object
function Headline(props) {
  return <h2>{props.value}</h2>;
}

// Extract data by destructuring props
function HeadlineTwo({ value }) {
  return <h2>{value}</h2>;
}

export default Newspaper;
